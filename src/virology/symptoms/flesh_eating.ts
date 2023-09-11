/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const flesh_eating: Symptom = {
	name: "Hemorrhaging Fasciitis",
	description: "The virus aggressively attacks the skin and blood, leading to extreme bleeding.",
	base_stats: new SymptomStats({
		level: 7,
		resistance: -2,
		severity: 4,
		stealth: -3,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The host takes brute damage as their flesh is burst open",
			new Stats({ resistance: 10 })
		),
		new Threshold(
			"The host will bleed far more violently, losing even more blood, and spraying infected blood everywhere.",
			new Stats({ transmission: 8 })
		),
	],
};
