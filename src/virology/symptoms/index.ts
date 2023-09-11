/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Symptom } from "../symptom";
import { forEach } from "lodash-es";

const symptoms: Record<string, Symptom> = {};
const modules = import.meta.glob(["./*.ts", "!./index.ts"]);

for (const path in modules) {
	void modules[path]().then((symptom) => {
		// @ts-ignore
		forEach(symptom, (value, key) => {
			symptoms[key] = value as Symptom;
		});
	});
}

export default symptoms;
