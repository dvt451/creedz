import { Link } from 'react-router-dom'
import { useAppContext } from '../../../shared/hooks/ThemeContext'

export default function Links() {
	const _ = useAppContext()
	return (
		<div className="usecase__links">
			<Link className='usecase__link-project usecase__link-project_prev' onClick={() => {
				setTimeout(() => {
					const element = document.querySelector('.usecase');
					element?.scrollIntoView()
				}, 600);
			}} to={'/usecases/applexnike'}>Previous Project</Link>
			<Link onClick={() => {
				setTimeout(() => {
					const element = document.querySelector('.usecase');
					element?.scrollIntoView()
				}, 300);
			}
			} className='usecase__link-project usecase__link-project_next' to={'/usecases/cadence'}>Next Project</Link>
		</div>
	)
}