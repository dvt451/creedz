import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Preloadtrigger from './Preloadtrigger';
import { useAppContext } from '../../shared/hooks/ThemeContext';
import PreloaderScaling from '../../shared/PreloadScaling/PreloaderScaling';
import { useLocation } from 'react-router-dom';

export default function Preloader() {
	const _ = useAppContext()
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000)
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 500)
	}, [])

	return (
		!_.welcomingLodaer ? <AnimatePresence mode='wait'>
			{isLoading && <Preloadtrigger />}
		</AnimatePresence> : <PreloaderScaling />
	)
}