import React from "react";
import {Routes, Route} from "react-router-dom";
import Navigation from "components/Navigation/Navigation";

import PageHome from "pages/PageHome/PageHome";
import PageIcons from "pages/PageIcons/PageIcons";
import PageTypography from "pages/PageTypography/PageTypography";
import PageColors from "pages/PageColors/PageColors";
import PageGridSystem from "pages/PageGridSystem/PageGridSystem";

import Toggle from "components/Toggle/Toggle";
import "./RoutesLayout.scss";

function RoutesLayout(props) {
	return (
		<>
			<div className="page">
				<header className="main-header">
					<h1 className="main-header__title h1">Design System</h1>
					<Toggle checked={props.checked} onChange={props.onChange} className="page__theme" />
				</header>
				<Navigation />
				<main className="main-content">
					<Routes>
						<Route path="/design-system/" element={<PageHome />} />
						<Route path="/design-system/icons" element={<PageIcons />} />
						<Route path="/design-system/typography" element={<PageTypography />} />
						<Route path="/design-system/colors" element={<PageColors />} />
						<Route path="/design-system/grid-system" element={<PageGridSystem />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default RoutesLayout;
