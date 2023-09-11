/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const teleport: Symptom = {
	name: "Thermal Retrostable Displacement",
	description:
		"When too hot or cold, the subject will return to a recent location at which they experienced safe homeostasis.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 2,
		speed: -2,
		stealth: 1,
		transmission: -3,
	}),
	thresholds: [
		new Threshold(
			"The disease acts on a smaller scale, resetting burnt tissue back to a state of health.",
			new Stats({ resistance: 6 })
		),
		new Threshold(
			"The disease becomes more active, activating in a smaller temperature range.",
			new Stats({ transmission: 8 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 6) {
			severity -= 1;
			if (stats.transmission >= 8) {
				severity -= 1;
			}
		}
		return severity;
	},
};
