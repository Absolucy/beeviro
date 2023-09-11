/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const heal: Symptom = {
	name: "Basic Healing (does nothing)",
	description: "You should not be seeing this.",
	base_stats: new SymptomStats({
		level: -1,
	}),
	thresholds: [
		new Threshold("Healing will no longer be visible to onlookers.", new Stats({ stealth: 4 })),
	],
};
