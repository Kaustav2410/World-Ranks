import React from 'react'
export const SkeletonSingleCountry = () => {
  return (
    <div className=' flex w-full gap-10 text-base sm:justify-between h-10'>
      <p className='w-2/12 bg-light-gray h-4/12 rounded-xl'></p>
      <p className='w-3/12 bg-light-gray h-4/12 rounded-xl'></p>
      <p className='w-4/12 max-lg:w-1/4 bg-light-gray h-4/12 sm:hidden rounded-xl '> </p>
      <p className='w-4/12 max-lg:w-1/4  max-lg:hidden bg-light-gray h-4/12 rounded-xl'> </p> 
     <p className='w-3/12 max-lg:w-1/4 bg-light-gray h-4/12 rounded-xl'> </p> 
    </div> 
  )
}