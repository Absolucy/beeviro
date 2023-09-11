/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const robotic_adaptation: Symptom = {
	name: "Biometallic Replication",
	description:
		"The virus can manipulate metal and silicate compounds, becoming able to infect robotic beings. The virus also provides a suitable substrate for nanites in otherwise inhospitable hosts",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 1,
		speed: 4,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The virus will replace the host's organic organs with mundane, biometallic versions. +1 severity.",
			new Stats({ speed: 4 })
		),
		new Threshold(
			"The virus will eventually convert the host's entire body to biometallic materials, and maintain its cellular integrity. +1 severity.",
			new Stats({ resistance: 4 })
		),
		new Threshold(
			"Biometallic mass created by the virus will be superior to typical organic mass. -3 severity.",
			new Stats({ speed: 12 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 4) {
			severity += 1;
			if (stats.speed >= 12) {
				severity -= 3;
			}
		}
		if (stats.resistance >= 4) {
			severity += 1;
		}
		return severity;
	},
};
