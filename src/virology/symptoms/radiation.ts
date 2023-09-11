/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const radiation: Symptom = {
	name: "Iraddiant Cells",
	description: "Causes the cells in the host's body to give off harmful radiation.",
	base_stats: new SymptomStats({
		level: 7,
		resistance: 2,
		severity: 3,
		speed: -1,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [new Threshold("Host takes radiation damage faster.", new Stats({ speed: 8 }))],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 8) {
			severity += 1;
		}
		return severity;
	},
};
