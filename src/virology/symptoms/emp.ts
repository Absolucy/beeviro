/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const emp: Symptom = {
	name: "Organic Flux Induction",
	description: "Causes electromagnetic interference around the subject",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -1,
		severity: 2,
		speed: -1,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"The disease resets cell DNA, quickly curing cell damage and mutations.",
			new Stats({ stealth: 2 })
		),
		new Threshold(
			"The EMP affects electronics adjacent to the subject as well.",
			new Stats({ transmission: 8 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 2) {
			severity -= 1;
		}
		if (stats.transmission >= 8) {
			severity += 1;
		}
		return severity;
	},
};
