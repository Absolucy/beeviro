/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const asphyxiation: Symptom = {
	name: "Acute respiratory distress syndrome",
	description:
		"The virus causes shrinking of the host's lungs, causing severe asphyxiation. May also lead to heart attacks.",
	base_stats: new SymptomStats({
		level: 9,
		severity: 5,
		speed: -1,
		stealth: -2,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"Additionally synthesizes pancuronium and sodium thiopental inside the host.",
			new Stats({ speed: 8 })
		),
		new Threshold("Doubles the damage caused by the symptom.", new Stats({ transmission: 8 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 8) {
			severity += 1;
		}
		return severity;
	},
};
