/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const nano_destroy: Symptom = {
	name: "Silicolysis",
	description:
		"The virus reacts to nanites in the host's bloodstream by attacking and consuming them. May also cause nanites to go haywire. Damages the host's mechanical limbs",
	base_stats: new SymptomStats({
		level: 6,
		resistance: 4,
		speed: -1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold(
			"Increases the virus' growth rate while nanites are present.",
			new Stats({ speed: 5 })
		),
		new Threshold(
			"Severely increases the rate at which the nanites are destroyed.",
			new Stats({ resistance: 7 })
		),
	],
};
