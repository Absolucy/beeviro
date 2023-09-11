/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const sneeze: Symptom = {
	name: "Sneezing",
	description:
		"The virus causes irritation of the nasal cavity, making the host sneeze occasionally.",
	base_stats: new SymptomStats({
		level: 1,
		resistance: 3,
		stealth: -2,
		transmission: 4,
	}),
	thresholds: [
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
		new Threshold(
			"The host may spread the disease through sneezing.",
			new Stats({ transmission: 12 })
		),
	],
};
