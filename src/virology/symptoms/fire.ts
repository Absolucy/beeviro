/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const fire: Symptom = {
	name: "Spontaneous Combustion",
	description:
		"The virus turns fat into an extremely flammable compound, and raises the body's temperature, making the host burst into flames spontaneously.",
	base_stats: new SymptomStats({
		level: 7,
		resistance: -1,
		severity: 4,
		speed: -2,
		stealth: 1,
		transmission: -1,
	}),
	thresholds: [
		new Threshold("Increases the intensity of the flames.", new Stats({ speed: 4 })),
		new Threshold("Further increases flame intensity.", new Stats({ speed: 8 })),
		new Threshold(
			"Host will spread the virus through skin flakes when bursting into flame.",
			new Stats({ transmission: 8 })
		),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 4 })),
	],
};
