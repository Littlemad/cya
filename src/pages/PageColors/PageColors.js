import React from "react";
import ColorBox from "components/Colorbox/ColorBox";
import TextColorContrast from "components/TextColorContrast/TextColorContrast";
import Highlighter from "components/Highlighter/Highlighter";
import * as Code from "./PageColors.highlight";
import "./PageColors.scss";

const Colors = () => {
	return (
		<>
			<div className="box-palette">
				<div className="box-palette__primary">
					<h2 className="h2 bold title--margin">Design Palette</h2>
					<p className="spacing--top">The colors listed in this area are all loaded directly from the data.json, and injected directly inside the react project as custom-variables</p>
					<p>We use these set of colors:</p>
					<ul className="list spacing">
						<li className="list__li">
							<strong>Basic</strong> - Which consist in white, black and palette of greys.
						</li>
						<li className="list__li">
							<strong>Primary</strong> - Your dominant colors through your design
						</li>
						<li className="list__li">
							<strong>Secondary</strong> - Your less dominant but still very relevant colors
						</li>
						<li className="list__li">
							<strong>Accent</strong> - Colors used for indicating system related alerts and warnings, like fail red, success green and yellow warnings
						</li>
						<li className="list__li">
							<strong>Links</strong> - Colors used for indicating the various status of a Link. Unset (standard Link value), when is being already visited (visited) and when is being pressed (active).
						</li>
					</ul>
					<div className="box">
						<h2 className="h2 bold box__title">Basic</h2>
						<div className="box-palette__grid">
							<ColorBox var="black" />
							<ColorBox var="grey-d3" />
							<ColorBox var="grey-d2" />
							<ColorBox var="grey-d1" />
							<ColorBox var="grey" />
							<ColorBox var="grey-l1" />
							<ColorBox var="grey-l2" />
							<ColorBox var="grey-l3" />
							<ColorBox var="white" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Primary</h2>
						<div className="box-palette__grid">
							<ColorBox var="primary-d2" />
							<ColorBox var="primary-d1" />
							<ColorBox var="primary" />
							<ColorBox var="primary-l1" />
							<ColorBox var="primary-l2" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Secondary</h2>
						<div className="box-palette__grid">
							<ColorBox var="secondary-d2" />
							<ColorBox var="secondary-d1" />
							<ColorBox var="secondary" />
							<ColorBox var="secondary-l1" />
							<ColorBox var="secondary-l2" />
						</div>
					</div>

					<div className="box">
						<h2 className="h2 bold box__title">Accent</h2>
						<div className="box-palette__grid">
							<ColorBox var="success" />
							<ColorBox var="warn" />
							<ColorBox var="fail" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Links</h2>
						<div className="box-palette__grid">
							<ColorBox var="link" />
							<ColorBox var="link-visited" />
							<ColorBox var="link-active" />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Text Colors &amp; Contrast</h2>
						<div className="box-text-colors">
							<TextColorContrast />
						</div>
					</div>
					<div className="box">
						<h2 className="h2 bold box__title">Using pre-generated class names</h2>
						<p>When you want to assign a color to a text you can use these classes, depending on your primary colors defined in the JSON data file of your project</p>
						<Highlighter code={Code.TextColor1} language="markup" />
						<span className="color-txt--primary">Primary colored text</span>
						<br />
						<br />
						<p>If you need instead to assign a background, you can use this kind of classname</p>
						<Highlighter code={Code.BackgroundColor1} language="markup" />
						<span className="color-bg--grey-d1">Background grey color</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Colors;
