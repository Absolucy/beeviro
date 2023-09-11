/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const shedding: Symptom = {
	name: "Alopecia",
	description: "The virus causes rapid shedding of head and body hair.",
	base_stats: new SymptomStats({
		level: 5,
		resistance: 3,
		speed: 2,
		transmission: 2,
	}),
};
