/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const nano_boost: Symptom = {
	name: "Nano-symbiosis",
	description:
		"The virus reacts to nanites in the host's bloodstream by enhancing their replication cycle. May cause unpredictable nanite behaviour. Heals the host's mechanical limbs",
	base_stats: new SymptomStats({
		level: 6,
		resistance: 2,
		speed: 2,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"Increases the virus' growth rate while nanites are present.",
			new Stats({ transmission: 5 })
		),
		new Threshold("Increases the replication boost.", new Stats({ speed: 7 })),
	],
};
