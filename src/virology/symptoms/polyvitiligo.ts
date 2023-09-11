/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const polyvitiligo: Symptom = {
	name: "Polyvitiligo",
	description: "The virus replaces the melanin in the skin with reactive pigment.",
	base_stats: new SymptomStats({
		resistance: 1,
		speed: 4,
		transmission: 1,
	}),
};
