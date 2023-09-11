/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const sensory_restoration: Symptom = {
	name: "Sensory Restoration",
	description:
		"The virus stimulates the production and replacement of sensory tissues, causing the host to regenerate eyes and ears when damaged.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: 1,
		severity: -1,
		speed: -2,
		transmission: 2,
	}),
};
