import React from "react";
import {Routes, Route} from "react-router-dom";

import PageHome from "pages/PageHome/PageHome";
import PageCharacterSelection from "pages/CharacterSelection/CharacterSelection";

import Toggle from "components/Toggle/Toggle";
import "./RoutesLayout.scss";

function RoutesLayout(props) {
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
					</Routes>
				</main>
			</div>
		</>
	);
}

export default RoutesLayout;
