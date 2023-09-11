/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const visionloss: Symptom = {
	name: "Hyphema",
	description:
		"The virus causes inflammation of the retina, leading to eye damage and eventually blindness.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -3,
		severity: 3,
		speed: -4,
		stealth: -1,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"Weakens extraocular muscles, eventually leading to complete detachment of the eyes.",
			new Stats({ resistance: 12 })
		),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 12) {
			severity += 1;
		}
		return severity;
	},
};
