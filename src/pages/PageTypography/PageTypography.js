import React, {useState} from "react";
import dataJSON from "data/data.json";
import Select from "components/Select/Select";
import "./PageTypography.scss";

function Typography() {
	const options = dataJSON.typography;
	const [FontStyle, setFontStyle] = useState(options[0].value);

	return (
		<>
			<div className="box-typography">
				<h2 className="h2 bold title--margin">Style display</h2>
				<p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters. Typefaces that are selected for their style, legibility, and readability, here some example of styling.</p>

				<div className="box-typography__select-font">
					Select the font type that you want to visualize:
					<Select options={options} value={FontStyle} onChange={setFontStyle} />
				</div>
				<div className={`box box-headings ${FontStyle}`}>
					<h3 className="h2 bold box__title">Headings</h3>

					<div className="box-headings__titles">
						<div className="grid">
							<div className="col col1">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
							<div className="col col2 bold">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
							<div className="col col3 italic">
								<h1 className="h1">h1 - Typography</h1>
								<h2 className="h2">h2 - Typography</h2>
								<h3 className="h3">h3 - Typography</h3>
								<h4 className="h4">h4 - Typography</h4>
								<h5 className="h5">h5 - Typography</h5>
								<h6 className="h6">h6 - Typography</h6>
							</div>
						</div>
					</div>
				</div>
				<div className={`box box-font-characters ${FontStyle}`}>
					<h3 className="h2 bold box__title">Font sizes &amp; styles</h3>
					<div className="cols">
						<div className="col col1">
							<h3 className="h4 box__title">Size M - 16px/1rem - Line height 20px</h3>
							<p className="regular type-content"></p>
							<p className="bold type-content"></p>
							<p className="italic type-content"></p>
						</div>
						<div className="col col2">
							<h3 className="h4 box__title">Size L - 24px/1.5rem - Line height 28px</h3>
							<p className="regular type-content"></p>
							<p className="bold type-content"></p>
							<p className="italic type-content"></p>
						</div>
						<div className="col col3">
							<h3 className="h4 box__title">Size XL - 32px/2rem - Line height 36px</h3>
							<p className="regular type-content"></p>
							<p className="bold type-content"></p>
							<p className="italic type-content"></p>
						</div>
					</div>
				</div>
				<div className={`box box-pragraphs ${FontStyle}`}>
					<h3 className="h2 bold box__title">Line height reading</h3>
					<div className="cols">
						<div className="col col1">
							<h3 className="h4 box__title">Size 16px - Line height 20px</h3>
							<p className="lorem-ipsum"></p>
						</div>
						<div className="col col2">
							<h3 className="h4 box__title">Size 24px - Line height 28px</h3>
							<p className="lorem-ipsum"></p>
						</div>
						<div className="col col3">
							<h3 className="h4 box__title">Size 32px - Line height 36px</h3>
							<p className="lorem-ipsum"></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Typography;
