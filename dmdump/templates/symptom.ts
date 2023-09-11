/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
{% macro fix_name(arg) -%}
{{ arg.replace("stage_speed", "speed").replace("stage_rate", "speed") }}
{%- endmacro -%}
{%- if !thresholds.is_empty() || set_severity.is_some() -%}
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";
{%- else -%}
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";
{%- endif %}

export const {{ base_name|lower }}: Symptom = {
	name: "{{ name }}",
	description: "{{ desc }}",
	base_stats: new SymptomStats({% call fix_name(stats|json) %}),
{%- if !thresholds.is_empty() %}
	thresholds: [
{%- for threshold in thresholds %}
		new Threshold("{{ threshold.desc }}", new Stats({ {%- call fix_name(threshold.name) -%}: {{ threshold.level.unwrap_or(0) }} })),
{%- endfor %}
	],
{% endif -%}
{% if let Some(set_severity) = set_severity -%}
	set_severity: (stats: Stats, symptom: Symptom) => {
		let severity = symptom.base_stats.severity;
		{%- call fix_name(set_severity) -%}
		return severity;
	},
{%- endif -%}
};
