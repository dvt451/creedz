import { useAppContext } from '../../shared/hooks/ThemeContext'

export default function Businesslink() {
   const _ = useAppContext()
  return (
   <div className="business-link">
      <p className="footer__label">E-mail</p>
      <a onMouseEnter={()=>{_.setHoverAnyLink(true)}} onMouseLeave={()=>{_.setHoverAnyLink(false)}} href="mailto:info@creedz.net" className="footer__page-link">info@creedz.net</a>
   </div>
  )
}