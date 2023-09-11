// @ts-nocheck
// @eslint-ignore
import { forEach } from "lodash-es";

const exports: Record<string, any> = {};
const modules = import.meta.glob("./*.tsx");

for (const path in modules) {
	void modules[path]().then((module) => {
		forEach(module, (value, key) => {
			exports[key] = value;
		});
	});
}
export { Card } from "./card";
