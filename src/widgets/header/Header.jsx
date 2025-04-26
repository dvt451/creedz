import { useEffect, useState } from "react";
import BurgerBody from "./BurgerBody";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderWidgets from "./HeaderWidgets";

export default function Header() {
	const [headerShowUp, setHeaderShowUp] = useState(false)
	useEffect(() => {
		let prevScrollpos = window.pageYOffset;

		const handleScroll = () => {
			let currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				setHeaderShowUp(false)
			} else {
				setHeaderShowUp(true)
			}
			prevScrollpos = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<header className={`header${headerShowUp ? ' hide' : ''}`}>
			<div className="header__main">
				<div className="header__container">
					<div className="header__content">
						<HeaderLogo nameClass={'header__logo '} />
						<HeaderMenu nameClass={'header__menu '} />
						<HeaderWidgets />
					</div>
				</div>
			</div>
			<BurgerBody />
		</header>
	)
}
