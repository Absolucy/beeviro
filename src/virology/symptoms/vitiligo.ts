/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const vitiligo: Symptom = {
	name: "Vitiligo",
	description:
		"The virus destroys skin pigment cells, causing rapid loss of pigmentation in the host.",
	base_stats: new SymptomStats({
		level: 5,
		speed: 3,
		stealth: 2,
		transmission: 1,
	}),
};
