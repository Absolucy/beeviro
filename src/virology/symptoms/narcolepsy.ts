/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const narcolepsy: Symptom = {
	name: "Narcolepsy",
	description: "The virus causes a hormone imbalance, making the host sleepy and narcoleptic.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -1,
		severity: 3,
		speed: -2,
		stealth: 1,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"Also relaxes the muscles, weakening and slowing the host.",
			new Stats({ transmission: 7 })
		),
		new Threshold(
			"Causes narcolepsy more often, increasing the chance of the host falling asleep.",
			new Stats({ resistance: 10 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 10) {
			severity += 1;
		}
		return severity;
	},
};
