import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";
import dataJSON from "data/data.json";

function Navigation(props) {
	const myPlace = dataJSON.locations[props.room - 1];
	const hasChoice = (myPlace.choices && myPlace.choices.length) || 0;
	return (
		<>
			<h3 className="main-content__title h4">Current location: {myPlace.name}</h3>
			{myPlace.image && <img className="main-content__img" src={myPlace.image} alt={myPlace.imageAlt} />}
			<p>{myPlace.longDesc}</p>
			<nav className="main-nav box">
				<ul className="main-nav__ul">
					{myPlace.choices &&
						myPlace.choices.map((choice) => (
							<li key={choice.id} className="main-nav__li">
								{choice.id} - <span className="highlight">{choice.name}</span> {choice.shortDesc}
							</li>
						))}

					{myPlace.locationConnection &&
						myPlace.locationConnection.map((place) => {
							const myNearbyPlace = dataJSON.locations[place - 1];
							const myPos = myPlace.locationConnection.indexOf(place) + 1;

							return (
								<li key={`key${place}`} className="main-nav__li">
									<NavLink to={`/cyoa/page${place}`}>
										{hasChoice + myPos} - {myNearbyPlace.shortDesc} <span className="highlight">{myNearbyPlace.name}</span>
									</NavLink>
								</li>
							);
						})}
					{/*
									<li className="main-nav__li">
						<NavLink to="/cyoa/">
							Choice 1 - asdasd
						</NavLink>
					</li>
					<li className="main-nav__li">
						<NavLink to="/cyoa/CharacterSelection">
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
