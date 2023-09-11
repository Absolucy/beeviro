/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const jitters: Symptom = {
	name: "Hyperactivity",
	description:
		"The virus causes restlessness, nervousness and hyperactivity, increasing the rate at which the host needs to eat,but making them harder to tire out",
	base_stats: new SymptomStats({
		level: 8,
		severity: 1,
		speed: 2,
		stealth: -4,
		transmission: -3,
	}),
	thresholds: [
		new Threshold(
			"The virus causes an even greater rate of nutriment loss, able to cause starvation, but its energy gain greatly increases",
			new Stats({ resistance: 8 })
		),
		new Threshold(
			"The virus causes extreme nervousness and paranoia, resulting in occasional hallucinations, and extreme restlessness, but greater overall energy and the ability to shake off stuns faster.",
			new Stats({ speed: 8 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 8) {
			severity -= 1;
		}
		return severity;
	},
};
