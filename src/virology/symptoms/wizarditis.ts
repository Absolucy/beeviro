/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const wizarditis: Symptom = {
	name: "Wizarditis",
	description: "Causes the host to subconsciously believe they are in fact, a wizard.",
	base_stats: new SymptomStats({
		resistance: -2,
		speed: -3,
		stealth: 1,
		transmission: -1,
	}),
	thresholds: [
		new Threshold("The host teleports occasionally.", new Stats({ transmission: 8 })),
		new Threshold("The host grows a set of wizard robes.", new Stats({ speed: 7 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 8) {
			severity += 1;
		}
		if (stats.speed >= 7) {
			severity += 1;
		}
		return severity;
	},
};
