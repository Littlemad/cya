import React from "react";
import {Link} from "react-router-dom";
import "./PageIntro.scss";

function PageIntro() {
	return (
		<>
			<div className="center">
				<img width="410" height="600" className="img--border spacing" src="img/leo-with-sword.jpg" alt="Leo holding a sword and ready to kill" />
				<h1 className="title h1 gradient1">My name is Leo, and I am a stone cold killer.</h1>
				<p className="intro-content par--center">
					I was never alone when I murdered my enemies, I always had my trusty sword with me.
					<br /> I killed many men, creatures and monsters during my long life. I usually killed for money, I killed sometimes for pleasure of the thrill, and occasionally I killed for survival.
					<br />
					Everytime that I killed it was just for a simple reason <em>I could kill, and I did it exceptionally well</em>.
					<br /> They never expected me that day to not be able to kill anymore.
					<br />
					This is the story on how all did go terribly, terribly wrong just to save a life.
				</p>
				<div className="separator"></div>
				<p className="par--center spacing">
					This is a choose your own adventure game.
					<br />
					You will have many choices, each one will lead to various consequences.
					<br />
					You will have to survive against many perils to reach the end of your journey.
					<br />
					Maybe you will even able to redeem Leo damned soul.
				</p>
				<Link className="h3" to={`/cyoa/start`}>
					I am ready to go adventuring!!!
				</Link>
				<br />
				<br />
				<Link className="" to={`/cyoa/game-info`}>
					I would like to know more about the game.
				</Link>
			</div>
		</>
	);
}

export default PageIntro;
