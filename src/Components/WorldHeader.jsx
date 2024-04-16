import React from 'react'
import Logo from '../Media/Logo.svg'
import { Link } from 'react-router-dom'
export const WorldHeader = () => {
  return (
    <div className=' w-full h-[18rem] z-20 flex justify-center items-center '>
        <Link to={`/`}>
          <img src={Logo} className=' w-[18rem] cursor-pointer'/>
        </Link>
    </div>
  )
}
