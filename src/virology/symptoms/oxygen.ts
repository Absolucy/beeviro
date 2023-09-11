/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const oxygen: Symptom = {
	name: "Self-Respiration",
	description:
		"The virus rapidly synthesizes oxygen, effectively removing the need for breathing.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: -3,
		severity: -1,
		speed: -3,
		stealth: 1,
		transmission: -4,
	}),
	thresholds: [
		new Threshold("Additionally regenerates lost blood.", new Stats({ resistance: 8 })),
	],
};
