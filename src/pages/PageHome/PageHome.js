import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./PageHome.scss";

function Home() {
	const [isHovering, setIsHovering] = useState(false);

	const audioSword = new Audio("./sound/sword.mp3");
	const audioSlash = new Audio("./sound/slash.mp3");

	const handleMouseOver = () => {
		const hoverSound = () => {
			audioSword.play();
		};
		if (!isHovering) {
			setIsHovering(true);
			hoverSound();
		}
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const clickSlash = () => {
		audioSlash.play();
	};

	return (
		<>
			<div className="cover-intro germania">
				<Link to={`/cyoa/intro`} className={`wrap ${isHovering ? "enterAnim" : "exitAnim"}`} onMouseOver={handleMouseOver} onMouseOut={() => setTimeout(handleMouseOut, 800)} onClick={clickSlash}>
					<h1 className="cover-intro__title">Deathswing</h1>
					<span className="shadow">Deathswing</span>
				</Link>
			</div>
			<div className="intro-notes">
				Written, developed and designed by&nbsp;
				<a href="https://www.twitch.tv/little2mad" target="_blank" rel="noreferrer">
					Little2mad
				</a>
			</div>
		</>
	);
}

export default Home;
