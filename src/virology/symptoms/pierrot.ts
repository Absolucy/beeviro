/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const pierrot: Symptom = {
	name: "Pierrot's Throat",
	description: "Causes the host to honk randomly",
	base_stats: new SymptomStats({
		resistance: 3,
		speed: 1,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"There's a rare chance the disease is spread everytime the host honks.",
			new Stats({ transmission: 10 })
		),
		new Threshold("The host grows a peculiar clown mask.", new Stats({ resistance: 10 })),
		new Threshold("Host becomes clumsy, similar to a clown.", new Stats({ resistance: 15 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 10) {
			severity += 1;
			if (stats.resistance >= 15) {
				severity += 2;
			}
		}
		return severity;
	},
};
