/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const alcohol: Symptom = {
	name: "Autobrewery Syndrome",
	description: "The virus causes fermentation in the stomach, leading to chronic drunkenness.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: -2,
		severity: 1,
		speed: 3,
		stealth: -1,
		transmission: -1,
	}),
	thresholds: [
		new Threshold("The host only reaches a slight buzz.", new Stats({ stealth: 3 })),
		new Threshold(
			"The levels of alcohol produced can be lethal. Overriden by the stealth threshold.",
			new Stats({ speed: 6 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 3) {
			severity -= 1;
		} else if (stats.speed >= 6) {
			severity += 3;
		}
		return severity;
	},
};
