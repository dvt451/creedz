'use client'
import React, { useState } from 'react'
import RandomSVGs from '@/features/Bgicons'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import { Onlyptichka } from '@/shared/icons/AnimatedIcons'
import Link from 'next/link'

export default function Received() {
   const {setHoverAnyLink} = useAppContext()
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const handleMouseMove = (e) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
    };
  return (
    <div onMouseMove={handleMouseMove} className='received'>
      <RandomSVGs mousePosition={mousePosition}/>
      <div className='received__container'>
         <div className='received__anim'><Onlyptichka /></div>
         <h3 className="received__sub-title">Success!!</h3>
         <p className="received__text">Your request was successfully submitted. Our sails manager will contact you soon!</p>
         <Link onMouseEnter={()=>setHoverAnyLink(true)} onMouseLeave={()=>setHoverAnyLink(false)} href={'/'} className="received__button button">Back to Home</Link>
      </div>
    </div>
  )
}
