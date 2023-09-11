/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const viraladaptation: Symptom = {
	name: "Viral Self-Adaptation",
	description:
		"The virus mimics the function of normal body cells, becoming harder to spot and to eradicate, but reducing its speed. This symptom discourages disease mutation",
	base_stats: new SymptomStats({
		level: 4,
		resistance: 5,
		speed: -3,
		stealth: 3,
	}),
};
