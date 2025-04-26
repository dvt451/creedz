import React from 'react'
import LinkToportfolio from '../buttons/LinkToportfolio'
import AvailableNow from '../buttons/AvailableNow'
import ThemeButton from '../buttons/ThemeButton'
import Burgerbutton from '../buttons/BurgerButton'

export default function HeaderWidgets() {
  return (
   <div className="header__widgets header-widgets">
      <ThemeButton nameClass={'header__theme-mode '}/>
      <AvailableNow nameClass={'header__available-now '}/>
      <LinkToportfolio nameClass={'header__button '}/>
      <Burgerbutton />
   </div>
  )
}
