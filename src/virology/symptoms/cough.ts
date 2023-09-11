/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const cough: Symptom = {
	name: "Cough",
	description: "The virus irritates the throat of the host, causing occasional coughing.",
	base_stats: new SymptomStats({
		level: 1,
		resistance: 3,
		speed: 1,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold("Host will drop small items when coughing.", new Stats({ resistance: 3 })),
		new Threshold(
			"Occasionally causes coughing fits that stun the host.",
			new Stats({ resistance: 10 })
		),
		new Threshold("Increases cough frequency.", new Stats({ speed: 6 })),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
		new Threshold(
			"The host's coughing will occasionally spread the virus.",
			new Stats({ transmission: 11 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.resistance >= 3) {
			severity += 1;
			if (stats.resistance >= 10) {
				severity += 1;
			}
		}
		return severity;
	},
};
