import Index from './index'
import Footer from '../../widgets/footer/Footer'
import HeadComponentsGroup from '../../widgets/HeadComponentsGroup'

export default function Bookacall() {
	return (
		<div className='wrapper bookacall-wrapper'>
			<HeadComponentsGroup />
			<main className="bookacall">
				<Index />
			</main>
			<Footer />
		</div>
	)
}
