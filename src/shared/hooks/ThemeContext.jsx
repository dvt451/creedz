import React, { createContext, useContext, useState } from 'react';

// Create a new context instance
const AppContext = createContext();

// Exported wrapper component to provide context
export function AppWrapper({ children }) {
	// State management within the context
	const [dark, setDark] = useState(false);
	const [burgerState, setBurgerState] = useState(false);
	const [projectHover, setProjectHover] = useState(false)
	const [colorState, setColorState] = useState(0)
	const [hoverAnyLink, setHoverAnyLink] = useState(false)
	const [welcomingLodaer, setWelcomingLodaer] = useState(false)
	const [letstalkHover, setLetstalkHover] = useState(false)
	const [loader, setLoader] = useState(false)

	const scrollToTop = () => {
		const element = document.querySelector('main');
		element?.scrollIntoView({
			behavior: 'smooth'
		})
	}


	// Object containing values and functions to be shared via context
	const _ = {
		dark,
		setDark,
		burgerState,
		setBurgerState,
		projectHover,
		letstalkHover,
		scrollToTop,
		loader,
		setLoader,
		setWelcomingLodaer,
		welcomingLodaer,

		setProjectHover,
		colorState,
		setColorState,
		setHoverAnyLink,
		setLetstalkHover,
	};

	// Provide the context value to the children components
	return (
		<AppContext.Provider value={_}>
			{children}
		</AppContext.Provider>
	);
}

// Custom hook to consume the context
export function useAppContext() {
	return useContext(AppContext);
}
