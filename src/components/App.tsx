/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
//import { useState } from "react";
import "../css/App.css";
import { Card } from "./ui";

export default function App() {
	return (
		<div className="h-screen w-screen bg-purple-900 p-5 text-neutral-100">
			<Card className="h-2/3 w-2/3 bg-stone-700">
				<div className="p-auto container m-auto">hihi</div>
			</Card>
		</div>
	);
}
