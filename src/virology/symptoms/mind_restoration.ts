/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const mind_restoration: Symptom = {
	name: "Mind Restoration",
	description:
		"The virus strengthens the bonds between neurons, reducing the duration of any ailments of the mind.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -2,
		severity: -1,
		speed: 1,
		stealth: -1,
		transmission: -3,
	}),
	thresholds: [
		new Threshold("Heals minor brain traumas.", new Stats({ resistance: 6 })),
		new Threshold("Heals severe brain traumas.", new Stats({ resistance: 9 })),
		new Threshold("Purges alcohol in the bloodstream.", new Stats({ transmission: 8 })),
	],
};
