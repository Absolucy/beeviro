/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const organ_restoration: Symptom = {
	name: "Organ Restoration",
	description:
		"The virus stimulates rapid cell growth in organ tissues, slowly repairing the host's organs over time.",
	base_stats: new SymptomStats({
		level: 6,
		resistance: 3,
		severity: -1,
		speed: -2,
		stealth: 2,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The host will regenerate missing organs over a long period of time.",
			new Stats({ stealth: 4 })
		),
		new Threshold(
			"The virus causes the host's internal organs to gain some self-correcting behaviour, preventing heart attacks and appendicitis.",
			new Stats({ speed: 10 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 4) {
			severity -= 1;
		}
		return severity;
	},
};
