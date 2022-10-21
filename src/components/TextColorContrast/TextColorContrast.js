import React from "react";
import dataJSON from "data/data.json";

const colorsJSON = dataJSON.colors;
const linksJSON = dataJSON.links;

const TextColorContrast = () => {
	const ColoredParagraphs = () => {
		const loopParagraphs = colorsJSON.map((colorsParagraph) => (
			<p key={colorsParagraph.var} className={`color-txt--${colorsParagraph.var}`}>
				<code>{colorsParagraph.var}</code>
			</p>
		));
		const linkColoredParagraphs = linksJSON.map((linkColoredParagraph) => (
			<p key={linkColoredParagraph.var} className={`color-txt--${linkColoredParagraph.var}`}>
				<code>{linkColoredParagraph.var}</code>
			</p>
		));
		return (
			<>
				{loopParagraphs}
				{linkColoredParagraphs}
			</>
		);
	};

	const ColoredBackgrounds = () => {
		const loopBackgrounds = colorsJSON.map((colorsBg) => (
			<div key={colorsBg.var} className="cols__col color-txt--grey-d2">
				<h3 className="h5 box-text-colors__title">
					Background &nbsp;<code>{colorsBg.var}</code>
				</h3>
				<div className={`color-bg--${colorsBg.var} padding-m`}>
					<ColoredParagraphs />
				</div>
			</div>
		));

		return <>{loopBackgrounds}</>;
	};

	return (
		<div className="cols">
			<ColoredBackgrounds />
		</div>
	);
};

export default TextColorContrast;
