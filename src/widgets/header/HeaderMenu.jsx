import React from 'react'
import Menublock from '../../shared/menu/MenuBlock'

export default function HeaderMenu(props) {
  return (
   <nav className={`${props.nameClass}menu`}>
   <ul className="menu__list">
      <Menublock />
   </ul>
</nav>
  )
}
