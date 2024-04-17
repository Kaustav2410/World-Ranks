import React from 'react'
import heroImg from '../Media/hero-image-wr.jpg'
import {SingleCountryContainer } from '../Components/SingleCountryContainer'
import { WorldHeader } from '../Components/WorldHeader'

export const Country = () => {
  return (
        <div className='flex  flex-col justify-center items-center bg-blackish font-Vietnam_Pro text-xs min-h-screen min-w-full'>
      <div className='w-full'>
        <img src={heroImg} className='w-screen object-cover h-[25rem] fixed top-0 ' />
      </div>
      <WorldHeader />
     <SingleCountryContainer/>
    </div>
  )
}
