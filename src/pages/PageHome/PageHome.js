import React from "react";
import "./PageHome.scss";

function Home() {
	return (
		<>
			<div className="box-presentation">
				<div className="box-presentation__txt">
					<p>A design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.</p>
				</div>

				<div className="box">
					<h2 className="h3 box__title">References</h2>
					<ul className="list">
						<li className="list__li">
							<a href="https://www.bbc.co.uk/gel">BBC GEL (Global Experience Language)</a>
						</li>
						<li className="list__li">
							<a href="https://styleguide.mailchimp.com/voice-and-tone/">Mailchimp Voice &amp; Tone</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Home;
