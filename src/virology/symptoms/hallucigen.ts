/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const hallucigen: Symptom = {
	name: "Hallucigen",
	description: "The virus stimulates the brain, causing occasional hallucinations.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -1,
		severity: 1,
		speed: 1,
		stealth: 1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold("Increases the amount of hallucinations.", new Stats({ speed: 7 })),
		new Threshold("The virus mimics positive symptoms..", new Stats({ stealth: 2 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 7) {
			severity += 1;
		}
		return severity;
	},
};
