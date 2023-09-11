/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const flesh_death: Symptom = {
	name: "Autophagocytosis Necrosis",
	description:
		"The virus rapidly consumes infected cells, leading to heavy and widespread damage. Contains dormant prions- expert virologists believe it to be the precursor to Romerol, though the mechanism through which they are activated is largely unknown",
	base_stats: new SymptomStats({
		level: 9,
		resistance: -2,
		severity: 5,
		speed: 1,
		stealth: -2,
		transmission: -2,
	}),
	thresholds: [
		new Threshold(
			"Synthesizes Heparin and Lipolicide inside the host, causing increased bleeding and hunger.",
			new Stats({ speed: 7 })
		),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 5 })),
	],
};
