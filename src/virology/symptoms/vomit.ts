/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const vomit: Symptom = {
	name: "Vomiting",
	description: "The virus causes nausea and irritates the stomach, causing occasional vomit.",
	base_stats: new SymptomStats({
		level: 3,
		severity: 1,
		speed: 1,
		stealth: -2,
		transmission: 2,
	}),
	thresholds: [
		new Threshold("Host will vomit blood, causing internal damage.", new Stats({ speed: 5 })),
		new Threshold(
			"Host will projectile vomit, increasing vomiting range.",
			new Stats({ transmission: 6 })
		),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
	],
};
