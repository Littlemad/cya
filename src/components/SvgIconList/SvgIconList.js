import React from "react";
import PropTypes from "prop-types";
import IconPath from "assets/svg/icons.svg";
import dataJSON from "data/data.json";
import "./SvgIconList.scss";

const iconsJSON = dataJSON.icons;

const SvgIconList = (props) => {
	const hasLayout = props.grid;
	const hasIconSize = props.size;

	return (
		<>
			<ul className={`svgiconlist ${hasLayout ? "svgiconlist--grid" : ""}`}>
				{iconsJSON.map((icons) => (
					<li className="svgiconlist_li" key={icons.name}>
						<h4 className="h4 svgiconlist_label">{icons.name}</h4>
						<svg className={`icon icon-${icons.name} ${hasIconSize ? `icon--size-${props.size}` : "icon--size-m"}`} role="img" aria-label={icons.desc} key={icons.name}>
							<use xlinkHref={`${IconPath}#${icons.name}`} />
						</svg>
					</li>
				))}
			</ul>
		</>
	);
};

SvgIconList.propTypes = {
	grid: PropTypes.bool,
	size: PropTypes.string,
};

export default SvgIconList;
