/**
 * SPDX-License-Identifier: MIT OR Apache-2.0
 * Copyright © 2023 Lucy <lucy@absolucy.moe> (https://absolucy.moe)
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "virtual:@downwind/base.css";
import "virtual:@downwind/utils.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("app")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
