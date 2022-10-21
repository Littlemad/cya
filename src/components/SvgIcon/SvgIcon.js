import React from "react";
import PropTypes from "prop-types";
import dataJSON from "data/data.json";
import IconPath from "assets/svg/icons.svg";

const iconsJSON = dataJSON.icons;

const SvgIcon = (props) => {
	const myIcon = iconsJSON.find((e) => e.name === props.name);
	const hasLabel = props.label;

	return (
		<>
			<svg className={`icon icon-${myIcon.name} icon--size-${props.size}`} role="img" {...(hasLabel ? {"aria-label": hasLabel} : {"aria-label": myIcon.desc})} key={myIcon.name}>
				<use xlinkHref={`${IconPath}#${myIcon.name}`} />
			</svg>
		</>
	);
};

SvgIcon.propTypes = {
	name: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	label: PropTypes.string,
};

export default SvgIcon;
