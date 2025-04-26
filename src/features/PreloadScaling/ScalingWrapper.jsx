import { useAppContext } from '../../shared/hooks/ThemeContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScalingWrapper({ children }) {
	const _ = useAppContext()
	const [loaderState, setLoaderState] = useState(false)
	const location = useLocation()
	useEffect(() => {
		if (!loaderState && location === '/') {
			document.body.style.overflow = 'hidden';
			setTimeout(() => {
				document.body.style.overflow = 'auto';
			}, 6500);
		}
		else {
			document.body.style.overflow = 'hidden';
			setTimeout(() => {
				document.body.style.overflow = 'auto';
			}, 2000);
		}
	}, [location])
	useEffect(() => {
		setLoaderState(true)
	}, [loaderState])
	return (
		<div className={`preloader${_.loeader ? ' instant' : ''}`}>
			{children}
		</div>
	)
}
