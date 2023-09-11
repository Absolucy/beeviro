/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const parasite: Symptom = {
	name: "Xenobiological Symbiosis",
	description:
		"The virus contains latent DNA blueprints to create a toxin-devouring grub egg, which parasitizes slimes and slime people. Its normally toxic, infectious flesh becomes safe and delicious when cooked.",
	base_stats: new SymptomStats({
		level: 8,
		resistance: 2,
		severity: 1,
		speed: 2,
		stealth: 1,
		transmission: -1,
	}),
	thresholds: [
		new Threshold(
			"The gestating larvae can consume toxins in the host's bloodstream.",
			new Stats({ stealth: 2 })
		),
		new Threshold(
			"More larvae are born, and they leave the host faster.",
			new Stats({ speed: 6 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.speed >= 6) {
			severity = severity * 2;
		}
		return severity;
	},
};
