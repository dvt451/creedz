import React, { useState, useEffect, useCallback, useRef } from 'react';
import RandomSVGs from '../../../features/Bgicons';
import Content from './Content';
import useScreenSize from '../../../shared/hooks/useScreenSize';
import { throttle } from 'lodash';

export default function LetstalkBlock({ children }) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const isMobile = useScreenSize(767.98);
	const [inView, setInView] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setInView(true)
		}, 3000);
	}, [])

	// Throttled mouse move handler to limit updates
	const handleMouseMove = useCallback(
		throttle((e) => {
			if (!isMobile) {
				setMousePosition({ x: e.clientX, y: e.clientY });
			} else {
				setMousePosition({ x: 500, y: e.clientY });
			}
		}, 50),
		[isMobile]
	);

	return (
		<section onMouseMove={handleMouseMove} id='letstalk' className='letstalk'>
			<div
				className={`letstalk__layer ${inView ? 'visible' : 'hidden'}`} // Toggle classes based on visibility
			>
				<div className="letstalk__pluses">
					<div className="letstalk__plus">+</div>
					<div className="letstalk__plus">+</div>
				</div>
				{!isMobile && inView ? ( // Only render RandomSVGs when section is visible and not on mobile
					<RandomSVGs logoCount={15} mousePosition={mousePosition} />
				) : null}
				{inView && <div className='letstalk-container'>
					<div
						style={{
							transform: !isMobile
								? `translate(${mousePosition.x / 20}px, ${mousePosition.y / -20}px)`
								: 'none',
						}}
						className='letstalk__marque'
					>
						{children}
					</div>
				</div>}
				{inView && <Content />}
			</div>
		</section>
	);
}
