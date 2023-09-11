/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const toxoplasmosis: Symptom = {
	name: "Toxoplasmosis Sapiens",
	description:
		"A parasitic symptom that causes a humanoid host to feel slightly happier around cats and cat people.",
	base_stats: new SymptomStats({
		level: -1,
		resistance: -2,
		severity: -1,
		speed: -3,
		stealth: 1,
		transmission: 1,
	}),
	thresholds: [
		new Threshold(
			"The symptom mutates the language center of the host's brain, causing them to speak in an infuriating dialect. Known to drive hosts to suicide.",
			new Stats({ transmission: 4 })
		),
		new Threshold(
			"Hosts are overcome with a dysmorphic mania, causing them to glorify the idea of becoming more catlike. May cause irrational behaviour, and, in extreme cases, major body restructuring.",
			new Stats({ stealth: 4 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 4) {
			severity += 3;
		}
		if (stats.transmission >= 4) {
			severity += 2;
		}
		return severity;
	},
};
