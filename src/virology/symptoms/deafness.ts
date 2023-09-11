/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const deafness: Symptom = {
	name: "Deafness",
	description: "The virus causes inflammation of the eardrums, causing intermittent deafness.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -1,
		severity: 2,
		speed: 1,
		stealth: -1,
		transmission: -3,
	}),
	thresholds: [
		new Threshold(
			"Causes permanent deafness, instead of intermittent.",
			new Stats({ resistance: 9 })
		),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 9) {
			severity += 1;
		}
		return severity;
	},
};
