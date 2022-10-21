import React from "react";
import {Routes, Route} from "react-router-dom";
import PageHome from "pages/PageHome/PageHome";
import PageCharacterSelection from "pages/CharacterSelection/CharacterSelection";

import Page1 from "pages/Locations/Page1";
import Page2 from "pages/Locations/Page2";
import Page3 from "pages/Locations/Page3";
import Page4 from "pages/Locations/Page4";

import Toggle from "components/Toggle/Toggle";
import "./RoutesLayout.scss";

const RoutesLayout = (props) => {
	return (
		<>
			<div className="page">
				<header className="main-header spacing">
					<div>
						<h1 className="main-header__title h2">The sword that binds the soul</h1>
						<h2 className="h5 color-txt--grey-d1">written and developed by Alessio Carone</h2>
					</div>
					<Toggle checked={props.checked} onChange={props.onChange} className="page__theme" />
				</header>
				<main className="main-content">
					<Routes>
						<Route path="/cyoa/" element={<PageHome />} />
						<Route path="/cyoa/CharacterSelection" element={<PageCharacterSelection />} />

						<Route path="/cyoa/page1" element={<Page1 />} />
						<Route path="/cyoa/page2" element={<Page2 />} />
						<Route path="/cyoa/page3" element={<Page3 />} />
						<Route path="/cyoa/page4" element={<Page4 />} />
					</Routes>
				</main>
			</div>
		</>
	);
};

export default RoutesLayout;
