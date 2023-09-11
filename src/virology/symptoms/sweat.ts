/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const sweat: Symptom = {
	name: "Hyperperspiration",
	description:
		"Causes the host to sweat profusely, leaving small water puddles and extinguishing small fires",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -1,
		severity: 1,
		stealth: 1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold(
			"The sweat production ramps up to the point that it puts out fires in the general vicinity.",
			new Stats({ transmission: 4 })
		),
		new Threshold(
			"The symptom heals toxin damage and purges chemicals.",
			new Stats({ transmission: 6 })
		),
		new Threshold("The host's sweat contains traces of ammonia.", new Stats({ speed: 6 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 6) {
			severity -= 1;
		}
		return severity;
	},
};
