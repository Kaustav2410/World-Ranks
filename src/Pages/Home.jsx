import React from 'react'
import heroImg from '../Media/hero-image-wr.jpg'
import { WorldHeader } from '../Components/WorldHeader';
import { CountryContainer } from '../Components/CountryContainer';

export const Home = () => { 
  return (
        <div className='flex  flex-col justify-center items-center bg-blackish min-h-screen font-Vietnam_Pro text-xs'>
      <div className='w-full'>
        <img src={heroImg} className='w-screen object-cover h-[25rem] fixed top-0 ' />
      </div>
     <WorldHeader/>
     <CountryContainer/>
    </div>
  )
}
