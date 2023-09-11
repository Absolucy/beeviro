/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const spiked: Symptom = {
	name: "Cornu Cutaneum",
	description:
		"The virus causes the host to unpredictably grow and shed sharp spines, damaging those near them.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 3,
		severity: 1,
		speed: -3,
		stealth: -3,
	}),
	thresholds: [
		new Threshold("Spikes deal more damage.", new Stats({ transmission: 6 })),
		new Threshold(
			"Hard spines give the host armor, scaling with resistance.",
			new Stats({ resistance: 6 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 6) {
			severity -= 1;
		}
		return severity;
	},
};
