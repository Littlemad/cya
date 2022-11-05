import React from "react";
import {Link} from "react-router-dom";
import "./PageIntro.scss";

function PageIntro() {
	return (
		<>
			<div>
				<p className="intro-content">
					Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent.
					<br />
					Ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret.
					<br />
					Nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari. Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent.
					<br />
					Ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret.
					<br />
					Nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari. Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent.
					<br />
					Ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret.
					<br />
					Nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari. Non eram nescius, Brute, cum, quae summis ingeniis exquisitaque doctrina philosophi Graeco sermone tractavissent.
					<br />
					Ea Latinis litteris mandaremus, fore ut hic noster labor in varias reprehensiones incurreret.
					<br />
					Nam quibusdam, et iis quidem non admodum indoctis, totum hoc displicet philosophari.
					<br />
				</p>
			</div>
			<Link to={`/cyoa/2`}>Go to adventure!!!</Link>
		</>
	);
}

export default PageIntro;
