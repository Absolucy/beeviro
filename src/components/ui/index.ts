import { forEach } from "lodash-es";

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exports: Record<string, any> = {};
const modules = import.meta.glob("./*.tsx");

for (const path in modules) {
	void modules[path]().then((module) => {
		// @ts-ignore
		forEach(module, (value, key) => {
			// @ts-ignore
			exports[key] = value;
		});
	});
}
export { Card } from "./card";
