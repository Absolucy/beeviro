/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const lubefeet: Symptom = {
	name: "Ducatopod",
	description:
		"The host now sweats industrial lubricant from their feet, lubing tiles they walk on. Combine with Pierrot's throat for the penultimate form of torture.",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 2,
		severity: 2,
		speed: 5,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"The host sweats even more profusely, lubing almost every tile they walk over",
			new Stats({ transmission: 10 })
		),
		new Threshold(
			"The host's feet turn into a pair of clown shoes.",
			new Stats({ resistance: 14 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 10) {
			severity += 1;
		}
		return severity;
	},
};
