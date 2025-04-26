import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../shared/hooks/ThemeContext'
import useScreenSize from '../shared/hooks/useScreenSize';

export default function Customcursor() {
   const isPcScreen = useScreenSize(991.98);
   const location = useLocation()
   const _ = useAppContext()
   const cursorRef = useRef(null)
   useEffect(() => {
      if (!isPcScreen) {
         const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: 0.2,
               ease: 'power2.out'
            });
         };
         
         document.addEventListener('mousemove', moveCursor);
         
         return () => {
            document.removeEventListener('mousemove', moveCursor);
         };
      }
   }, [isPcScreen]);

      
   return (
      <div ref={cursorRef} className={`cursor${_.projectHover ? ' _active-project' : ''}${_.letstalkHover ? ' _active-letstalk' : ''}`}>
         <div className='cursor__main'>
            <span className='usecase-link'>View project</span>
            <span className='letstalk-link'>Let&apos;s talk</span>
         </div>
      </div>
   )
}
