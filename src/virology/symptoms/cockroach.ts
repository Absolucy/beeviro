/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const cockroach: Symptom = {
	name: "SBG Syndrome",
	description:
		"Causes bluespace synchronicity with nearby air channels, making the roaches infesting the station's scrubbers crawl from the host's face",
	base_stats: new SymptomStats({
		resistance: 2,
		speed: 3,
		stealth: 1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold("Increases roach speed", new Stats({ speed: 8 })),
		new Threshold("When the host dies, more roaches spawn", new Stats({ transmission: 8 })),
	],
};
