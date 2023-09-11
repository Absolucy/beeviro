/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const heartattack: Symptom = {
	name: "Heart Disease",
	description:
		"This disease infiltrates the host's heart, causing cardiac arrest after a long incubation period",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 1,
		severity: 5,
		speed: -6,
		stealth: 2,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"When the victim has a heart attack, their heart will pop right out of their chest, and attack!.",
			new Stats({ transmission: 10 })
		),
		new Threshold(
			"The disease is somewhat less noticeable to the host.",
			new Stats({ stealth: 2 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 10) {
			severity += 1;
		}
		return severity;
	},
};
