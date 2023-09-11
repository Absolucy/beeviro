/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const undead_adaptation: Symptom = {
	name: "Necrotic Metabolism",
	description: "The virus is able to thrive and act even within dead hosts.",
	base_stats: new SymptomStats({
		level: 4,
		resistance: 2,
		speed: 2,
		stealth: 2,
	}),
};
