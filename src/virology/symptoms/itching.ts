/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const itching: Symptom = {
	name: "Itching",
	description: "The virus irritates the skin, causing itching.",
	base_stats: new SymptomStats({
		level: 1,
		resistance: 3,
		speed: 3,
		transmission: 1,
	}),
	thresholds: [
		new Threshold("Increases frequency of itching.", new Stats({ transmission: 6 })),
		new Threshold(
			"The host will scrath itself when itching, causing superficial damage.",
			new Stats({ speed: 7 })
		),
	],
};
