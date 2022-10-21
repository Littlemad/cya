import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import InjectRootCSS from "./components/InjectRootCSS/InjectRootCSS";
import RoutesLayout from "./components/RoutesLayout/RoutesLayout";
import dataJSON from "./data/data.json";
import "./styles/main.scss";

const DesignSystem = () => {
	const defaultDark = window.matchMedia("(prefers-color-scheme: light)").matches;

	// Hook
	function useLocalStorage(key, initialValue) {
		// State to store our value
		// Pass initial state function to useState so logic is only executed once
		const [storedValue, setStoredValue] = useState(() => {
			if (typeof window === "undefined") {
				return initialValue;
			}
			try {
				// Get from local storage by key
				const item = window.localStorage.getItem(key);
				// Parse stored json or if none return initialValue
				return item ? JSON.parse(item) : initialValue;
			} catch (error) {
				// If error also return initialValue
				console.log(error);
				return initialValue;
			}
		});
		// Return a wrapped version of useState's setter function that ...
		// ... persists the new value to localStorage.
		const setValue = (value) => {
			try {
				// Allow value to be a function so we have same API as useState
				const valueToStore = value instanceof Function ? value(storedValue) : value;
				// Save state
				setStoredValue(valueToStore);
				// Save to local storage
				if (typeof window !== "undefined") {
					window.localStorage.setItem(key, JSON.stringify(valueToStore));
				}
			} catch (error) {
				// A more advanced implementation would handle the error case
				console.log(error);
			}
		};
		return [storedValue, setValue];
	}

	const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

	const clickHandler = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	const isChecked = theme === "light" ? false : true;

	return (
		<div className="body" data-theme={theme}>
			<InjectRootCSS data={[...dataJSON.text, ...dataJSON.colors, ...dataJSON.links]} varPrefix="--color-" />
			<InjectRootCSS data={dataJSON.typography} varPrefix="--type-" />

			<BrowserRouter>
				<RoutesLayout checked={isChecked} onChange={() => clickHandler()} />
			</BrowserRouter>
		</div>
	);
};

export default DesignSystem;
