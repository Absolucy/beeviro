/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { SymptomStats } from "../stats";

export const viralevolution: Symptom = {
	name: "Viral Evolutionary Acceleration",
	description:
		"The virus quickly adapts to spread as fast as possible both outside and inside a host. This, however, makes the virus easier to spot, and less able to fight off a cure. This symptom encourages disease mutation",
	base_stats: new SymptomStats({
		level: 4,
		resistance: -3,
		speed: 5,
		stealth: -2,
		transmission: 3,
	}),
};
