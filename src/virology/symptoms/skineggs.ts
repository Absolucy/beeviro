/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const skineggs: Symptom = {
	name: "Dermagraphic Ovulogenesis",
	description:
		"The virus causes the host to grow egg-like nodules on their skin, which periodically fall off and contain the disease and some healing chemicals.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 1,
		severity: -1,
		stealth: -3,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"Eggs and Egg Sacs contain all diseases on the host, instead of just the disease containing the symptom.",
			new Stats({ transmission: 12 })
		),
		new Threshold(
			"Egg Sacs will 'explode' into eggs after a period of time, covering a larger area with infectious matter.",
			new Stats({ transmission: 16 })
		),
		new Threshold(
			"Eggs and Egg Sacs contain more healing chems.",
			new Stats({ resistance: 10 })
		),
		new Threshold(
			"Eggs and Egg Sacs become nearly transparent, making them more difficult to see.",
			new Stats({ stealth: 6 })
		),
		new Threshold("Egg Sacs fall off the host more frequently.", new Stats({ speed: 10 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 10) {
			severity -= 1;
		}
		if (stats.transmission >= 12) {
			severity += 1;
			if (stats.transmission >= 16) {
				severity += 1;
			}
		}
		if (stats.stealth >= 6) {
			severity += 1;
		}
		return severity;
	},
};
