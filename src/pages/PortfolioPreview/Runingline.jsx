import { Tinyiconstart } from "../../shared/icons/icons"

export default function Runingline() {
	const clickAnywhereNumber = Array.from({ length: 12 }, () => undefined)
	return (
		<div className='running-line__container'>
			<div className='running-line'>
				<div className="running-line__wrapper">
					{
						clickAnywhereNumber.map((item, i) => {
							return <div className='running-line__items' key={i}>{Tinyiconstart}<span className='md1'>Click Anywhere</span><span className='md2'>Tap Anywhere</span></div>
						})
					}
				</div>
				<div className="running-line__wrapper">
					{
						clickAnywhereNumber.map((item, i) => {
							return <div className='running-line__items' key={i}>{Tinyiconstart}<span className='md1'>Click Anywhere</span><span className='md2'>Tap Anywhere</span></div>
						})
					}
				</div>
			</div>
		</div>
	)
}
