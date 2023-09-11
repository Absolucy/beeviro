/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const light: Symptom = {
	name: "Photosensitive muscle condensation",
	description:
		"The virus will cause muscles to contract when exposed to light, resulting in lowered speed, but increased durability. Muscles will become more malleable in the darkness, resulting in the host moving faster, but being more easily bruised.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 2,
		severity: -2,
		speed: -3,
	}),
	thresholds: [
		new Threshold(
			"The virus causes a wider disparity between light and dark",
			new Stats({ stealth: 3 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 3) {
			severity -= 1;
		}
		return severity;
	},
};
