import Contacts from "./Contacts";
import Media from "./Media";
import PolicyLinks from "./PolicyLinks";

export default function Footerbottom() {
  return (
   <div className="footer__bottom">
   <div className="footer__container">
      <div className="footer__row">
         <div className="footer__media">
            <h3 className="footer__media_title">Follow us</h3>
            <Media />
         </div>
         <div className="footer__media">
            <h3 className="footer__media_title">Contact us</h3>
            <Contacts />
         </div>
      </div>
      <div className="footer__row footer__row_bttm">
         <PolicyLinks />
         <p >©2024 creedz creative studio</p>
      </div>
   </div>
</div>
  )
}
