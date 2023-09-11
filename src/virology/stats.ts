/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import { assign } from "lodash-es";

export class Stats {
	stealth!: number;
	resistance!: number;
	speed!: number;
	transmission!: number;
	severity!: number;

	constructor(initialValues: Partial<Stats> = {}) {
		assign(this, {
			stealth: 0,
			resistance: 0,
			speed: 0,
			transmission: 0,
			severity: 0,
			...initialValues,
		});
	}
}

export class SymptomStats extends Stats {
	level!: number;
	power!: number;

	constructor(initialValues: Partial<SymptomStats> = {}) {
		super(initialValues);
		assign(this, {
			level: 1,
			power: 1,
			...initialValues,
		});
	}
}
