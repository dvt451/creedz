import Menublock from "../../shared/menu/MenuBlock";
import Businesslink from "./Businesslink";
import Footerbottom from "./Footerbottom";
import EmailForm from "./EmailForm";

export default function Footer() {
   return (
      <footer className="footer">
         <div className="footer__content">
            <div className="footer__top">
               <div className="footer__container">
                  <div className="footer__column">
                     <p className="footer__text">Your brand deserves the best. Work with us and<br />see the difference.<br /><br />Best regards, <br />Creedz ©</p>
                  </div>
                  <div className="footer__column">
                     <nav className="footer__menu menu">
                        <ul className="menu__list">
                           <Menublock />
                        </ul>
                     </nav>
                     <Businesslink />
                  </div>
                  <div className="footer__column">
                     <h2 className="footer__title">Reach out <br />to us anytime</h2>
                     <EmailForm />
                  </div>
               </div>
            </div>
            <Footerbottom />
         </div>
   </footer>

  )
}
