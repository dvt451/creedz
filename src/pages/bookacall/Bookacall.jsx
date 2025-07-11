import Index from './index'
import Footer from '../../widgets/footer/Footer'
import HeadComponentsGroup from '../../widgets/HeadComponentsGroup'
import CustomScrollStyles from '../../features/CustomScrollStyles'

export default function Bookacall() {
	const page = 'bookacall-wrapper'
	return (
		<>
			<CustomScrollStyles className={page} />
			<div className='wrapper'>
				<HeadComponentsGroup />
				<main className="bookacall">
					<Index />
				</main>
				<Footer />
			</div>
		</>
	)
}
