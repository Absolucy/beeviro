/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const inorganic_adaptation: Symptom = {
	name: "Inorganic Biology",
	description:
		"The virus can survive and replicate even in an inorganic environment, increasing its resistance and infection rate.",
	base_stats: new SymptomStats({
		level: 4,
		resistance: 4,
		speed: -2,
		stealth: -1,
		transmission: 3,
	}),
};
