/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const macrophage: Symptom = {
	name: "Macrophage",
	description:
		"The virus grows within the host, ceasing to be microscopic and causing severe bodily harm. These Phages will seek out, attack, and infect more viable hosts",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 1,
		severity: 2,
		speed: -2,
		stealth: -4,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"The higher the stage speed, the more frequently phages will burst from the host.",
			new Stats({ speed: 0 })
		),
		new Threshold(
			"The higher the resistance, the more health phages will have, and the more damage they will do.",
			new Stats({ resistance: 0 })
		),
		new Threshold(
			"Phages can be larger, more aggressive, and able to pierce thick clothing, with some effort.",
			new Stats({ transmission: 10 })
		),
		new Threshold(
			"Phages will carry all diseases within the host, instead of only diseases containing their own symptom",
			new Stats({ transmission: 12 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 10) {
			severity += 2;
		}
		return severity;
	},
};
