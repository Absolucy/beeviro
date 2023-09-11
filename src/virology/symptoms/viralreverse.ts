/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const viralreverse: Symptom = {
	name: "Viral Aggressive Metabolism",
	description:
		"The virus sacrifices its long term survivability to nearly instantly fully spread inside a host. The virus will start at the last stage, but will eventually decay and die off by itself.",
	base_stats: new SymptomStats({
		level: 4,
		resistance: 1,
		speed: 3,
		stealth: 1,
		transmission: -4,
	}),
	thresholds: [
		new Threshold(
			"Highest between these determines the amount of time before self-curing.",
			new Stats({ speed: 0 })
		),
		new Threshold("Doubles the time before the virus self-cures", new Stats({ stealth: 4 })),
	],
};
