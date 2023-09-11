/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { Stats, SymptomStats } from "./stats";
import { every, filter } from "lodash-es";

export class Threshold {
	description: string;
	req_stats: Stats;

	constructor(description: string, req_stats: Stats) {
		this.description = description;
		this.req_stats = req_stats;
	}

	/**
	 * Checks if the given virus stats meets this threshold.
	 * @param stats The stats of the virus.
	 * @returns Whether the virus meets the threshold or not.
	 */
	met(stats: Stats): boolean {
		return every(
			filter(stats, (value: number) => value > 0),
			(value: number, key: string) =>
				Object.prototype.hasOwnProperty.call(stats, key) &&
				stats[key as keyof Stats] >= value
		);
	}
}

export interface Symptom {
	name: string;
	description: string;
	base_stats: SymptomStats;
	thresholds?: Threshold[];
	set_severity?: (stats: Stats, symptom: Symptom) => number;
}
