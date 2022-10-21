import React, {useEffect} from "react";
import Prism from "prismjs";

export default function Code({code, language}) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<pre>
				<code className={`language-${language}`}>{code}</code>
			</pre>
		</>
	);
}
