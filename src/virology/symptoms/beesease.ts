/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const beesease: Symptom = {
	name: "Bee Infestation",
	description: "Causes the host to cough toxin bees and occasionally synthesize toxin.",
	base_stats: new SymptomStats({
		resistance: 2,
		severity: 2,
		speed: 1,
		stealth: -2,
		transmission: 1,
	}),
	thresholds: [
		new Threshold(
			"The bees become symbiotic with the host, synthesizing honey and no longer stinging the stomach lining, and no longer attacking the host. Bees will also contain honey, unless transmission exceeds 10.",
			new Stats({ resistance: 12 })
		),
		new Threshold(
			"Bees now contain a completely random toxin.",
			new Stats({ transmission: 10 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 10) {
			severity += 2;
			if (stats.resistance >= 12) {
				severity -= 4;
			}
		}
		return severity;
	},
};
