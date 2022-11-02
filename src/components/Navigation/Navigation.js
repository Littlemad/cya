import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";
import "./Navigation.scss";
import dataJSON from "data/data.json";

function Navigation(props) {
	const myPlace = dataJSON.locations[props.room - 1];
	const hasChoice = (myPlace.choices && myPlace.choices.length) || 0;

	const myItem = dataJSON.items;

	const initialArray = [];
	const initialCoin = 20;

	const [equipmentState, setEquipmentState] = useState(initialArray);
	const [coinState, setCoinState] = useState(initialCoin);

	const checkNamesEquipment = () => {
		return equipmentState.map((value) => myItem[value - 1].name).join(", ");
	};

	const checkEquipment = () => {
		let myEquip = "The backpack is empty from the start";

		if (equipmentState.length === 0) {
			myEquip = "An empty backpack";
		} else {
			myEquip = checkNamesEquipment();
		}

		return myEquip;
	};

	const manageEquipment = (itemID) => {
		const myItemID = itemID - 1;

		if (myItem[myItemID].buy) {
			setCoinState(coinState - myItem[myItemID].buy);
		}

		if (myItem[myItemID].sell) {
			setCoinState(coinState + myItem[myItemID].sell);
		}

		if (myItem[myItemID].own) {
			// Add
			setEquipmentState([...equipmentState, itemID]);
		} else {
			// Remove
			setEquipmentState((current) =>
				current.filter((item) => {
					return item !== myItemID;
				})
			);
		}
	};

	const handleClick = (e, action) => {
		e.preventDefault();
		manageEquipment(myItem[action].id);
	};

	return (
		<>
			<div className="main-ui grid grid--gap-l spacing">
				<div className="main-content grid__col col1">
					<h3 className="title h4">{myPlace.name}</h3>
					{myPlace.image && <img className="main-content__img" src={myPlace.image} alt={myPlace.imageAlt} />}
					<p>{myPlace.longDesc}</p>
				</div>
				<div className="side-content grid__col col2">
					<div className="inventory grid--pad-m">
						<h3 className="title h4">Inventory</h3>
						<ul className="list">
							<li>{coinState > 0 ? `A pouch with ${coinState} gold pieces` : `An empty pouch`}</li>
							<li>{checkEquipment()}</li>
						</ul>
					</div>
				</div>
			</div>
			<nav className="main-nav box">
				<ul className="main-nav__ul">
					{myPlace.choices &&
						myPlace.choices.map((choice) => (
							<li key={choice.id} className="main-nav__li">
								<Link to="#" className="main-nav__ul__link" onClick={(e) => handleClick(e, choice.item - 1)}>
									{choice.id} - {choice.shortDesc} {choice.name} {choice.shortDescAfter}
								</Link>
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
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
