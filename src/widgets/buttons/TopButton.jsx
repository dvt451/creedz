import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAppContext } from "../../shared/hooks/ThemeContext";
import { ArrowUp } from "../../shared/icons/icons";
import { useLocation } from "react-router-dom";

export default function TopButton() {
	const _ = useAppContext();
	const [isSceneLoaded, setIsSceneLoaded] = useState(false);

	const buttonRef = useRef(null);
	const location = useLocation();
	useEffect(() => {
		setTimeout(() => {
			setIsSceneLoaded(true);
		}, _.welcomingLodaer ? 1500 : 4000);
	}, []);

	useLayoutEffect(() => {
		if (typeof window !== 'undefined' && buttonRef.current) {
			gsap.registerPlugin(ScrollTrigger);
			gsap.to(buttonRef.current, {
				scrollTrigger: {
					trigger: document.documentElement,
					start: 0,
					end: window.innerHeight,
					onLeave: () => { gsap.to(buttonRef.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
					onEnterBack: () => { gsap.to(buttonRef.current, { scale: 0, duration: 0.25, ease: "power1.out" }) }
				}
			});
		}
	}, [location]);

	return (
		<button aria-label={'Link to top'} ref={buttonRef} className={`button-to-head${_.burgerState ? ' _active' : ''}`} onClick={() => {
			const element = document.querySelector('main');
			element?.scrollIntoView({
				behavior: 'smooth'
			});
		}}>{ArrowUp}</button>
	);
}
