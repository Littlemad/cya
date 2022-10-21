import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";
import dataJSON from "data/data.json";

function Navigation(props) {
	//	const myClass = ({isActive}) => "main-nav__link" + (isActive ? " main-nav--active" : "");

	const myPlace = dataJSON.locations[props.room - 1];

	// myPlace.choices.length

	return (
		<>
			<p>Current location: {myPlace.name}</p>

			<img src={myPlace.image} alt="" />

			<nav className="main-nav box">
				<ul className="main-nav__ul">
					{myPlace.choices.map((choice) => (
						<li key={choice.id} className="main-nav__li">
							{choice.id} - <span className="highlight">{choice.name}</span> {choice.shortDesc}
						</li>
					))}
					{myPlace.locationConnection.map((place) => {
						const myNearbyPlace = dataJSON.locations[place - 1];

						return (
							<li key={`key${place}`} className="main-nav__li">
								{myPlace.choices.length + myNearbyPlace.id - 1} - {myNearbyPlace.shortDesc} <span className="highlight">{myNearbyPlace.name}</span>
							</li>
						);
					})}
					{/*
									<li className="main-nav__li">
						<NavLink className={myClass} to="/cyoa/">
							Choice 1 - asdasd
						</NavLink>
					</li>
					<li className="main-nav__li">
						<NavLink className={myClass} to="/cyoa/CharacterSelection">
							Choice 2 - asgfgfs
						</NavLink>
					</li>
				*/}
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
