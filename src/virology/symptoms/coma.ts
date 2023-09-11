/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const coma: Symptom = {
	name: "Regenerative Coma",
	description:
		"The virus causes the host to fall into a death-like coma when severely damaged, then rapidly fixes the damage. Only fixes burn and brute damage.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 2,
		severity: -2,
		speed: -3,
		transmission: -3,
	}),
	thresholds: [
		new Threshold(
			"Host appears to die when falling into a coma, triggering symptoms that activate on death.",
			new Stats({ stealth: 2 })
		),
		new Threshold(
			"The virus also stabilizes the host while they are in critical condition.",
			new Stats({ resistance: 4 })
		),
		new Threshold("Increases healing speed.", new Stats({ speed: 7 })),
	],
};
