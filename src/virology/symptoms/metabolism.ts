/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const metabolism: Symptom = {
	name: "Metabolic Boost",
	description:
		"The virus causes the host's metabolism to accelerate rapidly, making them process chemicals twice as fast,but also causing increased hunger.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -2,
		speed: 2,
		stealth: -1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold("Reduces hunger rate.", new Stats({ stealth: 3 })),
		new Threshold(
			"Chemical metabolization is tripled instead of doubled.",
			new Stats({ speed: 10 })
		),
	],
};
