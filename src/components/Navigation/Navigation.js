import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	const myClass = ({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "");

	return (
		<nav className="main-nav">
			<ul className="main-nav__ul">
				<li className="main-nav__li">
					<NavLink className={myClass} to="/design-system/">
						Home
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/design-system/colors">
						Colors
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/design-system/grid-system">
						Grid System
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/design-system/icons">
						Icons
					</NavLink>
				</li>
				<li className="main-nav__li">
					<NavLink className={myClass} to="/design-system/typography">
						Typography
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
