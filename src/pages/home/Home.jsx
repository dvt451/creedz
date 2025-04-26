import React, { lazy, Suspense } from 'react';
import Preloader from '../../widgets/Preloader/Preloader';
import Progressbar from '../../widgets/Progressbar'
import Header from '../../widgets/header/Header'
import CustomScrollStyles from '../../features/CustomScrollStyles'
import TopButton from '../../widgets/buttons/TopButton';

// Лениво загружаем компоненты
const Head = lazy(() => import('./Head'));
const Process = lazy(() => import('./Process'));
const Services = lazy(() => import('./Services'));
const Portfolio = lazy(() => import('./Portfolio'));
const Different = lazy(() => import('./Different'));
const Pricing = lazy(() => import('./Pricing'));
const Letstalk = lazy(() => import('./Letstalk/Letstalk'));
const Footer = lazy(() => import('../../widgets/footer/Footer'));
const Awwwards = lazy(() => import('../../widgets/components/Awwwards'));

export default function Home() {
	return (
		<>
			<CustomScrollStyles className={'creedz-html'} />
			<Progressbar />
			<Preloader />
			<TopButton />
			<Header />
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Awwwards />
					<Head />
					<Process />
					<Services />
					<Portfolio />
					<Different />
					<Pricing />
					<Letstalk />
				</Suspense>
			</main>
			<Suspense fallback={<div>Loading footer...</div>}>
				<Footer />
			</Suspense>
		</>
	);
}
