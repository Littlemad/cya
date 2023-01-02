import React from "react";
import {Link} from "react-router-dom";
import "./PageGameInfo.scss";

function PageGameInfo() {
	return (
		<>
			<div id="top" className="pos-top" aria-hidden="true"></div>
			<div className="center">
				<h1 className="h2 spacing">I would like to know more about the game</h1>
				<div className="par--center">
					<p className="intro-content">Since I was little I was an avid reader, an habit took from my parents, and I was reading any kind of things, comics, books, graphic novels, old Urania (they were a collection of sci-fi books by italian book editors Mondadory) collection of my father that I inherited. I read lord of the ring one summer when I was just 15 years old.</p>
					<p>So my chaotic room it was always filled with books of all sorts, in a mess of organization that only I, would know where to find stuff. One day, while exchanging books with my friends (so we could read even more, and spend the few money that we have last longer).</p>

					<p className="spacing">I got the rumor of books which you could read and choose what to do, so the story would go in base your decisions. I was very thrilled about the idea, because we just started to discover D&amp;D and other role playing games, and a book in which you could play on your own, it was a blast of a concept.</p>

					<img width="593" height="648" className="img--border spacing" src="img/intro/librogame.jpg" alt="Little2mad smirking" />

					<p>Fast forward few years later and I had a big collection of those books, and my favourite it was always the first, Oberon the wizard by the famous Joe Dever of Lone Wolf series. And as you naturally start to love something, you start to want to emulate and write your own Choose Your Own Adventure book.</p>

					<p>Obviously I never written a book like that, but I did write hundreds of Role Playing adventures in all kind of type of world settings or style (cyberpunk, hack &amp; slash, investigative noir, epic fantasy...).</p>

					<p>Fast forward around 30 years later, and I find myself to be a web designer, with a lot of free time looking for a job, and wanting to study React as language and want to write an adventure using the digital media and my experience of it, to make something fun, maybe the start of something, or just an overindulgent experimentation.</p>

					<p className="spacing">So hear I am, writing a story, programming and designing and reviewing and changing over and over what I want to do. Hoping that some other appasionate of the genra would like and appreciate this little extravaganza.</p>

					<img width="546" height="406" className="img--border spacing" src="img/intro/little2mad.jpg" alt="Little2mad smirking" />
					<p>
						I hope that you guys never forget that just outside your door as just inside of your mind there is{" "}
						<a target="_blank" href="https://www.youtube.com/watch?v=qt1giffOHFg" rel="noreferrer">
							a road that goes ever on
						</a>
						.
					</p>
					<br />
				</div>
				<Link className="h3" to={`/cyoa/start`}>
					I am, NOW really really ready to go adventuring!!!
				</Link>
			</div>
		</>
	);
}

export default PageGameInfo;
