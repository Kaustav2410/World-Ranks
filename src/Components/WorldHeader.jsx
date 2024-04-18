import React from 'react'
import Logo from '../Media/Logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPages } from '../Slicers/AllCountries'
export const WorldHeader = () => {
  const dispatch = useDispatch();

  return (
    <div className=' w-dvh h-[25rem] z-10 flex justify-center items-center  '>
        <Link to={`/`} onClick={() => dispatch(setPages(1))}>
          <img src={Logo} className=' w-[18rem] cursor-pointer' />
        </Link>
    </div>
  )
}
