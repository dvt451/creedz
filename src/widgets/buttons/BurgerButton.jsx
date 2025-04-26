import { useAppContext } from '../../shared/hooks/ThemeContext'
import { Burgercolesedicons, Burgericon } from '../../shared/icons/icons'
import React, { useState } from 'react'

export default function Burgerbutton() {
   const [animClassName, setAnimClassName] = useState('')
   const _ = useAppContext()
   const burgerHandle = ()=>{
      if(_.burgerState){
         setTimeout(() => {
            _.setBurgerState(false)
         }, 150);
         setAnimClassName('')
      }else{
         setTimeout(() => {
            _.setBurgerState(true)
         }, 150);
         setAnimClassName(' rotate')
      }
   }
  return (
   <button type="button" className={`burger__button${_.burgerState ? ' _active' : ''}${animClassName}`} onClick={burgerHandle}>
      {_.burgerState ? Burgercolesedicons
      : Burgericon}
   </button>
  )
}
