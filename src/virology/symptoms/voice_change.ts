/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom, Threshold } from "../symptom";
import { SymptomStats, Stats } from "../stats";

export const voice_change: Symptom = {
	name: "Voice Change",
	description:
		"The virus alters the pitch and tone of the host's vocal cords, changing how their voice sounds.",
	base_stats: new SymptomStats({
		level: 3,
		resistance: -2,
		severity: 2,
		speed: -2,
		stealth: -1,
		transmission: 2,
	}),
	thresholds: [
		new Threshold(
			"The host's language center of the brain is damaged, leading to complete inability to speak or understand any language.",
			new Stats({ transmission: 10 })
		),
		new Threshold("Changes voice more often.", new Stats({ speed: 7 })),
		new Threshold("The symptom remains hidden until active.", new Stats({ stealth: 3 })),
	],
};
