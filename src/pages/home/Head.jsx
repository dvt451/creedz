import React, { useState, useEffect, Suspense } from 'react';
import { useAppContext } from '../../shared/hooks/ThemeContext';

// Используем React.lazy для ленивой загрузки компонента
const SplineScene = React.lazy(() => import('../../features/SplineScene'));

export default function Head() {
	const [isSceneLoaded, setIsSceneLoaded] = useState(false);
	const _ = useAppContext()

	useEffect(() => {
		setTimeout(() => {
			setIsSceneLoaded(true);
		}, _.welcomingLodaer ? 1500 : 4000);
	}, []);

	return (
		<section id="head" className={`head${_.welcomingLodaer ? '' : ' slideUp'}`}>
			{isSceneLoaded && (
				<Suspense fallback={<div>Loading...</div>}>

					<div className="head__container">
						<p className="head__label">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
								<path d="M12.6667 9.73437C12.6667 10.9242 12.3245 12.0872 11.6836 13.0765C11.0426 14.0657 10.1316 14.8368 9.06565 15.2921C7.99975 15.7474 6.82686 15.8665 5.69531 15.6344C4.56375 15.4023 3.52435 14.8294 2.70855 13.9881C1.89274 13.1468 1.33717 12.0749 1.11209 10.908C0.887008 9.74105 1.00253 8.5315 1.44404 7.43229C1.88555 6.33308 2.63322 5.39357 3.59251 4.73256C4.5518 4.07156 5.67961 3.71875 6.83333 3.71875H13.4444M13.4444 3.71875L11.1111 1.3125M13.4444 3.71875L11.1111 6.125" stroke="#1D1D1F" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							<span>Subscription. Pause or cancel anytime</span>
						</p>
						<h1 className="head__title">All-in-one solution<br /> Unlimited design & development</h1>
						<div className="head__scene">
							<SplineScene />
						</div>
					</div>
				</Suspense>
			)}
		</section>
	);
}
