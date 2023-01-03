import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import importAudioSword from "./../../assets/sound/sword.mp3";
import importAudioSlash from "./../../assets/sound/slash.mp3";
import "./PageHome.scss";

function Home() {
	const [isHovering, setIsHovering] = useState(false);

	const audioSword = new Audio(importAudioSword);
	const audioSlash = new Audio(importAudioSlash);

	const hoverSound = () => {
		audioSword.play();
	};
	const clickSlash = () => {
		audioSlash.play();
	};

	const handleMouseOver = () => {
		if (!isHovering) {
			setIsHovering(true);
			hoverSound();
		}
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	// Allow to make a start interaction with the page and allow the sound to be played
	useEffect(() => {
		return () => {
			if (document.getElementById("startButton")) {
				document.getElementById("startButton").click();
			}
		};
	}, []);

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
			<button id="startButton" className="hide"></button>
		</>
	);
}

export default Home;
