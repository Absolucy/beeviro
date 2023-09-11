/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const viralpower: Symptom = {
	name: "Viral power multiplier",
	description: "The virus has more powerful symptoms. May have unpredictable effects",
	base_stats: new SymptomStats({
		level: -1,
		resistance: 2,
		speed: 2,
		stealth: 2,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"Constantly scrambles the power of all unneutered symptoms.",
			new Stats({ transmission: 8 })
		),
		new Threshold("Doubles the power boost", new Stats({ speed: 8 })),
	],
};
