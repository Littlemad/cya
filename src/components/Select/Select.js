import React from "react";

const Select = (props) => {
	const handleChange = (e) => {
		props.onChange(e.target.value);
	};

	return (
		<>
			<select value={props.value} onChange={handleChange}>
				{props.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</>
	);
};

export default Select;
