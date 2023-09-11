/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const meme: Symptom = {
	name: "Hysteria",
	description: "The virus causes mass hysteria involving a random concept.",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 1,
		speed: -1,
		stealth: 1,
		transmission: 3,
	}),
	thresholds: [
		new Threshold(
			"The virus spreads memetically, infecting hosts who can see the target.",
			new Stats({ transmission: 14 })
		),
	],
};
