import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../shared/hooks/ThemeContext'

export default function AvailableNow(props) {
   const _ = useAppContext()

  return (
   <Link aria-label='Book a call' onClick={()=>{
      _.setBurgerState(false)
   }} to='/bookacall' className={`${props.nameClass}available-now`}><i className='available-now__icon'><span className='shine'></span><span></span></i>
   <span className='available-now__text available-now__text_1'>Book a call</span>
   <span className='available-now__text available-now__text_2'>Book a call</span>
   </Link>
  )
}
