/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const fever: Symptom = {
	name: "Fever",
	description: "The virus causes a febrile response from the host, raising its body temperature.",
	base_stats: new SymptomStats({
		level: 2,
		resistance: 3,
		speed: 3,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"Increases fever intensity, fever can overheat and harm the host.",
			new Stats({ resistance: 5 })
		),
		new Threshold("Further increases fever intensity.", new Stats({ resistance: 10 })),
	],
};
