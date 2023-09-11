/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const chem: Symptom = {
	name: "Toxolysis",
	description: "The virus rapidly breaks down any foreign chemicals in the bloodstream.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -2,
		speed: 2,
		transmission: -2,
	}),
	thresholds: [
		new Threshold("Increases chem removal speed.", new Stats({ resistance: 7 })),
		new Threshold("Consumed chemicals nourish the host.", new Stats({ speed: 6 })),
	],
};
