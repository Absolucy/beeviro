/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const confusion: Symptom = {
	name: "Confusion",
	description:
		"The virus interferes with the proper function of the neural system, leading to bouts of confusion and erratic movement.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -1,
		severity: 2,
		speed: -3,
		stealth: 1,
	}),
	thresholds: [
		new Threshold("Causes brain damage over time.", new Stats({ resistance: 6 })),
		new Threshold("Increases confusion duration.", new Stats({ transmission: 6 })),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 6) {
			severity += 1;
		}
		return severity;
	},
};
