import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./PageHome.scss";

function Home() {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<>
			<div className="cover-intro germania">
				<Link to={`/cyoa/1`} className={`wrap ${isHovering ? "enterAnim" : "exitAnim"}`} onMouseOver={handleMouseOver} onMouseOut={() => setTimeout(handleMouseOut, 1100)}>
					<h1 className="cover-intro__title">Deathswing</h1>
					<span className="shadow">Deathswing</span>
				</Link>
			</div>
		</>
	);
}

export default Home;
