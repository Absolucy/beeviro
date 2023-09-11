/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const necroseed: Symptom = {
	name: "Necropolis Seed",
	description:
		"An infantile form of the root of Lavaland's tendrils. Forms a symbiotic bond with the host, making them stronger and hardier, at the cost of speed. Should the disease be cured, the host will be severely weakened",
	base_stats: new SymptomStats({
		level: 9,
		resistance: 3,
		severity: -1,
		speed: -10,
		transmission: -3,
	}),
	thresholds: [
		new Threshold(
			"Upon death, the host's soul will solidify into an unholy artifact, rendering them utterly unrevivable in the process.",
			new Stats({ stealth: 8 })
		),
		new Threshold(
			"The area near the host roils with paralyzing tendrils.",
			new Stats({ resistance: 15 })
		),
		new Threshold("Host becomes immune to heat, ash, and lava", new Stats({ resistance: 20 })),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.stealth >= 8) {
			severity += 2;
		}
		if (stats.resistance >= 20) {
			severity -= 1;
		}
		return severity;
	},
};
