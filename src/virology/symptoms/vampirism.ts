/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const vampirism: Symptom = {
	name: "Hemetophagy",
	description:
		"The host absorbs blood from external sources, and seemlessly reintegrates it into their own bloodstream, regardless of its bloodtype or how it was ingested. However, the virus also slowly consumes the host's blood",
	base_stats: new SymptomStats({
		level: 9,
		resistance: -2,
		speed: 1,
		stealth: 1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"The virus recycles excess absorbed blood into restorative biomass, healing brute damage.",
			new Stats({ transmission: 4 })
		),
		new Threshold(
			"The virus grows more aggressive, assimilating blood and healing at a faster rate, but also draining the host's blood quicker",
			new Stats({ speed: 7 })
		),
		new Threshold(
			"The virus aggressively assimilates blood, resulting in contiguous blood pools being absorbed by the virus, as well as sucking blood out of open wounds of subjects in physical contact with the host.",
			new Stats({ transmission: 6 })
		),
	],
	set_severity: (stats: Stats, symptom: Symptom) => {
		let { severity } = symptom.base_stats;
		if (stats.transmission >= 4) {
			severity -= 1;
		}
		return severity;
	},
};
