import { StarIcon } from '../../shared/icons/icons';
import ScalingWrapper from './ScalingWrapper';

const PreloaderScaling = () => {
	return (
		<ScalingWrapper>
			<div className='preloader__star-container'>
				<div className='preloader__star preloader__star_1'>{StarIcon}</div>
				<div className='preloader__star preloader__star_2'>{StarIcon}</div>
				<div className='preloader__star preloader__star_3'>{StarIcon}</div>
			</div>
		</ScalingWrapper>
	);
};

export default PreloaderScaling;
