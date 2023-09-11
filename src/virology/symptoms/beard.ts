/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const beard: Symptom = {
	name: "Facial Hypertrichosis",
	description: "The virus increases hair production significantly, causing rapid beard growth.",
	base_stats: new SymptomStats({
		level: 5,
		resistance: 3,
		speed: 3,
		stealth: 1,
		transmission: 1,
	}),
};
