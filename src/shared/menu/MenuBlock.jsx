'use client'
import { useAppContext } from "../hooks/ThemeContext";
import { MenuList } from "./MenuList";
import { Link, useLocation } from "react-router-dom";


export default function Menublock() {
   const location = useLocation().pathname === '/'
   const _ = useAppContext()
   const buttonToSection = (section,time = 0)=>{
      _.setBurgerState(false)
      setTimeout(() => {
         const element = document.querySelector(section);
         element?.scrollIntoView({
            behavior: 'smooth'
       })
      }, time);
   }
  return (
   MenuList.map((item,i)=>{
      return <li className="menu__items" key={i}>
         {location ? <button className="menu__link" onClick={()=>buttonToSection(item.href)}>
            {item.title}
         </button> : 
         <Link className="menu__link" to={'/'} onClick={()=>buttonToSection(item.href,800)}>
            {item.title}
         </Link>
         }
      </li>
   })   
  )
}
