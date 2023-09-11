/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const pustule: Symptom = {
	name: "Bubonic Infection",
	description:
		"The virus causes festering infections in the host's lymph nodes, leading to festering buboes that deal toxin damage.",
	base_stats: new SymptomStats({
		level: 7,
		resistance: -2,
		severity: 3,
		speed: 3,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"Buboes will occasionally burst when disturbed or left too long, shooting out toxic pus.",
			new Stats({ transmission: 4 })
		),
		new Threshold(
			"Pustules appear on the host more frequently, dealing more damage.",
			new Stats({ transmission: 6 })
		),
	],
};
