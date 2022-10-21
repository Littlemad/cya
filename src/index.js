import React from "react";
import ReactDOM from "react-dom/client";
import ChooseYourOwnAdventure from "./ChooseYourOwnAdventure";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{
			<>
				<ChooseYourOwnAdventure />
			</>
		}
	</React.StrictMode>
);
