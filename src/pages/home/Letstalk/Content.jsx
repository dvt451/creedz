import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { slideUp } from './anim';
import { useAppContext } from '../../../shared/hooks/ThemeContext';
import { Link } from 'react-router-dom';

export default function Content() {
  const _ = useAppContext();  
  const textRow1 = "Let's Create".split('');
   const textRow2 = 'Magic Together'.split('');
   const subTitle = "Is your big idea ready to work its magic?";
   const containerRef = useRef(null);

   const isInView = useInView(containerRef);
 
   const mouseSectionEnter = () => {
      _.setLetstalkHover(true);
    };
  
    const mouseSectionLeave = () => {
      _.setLetstalkHover(false);
    };
  
    const getLetterStyle = (index) => {
      return {
        animationDelay: `${index * 7}s`,
      };
    };
  return (
   <div className="letstalk__content">
   <p>{subTitle}</p>
   <Link 
       href={'/bookacall'}
       onMouseLeave={mouseSectionLeave}
       onMouseEnter={mouseSectionEnter}
       onClick={() => {
          mouseSectionLeave();
          setTimeout(() => {
            const element = document.querySelector('main');
            element?.scrollIntoView({});
          }, 800);
        }} 
   >
      <h2 ref={containerRef}>
        <span className='letter-row letter-row_1'>
          {textRow1.map((letter, i) => (
            <motion.span
              key={i}
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              custom={{ index: i }}
              className='mask'
            >
              <span className='letter'>
                <span style={getLetterStyle(i / (1.5 + i))} className='letter_1'>{letter}</span>
                <span style={getLetterStyle(i / (1.5 + i))} className='letter_2'>{letter}</span>
              </span>
            </motion.span>
          ))}
        </span>
        <br />
        <span className='letter-row letter-row_2'>
          {textRow2.map((letter, i) => (
            <motion.span
              key={i}
              variants={slideUp}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              custom={{ index: i }}
              className='mask'
            >
              <span className='letter'>
                <span style={getLetterStyle(i / (5 + i))} className='letter_1'>{letter}</span>
                <span style={getLetterStyle(i / (5 + i))} className='letter_2'>{letter}</span>
              </span>
            </motion.span>
          ))}
        </span>
      </h2>
   </Link>
 </div>
  )
}
