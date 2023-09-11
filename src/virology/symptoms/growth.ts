/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const growth: Symptom = {
	name: "Pituitary Disruption",
	description: "Causes uncontrolled growth in the subject.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: -2,
		severity: 1,
		speed: 1,
		stealth: -3,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"The disease heals brute damage at a fast rate, but causes expulsion of benign tumors.",
			new Stats({ speed: 6 })
		),
		new Threshold(
			"The disease heals brute damage incredibly fast, but deteriorates cell health and causes tumors to become more advanced. The disease will also regenerate lost limbs.",
			new Stats({ speed: 12 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 6) {
			severity -= 1;
			if (stats.speed >= 12) {
				severity += 3;
			}
		}
		return severity;
	},
};
