import React from 'react'
import { useAppContext } from '../../shared/hooks/ThemeContext'
import AvailableNow from '../buttons/AvailableNow'
import LinkToportfolio from '../buttons/LinkToportfolio'
import HeaderMenu from './HeaderMenu'
import Footerbottom from '../footer/Footerbottom'
import Businesslink from '../footer/Businesslink'

export default function BurgerBody() {
	const _ = useAppContext()
	return (
		<div className={`burger-body${_.burgerState ? ' _active' : ''}`}>
			<div className="burger-body__top">
				<AvailableNow nameClass={'burger-body__available-now '} />
				<LinkToportfolio nameClass={'burger-body__button '} />
			</div>
			<HeaderMenu nameClass={'burger-body__menu '} />
			<Businesslink />
			<Footerbottom />
		</div>
	)
}
