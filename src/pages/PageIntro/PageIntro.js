import React from "react";
import {HashLink as Link} from "react-router-hash-link"; //Using Anchor
import "./PageIntro.scss";

function PageIntro() {
	return (
		<>
			<div className="center">
				<img width="410" height="600" className="img--border spacing" src="img/intro/leo-with-sword.jpg" alt="Leo holding a sword and ready to kill" />
				<h1 className="title h1 gradient1">My name is Leo, and I am a killer for hire.</h1>
				<p className="intro-content par--center">
					I lead a solitary life, I always trusted in the hardness of my steel cold sword and my wits.
					<br /> Everyone else was just a liability or a mistake waiting to be happening.
					<br /> I killed many men (poor and rich ones), ugly creatures and dreadful monsters.
					<br /> I usually killed for money, sometimes for the pleasure of the thrill, and occasionally I killed for survival when I was young and foolish to don't have a plan.
					<br /> Everytime that I killed it was just for a simple reason: <em>I could kill, and I was good at it</em>.
					<br /> They never expected me that day on my last job, to not be able to kill.
					<br />
					This is the story on how all did go terribly, terribly wrong just to save a single life.
				</p>
				<div className="separator"></div>
				<p className="par--center spacing">
					This is a choose your own adventure game. You will have many choices, each one will lead to various consequences.
					<br />
					You will have to survive against many perils to reach the end of your journey.
					<br />
					Maybe you will even able to redeem Leo damned soul. Choose wisely!
				</p>
				<div>
					<Link className="h3" to={`/cyoa/start`}>
						I am ready to go adventuring
					</Link>
					<br />
					<br />
					<Link to={`/cyoa/game-info#top`}>I would like to know more about the game</Link>
				</div>
			</div>
		</>
	);
}

export default PageIntro;
