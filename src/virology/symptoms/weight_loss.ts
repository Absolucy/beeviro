/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const weight_loss: Symptom = {
	name: "Weight Loss",
	description:
		"The virus mutates the host's metabolism, making it almost unable to gain nutrition from food.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: 2,
		severity: 2,
		speed: -2,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The symptom is less noticeable, and does not cause starvation.",
			new Stats({ stealth: 2 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 2) {
			severity -= 3;
		}
		return severity;
	},
};
