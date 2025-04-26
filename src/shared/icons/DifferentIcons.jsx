'use client'
import Lottie from "lottie-react";
import directcommunication from '../json/directcommunication.json'
import resultontime from '../json/resultontime.json'
import teamofexperts from '../json/teamofexperts.json'
import unlimitedchanges from '../json/unlimitedchanges.json'


export function Different1() {

   return (
       <div className='different__icon different__icon_1'>
         <Lottie animationData={teamofexperts} />
       </div>
   );
}

export function Different2() {

   return (
       <div className='different__icon different__icon_2'>
         <Lottie animationData={resultontime} />
       </div>
   );
}
export function Different3() {

   return (
       <div className='different__icon different__icon_3'>
         <Lottie animationData={unlimitedchanges} />
       </div>
   );
}
export function Different4() {

   return (
       <div className='different__icon different__icon_4'>
         <Lottie animationData={directcommunication} />
       </div>
   );
}