/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const viralincubate: Symptom = {
	name: "Viral Suspended Animation",
	description: "The virus has very little effect until it reaches its final stage",
	base_stats: new SymptomStats({
		level: 4,
		resistance: -2,
		speed: -2,
		stealth: 4,
		transmission: 1,
	}),
};
