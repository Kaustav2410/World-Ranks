import React from 'react'
import heroImg from '../Media/hero-image-wr.jpg'
import {SingleCountryContainer } from '../Components/SingleCountryContainer'
import { WorldHeader } from '../Components/WorldHeader'

export const Country = () => {
  return (
    <div>
        <div className='flex  flex-col align-middle bg-blackish min-h-screen font-Vietnam_Pro'>
      <div className='w-full'>
        <img src={heroImg} className='w-full object-cover h-[18rem] fixed top-0 ' />
      </div>
      <WorldHeader/>
     <SingleCountryContainer/>
    </div>
    </div>
  )
}
