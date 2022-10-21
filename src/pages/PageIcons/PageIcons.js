import React from "react";
import Highlighter from "../../components/Highlighter/Highlighter";
import * as Code from "./PageIcons.highlight";
import SvgIcon from "../../components/SvgIcon/SvgIcon";
import SvgIconList from "../../components/SvgIconList/SvgIconList";

const PageIcons = () => {
	return (
		<>
			<div className="box-icons">
				<h2 className="h2 bold title--margin">Using SVG sprites</h2>
				<p>Image sprites have been a good-practice technique for many years. If you require a number of regularly used graphics, you place them in a single image rather than individual files.</p>
				<p>
					The most common technique is to define individual images within an SVG <code>&lt;symbol&gt;</code>.
				</p>

				<div className="box box-single-icon">
					<h3 className="h2 bold box__title">Implementing SVG sprite in your react project</h3>
					<p>Create a JSON with your icon list of names matching the symbol id name</p>
					<Highlighter code={Code.SingleIcon1} language="js" />
					<br />
					Male an SVG Sprite similar to this example filled with SVG Symbol all of the same viewbox size to keep size consistency. (You can build one using
					<a href="https://icomoon.io/" target="_blank" rel="noreferrer">
						Iconmoon
					</a>
					service).
					<Highlighter code={Code.SingleIcon2} language="markup" />
					<br />
					Create a Component
					<Highlighter code={Code.SingleIcon3} language="js" />
					<br />
					Insert a Component in your code (it will detect automatically the label from your JSON)
					<Highlighter code={Code.SingleIcon4} language="js" />
					<SvgIcon name="home" size="l" />
					<br />
					<br />
					Insert a Component and add your custom label
					<Highlighter code={Code.SingleIcon5} language="js" />
					<SvgIcon name="home" size="l" label="test" />
				</div>

				<div className="box-icon-list">
					<h2 className="h2 bold title--margin">Visualization &amp; Customization</h2>
					<p>How to access and use SVG sprites in your project</p>

					<div className="box box-icon-list">
						<h3 className="h2 bold box__title">Icons list</h3>
						<p className="spacing">Use the name of the icon as lowercase text for naming your svg icon</p>

						<SvgIconList grid size="l" />
						<br />
						<br />
						<h3 className="h2 bold box__title">Code for showing all Icons</h3>
						<p>It is possible to add the grid style to help organise the icons, or adding a size value</p>
						<Highlighter code={Code.SVGList1} language="markup" />

						<p>It is possible as well to avoid any kind of definition, and you can style yourself how the list might want to appear.</p>
						<Highlighter code={Code.SVGList2} language="markup" />
					</div>

					<div className="box box-icon-size">
						<h3 className="h2 bold box__title">Icons size</h3>

						<p>We use 4 type of sizes:</p>
						<ul className="list spacing">
							<li className="list__li">Small - 24px</li>
							<li className="list__li">Medium - 32px</li>
							<li className="list__li">Large - 48px</li>
							<li className="list__li">Extra large - 64px</li>
						</ul>

						<Highlighter code={Code.IconsSize1} language="js" />
						<SvgIcon name="home" size="s" />
						<br />
						<br />

						<Highlighter code={Code.IconsSize2} language="js" />
						<SvgIcon name="home" size="m" />
						<br />
						<br />

						<Highlighter code={Code.IconsSize3} language="js" />
						<SvgIcon name="home" size="l" />
						<br />
						<br />

						<Highlighter code={Code.IconsSize4} language="js" />
						<SvgIcon name="home" size="xl" />
					</div>
				</div>
			</div>
		</>
	);
};

export default PageIcons;
