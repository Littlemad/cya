import React from "react";
import {Routes, Route} from "react-router-dom";
import PageHome from "pages/PageHome/PageHome";
import PageIntro from "pages/PageIntro/PageIntro";
import PageAdventure from "pages/PageAdventure/PageAdventure";
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
			<div className="page">
				<header className="main-header spacing">
					<Toggle checked={props.checked} onChange={props.onChange} className="page__theme" />
				</header>
				<main className="main-content">
					<Routes>
						<Route path="/cyoa/" element={<PageHome />} />
						<Route path="/cyoa/1" element={<PageIntro />} />
						<Route path="/cyoa/2" element={<PageAdventure />} />
						{pageNumbers.map((number) => (
							<Route key={number} path={`/cyoa/page${number}`} element={<Page number={number} />} />
						))}
					</Routes>
				</main>
				{/*
				<header className="main-header spacing">
					<div>
						<h1 className="main-header__title h2">The sword that binds the soul</h1>
						<h2 className="h5 color-txt--grey-d1">written, developed and designed by Alessio Carone</h2>
					</div>
				</header>
	*/}
			</div>
		</>
	);
};

export default RoutesLayout;
