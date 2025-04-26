import { useAppContext } from '../../shared/hooks/ThemeContext'
import { Link } from 'react-router-dom'

export default function PolicyLinks() {
   const _ = useAppContext()
  return (
   <div><Link  onClick={()=>{
      _.setHoverAnyLink(false)
      _.setBurgerState(false)
   }} onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} to="/policy" >Privacy Policy</Link> | <Link onClick={()=>{
      _.setHoverAnyLink(false)
      _.setBurgerState(false)
   }}  onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} to={'/terms'}>Terms & Conditions</Link>
   </div>

  )
}
