import React from "react";
import Highlighter from "../../components/Highlighter/Highlighter";
import * as Code from "./PageGridSystem.highlight";
import "./PageGridSystem.scss";

function GridSystem() {
	// it helps me to build column structure quite quickly for examples, no need to externalise the component
	const ColumnGenerator = (props) => {
		const basciGridStructure = (
			<div className={props.classname} dir={props.rtl && "rtl"}>
				{[...Array(props.col)].map((_, i) => (
					<div key={i} className={`grid__col grid__col${i + 1}`}>
						Col{i + 1}
					</div>
				))}
			</div>
		);

		return basciGridStructure;
	};

	return (
		<>
			<div className="box-grid-system">
				<h2 className="h2 bold title--margin">Flexible Grid system</h2>
				<p>One of the most important part of a webpage it is to have a decent grid system that is useful, easy to customize and able to build an application that is responsive while keeping the grid.</p>
				<p>The grid system is based on 12 grids, so that it easy divisible by 2, 3, 4 and 6 in the case that you want to have a very detailed grid system to adapt to whatever grid you need.</p>
				<p>You can get the file "grid-system.scss" and use it in your project as drag and drop.</p>
				<p>All these example will reset to 2 columns system less than 768px and one column system for less than 576px</p>

				<h2 className="bold">Sizes modifiers for gaps and paddings for the grid tag</h2>

				<table className="table table--crossreference spacing" cellPadding="10" cellSpacing="0">
					<thead>
						<tr>
							<th></th>
							<th>-xs</th>
							<th>-s</th>
							<th>-m</th>
							<th>-l</th>
							<th>-xl</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Size dimension</td>
							<td>.25rem</td>
							<td>.5rem</td>
							<td>1rem</td>
							<td>1.5rem</td>
							<td>2rem</td>
						</tr>
						<tr>
							<td>
								Padding wrapping around columns
								<br />
								(.grid--pad)
							</td>
							<td>.grid--pad-xs</td>
							<td>.grid--pad-s</td>
							<td>.grid--pad-m</td>
							<td>.grid--pad-l</td>
							<td>.grid--pad-xl</td>
						</tr>

						<tr>
							<td>
								Padding inside each column
								<br />
								(.grid--col-pad)
							</td>
							<td>.grid--col-pad-xs</td>
							<td>.grid--col-pad-s</td>
							<td>.grid--col-pad-m</td>
							<td>.grid--col-pad-l</td>
							<td>.grid--col-pad-xl</td>
						</tr>
						<tr>
							<td>
								Gap between grid elements
								<br />
								(.grid--gap)
							</td>
							<td>.grid--gap-xs</td>
							<td>.grid--gap-s</td>
							<td>.grid--gap-m</td>
							<td>.grid--gap-l</td>
							<td>.grid--gap-xl</td>
						</tr>
					</tbody>
				</table>

				<p>Here some structure and example of grids to help you understand how to use this system</p>

				<div className="box">
					<h3 className="h2 bold box__title">Grid Symmetric Positioning</h3>
					<ColumnGenerator col={28} classname="spacing exp1 grid grid--gap-m grid--col-pad-s" />

					<p>HTML Code</p>
					<Highlighter code={Code.GridHtml1} language="markup" />

					<p>SASS Code</p>
					<Highlighter code={Code.GridCSS1} language="css" />
				</div>

				<div className="box">
					<h3 className="h2 bold box__title">Grid Asymmetric Positioning</h3>

					<ColumnGenerator col={18} classname="spacing exp2 grid grid--gap-m grid--col-pad-s" />

					<p>HTML Code</p>
					<Highlighter code={Code.GridHtml2} language="markup" />

					<p>SASS Code</p>
					<Highlighter code={Code.GridCSS2} language="css" />

					<p>
						To make a grid RTL, no extra special code is needed, RTL happen naturally if you insert the property <code>dir="rtl"</code>. Here the example using the same code as previous Asymmetric grid.
					</p>

					<ColumnGenerator col={18} classname="spacing exp2 grid grid--gap-m grid--col-pad-s" rtl={true} />
				</div>
				<div className="box">
					<h3 className="h2 bold box__title">Grid example of vertical positioning</h3>
					<p>Simple vertical columns</p>
					<ColumnGenerator col={18} classname="spacing exp3 grid grid--gap-m grid--col-pad-s" />

					<p>Simple vertical columns: SASS Code</p>
					<Highlighter code={Code.GridCSS3} language="css" />

					<p>Asymmetric vertical columns</p>
					<ColumnGenerator col={6} classname="spacing exp4 grid grid--gap-m grid--col-pad-s" />
					<p>Asymmetric vertical columns: SASS Code</p>
					<Highlighter code={Code.GridCSS4} language="css" />

					<p>Combining row and column positioning</p>
					<ColumnGenerator col={28} classname="spacing exp5 grid grid--gap-m grid--col-pad-s" />
					<p>Combining row and column positioning: SASS Code</p>
					<Highlighter code={Code.GridCSS5} language="css" />
				</div>
			</div>
		</>
	);
}

export default GridSystem;
