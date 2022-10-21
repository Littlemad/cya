import React from "react";
import ReactDOM from "react-dom/client";
import DesignSystem from "./DesignSystem";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{
			<>
				<DesignSystem />
			</>
		}
	</React.StrictMode>
);
