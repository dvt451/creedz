// components/CustomScrollStyles.js
import { useEffect } from 'react';

const CustomScrollStyles = ({ className }) => {
	useEffect(() => {
		document.documentElement.classList.add(className);
		document.body.classList.add(className);

		return () => {
			document.documentElement.classList.remove(className);
			document.body.classList.remove(className);
		};
	}, [className]);

	return null;
};

export default CustomScrollStyles;
