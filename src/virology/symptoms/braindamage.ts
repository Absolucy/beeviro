/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const braindamage: Symptom = {
	name: "Neural Decay",
	description: "Causes the host's brain cells to naturally die off, causing severe brain damage.",
	base_stats: new SymptomStats({
		level: 7,
		resistance: -2,
		severity: 3,
		speed: -3,
		stealth: 1,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The disease's damage reaches lethal levels.",
			new Stats({ transmission: 12 })
		),
		new Threshold(
			"Host's brain develops even more traumas than normal.",
			new Stats({ speed: 9 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 12) {
			severity += 1;
		}
		return severity;
	},
};
