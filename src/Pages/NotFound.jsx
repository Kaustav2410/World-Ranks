import React from 'react'
import heroImg from '../Media/hero-image-wr.jpg'
import { WorldHeader } from '../Components/WorldHeader';
export const NotFound = () => {
  return (
    <div className='flex  flex-col bg-blackish min-h-screen font-Vietnam_Pro text-xs'>
      <div className='w-full'>
        <img src={heroImg} className='w-screen object-cover h-[25rem] fixed top-0 ' />
      </div>
     <WorldHeader/>
     <div className='w-full '>
          <h1 className='text-white text-center text-5xl '>Not Found</h1>
        </div>
     </div>
  )
}
