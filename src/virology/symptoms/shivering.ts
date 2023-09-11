/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const shivering: Symptom = {
	name: "Shivering",
	description: "The virus inhibits the body's thermoregulation, cooling the body down.",
	base_stats: new SymptomStats({
		level: 2,
		resistance: 2,
		speed: 2,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"Increases cooling speed; the host can fall below safe temperature levels.",
			new Stats({ speed: 5 })
		),
		new Threshold("Further increases cooling speed.", new Stats({ speed: 10 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 5) {
			severity += 1;
			if (stats.speed >= 10) {
				severity += 1;
			}
		}
		return severity;
	},
};
