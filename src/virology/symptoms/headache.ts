/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const headache: Symptom = {
	name: "Headache",
	description: "The virus causes inflammation inside the brain, causing constant headaches.",
	base_stats: new SymptomStats({
		level: 1,
		resistance: 4,
		speed: 2,
		stealth: -1,
	}),
	thresholds: [
		new Threshold(
			"Headaches will cause severe pain, that weakens the host.",
			new Stats({ speed: 6 })
		),
		new Threshold(
			"Headaches become less frequent but far more intense, preventing any action from the host.",
			new Stats({ speed: 9 })
		),
		new Threshold("Reduces headache frequency until later stages.", new Stats({ stealth: 4 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 6) {
			severity += 1;
			if (stats.speed >= 9) {
				severity += 1;
			}
		}
		return severity;
	},
};
