/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const youth: Symptom = {
	name: "Eternal Youth",
	description:
		"The virus becomes symbiotically connected to the cells in the host's body, preventing and reversing aging. The virus, in turn, becomes more resistant, spreads faster, and is harder to spot, although it doesn't thrive as well without a host.",
	base_stats: new SymptomStats({
		level: 5,
		resistance: 4,
		speed: 4,
		stealth: 3,
		transmission: -4,
	}),
};
