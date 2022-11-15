import React from "react";
import {Routes, Route} from "react-router-dom";
import PageHome from "pages/PageHome/PageHome";
import PageIntro from "pages/PageIntro/PageIntro";
import PageAdventure from "pages/PageAdventure/PageAdventure";
import PageGameInfo from "pages/PageGameInfo/PageGameInfo";
import dataJSON from "data/data.json";

import Navigation from "components/Navigation/Navigation";

import Toggle from "components/Toggle/Toggle";
import "./RoutesLayout.scss";

const myLocationsNum = dataJSON.locations.length;

const RoutesLayout = (props) => {
	function Page({number}) {
		return (
			<>
				<Navigation room={number} />
			</>
		);
	}

	const pageNumbers = Array.from({length: myLocationsNum}, (_, i) => i + 1);

	return (
		<>
			<header className="main-header">
				<Toggle checked={props.checked} onChange={props.onChange} />
			</header>
			<div className="page">
				<main className="main-content">
					<Routes>
						<Route path="/cyoa/" element={<PageHome />} />
						<Route path="/cyoa/intro" element={<PageIntro />} />
						<Route path="/cyoa/game-info" element={<PageGameInfo />} />
						<Route path="/cyoa/start" element={<PageAdventure />} />
						{pageNumbers.map((number) => (
							<Route key={number} path={`/cyoa/page${number}`} element={<Page number={number} />} />
						))}
					</Routes>
				</main>
			</div>
		</>
	);
};

export default RoutesLayout;
