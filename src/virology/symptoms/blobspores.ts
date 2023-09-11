/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const blobspores: Symptom = {
	name: "Blob Spores",
	description:
		"This symptom causes the host to produce blob spores, which will leave the host at the later stages, and if the host dies, all of the spores will erupt from the host at the same time, while also producing a blob tile.",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 6,
		severity: 3,
		speed: -2,
		stealth: 1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold(
			"There is a chance to spawn a factory blob, instead of a normal blob.",
			new Stats({ resistance: 11 })
		),
		new Threshold(
			"Spawns a strong blob instead of a normal blob",
			new Stats({ resistance: 8 })
		),
		new Threshold(
			"Has a chance to spawn a blob node instead of a normal blob",
			new Stats({ resistance: 14 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 14) {
			severity += 1;
		}
		return severity;
	},
};
