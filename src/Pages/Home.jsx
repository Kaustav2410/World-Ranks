import React from 'react'
import heroImg from '../Media/hero-image-wr.jpg'
import { WorldHeader } from '../Components/WorldHeader';
import { CountryContainer } from '../Components/CountryContainer';
import { Pagination } from '../Components/Pagination';

export const Home = () => { 
  return (
    <div>
        <div className='flex  flex-col justify-center align-middle bg-blackish min-h-screen font-Vietnam_Pro w-full'>
      <div className='w-full'>
        <img src={heroImg} className='w-full object-cover h-[18rem] fixed top-0 ' />
      </div>
     <WorldHeader/>
     <CountryContainer/>
     <Pagination/>
    </div>
    </div>
  )
}
