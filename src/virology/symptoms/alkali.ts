/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const alkali: Symptom = {
	name: "Alkali Perspiration",
	description:
		"The virus attaches to sudoriparous glands, synthesizing a chemical that bursts into flames when reacting with water, leading to self-immolation.",
	base_stats: new SymptomStats({
		level: 9,
		resistance: -2,
		severity: 5,
		speed: -2,
		stealth: 2,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"Doubles the intensity of the effect, but reduces its frequency.",
			new Stats({ stealth: 3 })
		),
		new Threshold("Increases explosion radius when the host is wet.", new Stats({ speed: 8 })),
		new Threshold(
			"Additionally synthesizes chlorine trifluoride and napalm inside the host.",
			new Stats({ resistance: 8 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 3) {
			severity += 1;
		}
		if (stats.speed >= 8) {
			severity += 2;
		}
		return severity;
	},
};
