/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const revitiligo: Symptom = {
	name: "Revitiligo",
	description:
		"The virus causes increased production of skin pigment cells, making the host's skin grow darker over time.",
	base_stats: new SymptomStats({
		level: 5,
		resistance: 2,
		speed: 1,
		stealth: 1,
		transmission: 2,
	}),
};
