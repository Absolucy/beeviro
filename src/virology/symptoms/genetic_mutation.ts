/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const genetic_mutation: Symptom = {
	name: "Deoxyribonucleic Acid Saboteur",
	description:
		"The virus bonds with the DNA of the host, causing damaging mutations until removed.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -3,
		severity: 3,
		stealth: -2,
		transmission: -3,
	}),
	thresholds: [
		new Threshold("Causes two harmful mutations at once.", new Stats({ resistance: 8 })),
		new Threshold("Increases mutation frequency.", new Stats({ speed: 10 })),
		new Threshold(
			"The mutations persist even if the virus is cured.",
			new Stats({ stealth: 5 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 8) {
			severity += 1;
		}
		return severity;
	},
};
