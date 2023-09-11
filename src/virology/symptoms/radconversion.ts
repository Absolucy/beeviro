/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const radconversion: Symptom = {
	name: "Aptotic Culling",
	description:
		"The virus causes infected cells to die off when exposed to radiation, causing open wounds to appear on the host's flesh. The end result of this process is the removal of radioactive contamination from the host.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 1,
		speed: 1,
		stealth: 1,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"The disease also kills off contaminated cells, converting Toxin damage to Brute damage, at an efficient rate.",
			new Stats({ speed: 6 })
		),
		new Threshold(
			"The disease also kills off genetically damaged cells and their neighbors, converting Cellular damage into Burn damage, at an inefficient rate.",
			new Stats({ resistance: 12 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 6) {
			severity -= 1;
		}
		if (stats.resistance >= 12) {
			severity -= 1;
		}
		return severity;
	},
};
