import React from 'react'
import {Different1,Different2,Different3,Different4} from '../../shared/icons/DifferentIcons'

export default function Different() {
   const differences = [
      {
         icon: <Different1 />,
         title: 'Team of experts',
         text: 'Our services are crafted by experts who are deeply into any industry, ensuring your project stands out in a crowded market.',

      },
      {
         icon: <Different3 />,
         title: 'Unlimited changes',
         text: "We're here to make sure you’re happy. Feel free to ask for as many changes as needed until everything feels just right for you.",

      },
      {
         icon: <Different2 />,
         title: 'Result on time',
         text: 'Save time and resources with our complete services. Everything you need is right here, making it easy and convenient for you.',

      },
      {
         icon: <Different4 />,
         title: 'Direct communication',
         text: 'No need to manage multiple teams. Work directly with one expert who understands your vision and delivers exactly what you need.',

      },
   ]
  return (
    <section id='benefits' className='different'>
      <div className='different__container'>
         <h2 className="different__main-title">What Makes us Different</h2>
         <div className="different__content">
            {
               differences.map((item,i)=>{
                  return <div key={i} className='different__column'>
                     <div className="different__head">{item.icon}<span>{9 > i ? '0'+(i+1) : i+1}</span></div>
                     <h3 className="different__title">{item.title}</h3>
                     <p className="different__text">{item.text}</p>
                  </div>
               })
            }
         </div>
      </div>
    </section>
  )
}
