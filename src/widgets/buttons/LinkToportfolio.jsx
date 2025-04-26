import React from 'react'
import GsapMagnetic from '../../features/GsapMagnetic'
import { useAppContext } from '../../shared/hooks/ThemeContext'
import { Link } from 'react-router-dom'

export default function LinkToportfolio(props) {
   const _ = useAppContext()
  return (
   <GsapMagnetic>
   <Link to={'/portfolio'} aria-label='Portfolio' onClick={()=>{_.setBurgerState(false)}} className={`${props.nameClass}link-to-portfolio`}>
       <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.39 0.660156H11.1247C11.1247 3.71882 9.87644 6.50409 7.87584 8.52042C5.85815 10.5197 3.08809 11.7671 0.0273437 11.7671L0.0273437 13.0315C3.08809 13.0315 5.85815 14.2789 7.87584 16.2782C9.87644 18.2945 11.1247 21.0798 11.1247 24.1384H12.39C12.39 21.0798 13.6382 18.2945 15.6388 16.2782C17.4917 14.4422 19.9935 13.2403 22.7601 13.0562L22.6877 11.7375C16.9305 11.3197 12.39 6.52007 12.39 0.660156Z" fill="#FDFDFB"/>
          <path d="M28.0273 11.7253C27.7526 11.7253 22.9574 11.7571 22.6877 11.7375L22.7601 13.0562C23.0062 13.0399 27.7773 12.9897 28.0273 12.9897V11.7253Z" fill="#FDFDFB"/>
       </svg>
 </Link>
 </GsapMagnetic>
  )
}
