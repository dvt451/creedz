import { Link } from 'react-router-dom'
import { useAppContext } from '../../../shared/hooks/ThemeContext'

export default function Links() {
	const _ = useAppContext()
	return (
		<div className='usecase__links'>
			<Link className='usecase__link-project usecase__link-project_next' onClick={() => {
				setTimeout(() => {
					const element = document.querySelector('.usecase');
					element?.scrollIntoView()
				}, 600);
			}} to={'/usecases/applexnike'}>Next Project</Link>
		</div>
	)
}