import { Link } from 'react-router-dom';
import RandomSVGs from '../features/Bgicons'
import React, { useState } from 'react'

export default function NotFound() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const handleMouseMove = (e) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
    };
  return (
    <div onMouseMove={handleMouseMove} className='notfound'>
      <RandomSVGs mousePosition={mousePosition}/>
      <div className='notfound__container'>
         <h1 className='notfound__title'>404</h1>
         <h3 className="notfound__sub-title">Oops!</h3>
         <p className="notfound__text">Looks like someone ate these virtual cookies. Can you blame them? Click here to get back to your browsing.</p>
         <Link to={'/'} className="notfound__button button">Back to Home</Link>
      </div>
    </div>
  )
}
