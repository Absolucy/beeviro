/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const surface: Symptom = {
	name: "Superficial Healing",
	description:
		"The virus accelerates the body's natural healing, causing the body to heal minor wounds quickly. Causes heavy scarring.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: -2,
		severity: -1,
		speed: -2,
		stealth: -1,
	}),
	thresholds: [
		new Threshold("Doubles healing speed.", new Stats({ speed: 8 })),
		new Threshold("Improves healing threshold.", new Stats({ resistance: 10 })),
	],
};
