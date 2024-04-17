import React from 'react'
import Logo from '../Media/Logo.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPages } from '../Slicers/AllCountries'
export const WorldHeader = () => {
  const dispatch = useDispatch();
  const handleLogoClick = () => {
    // dispatch(setPages(1));
    console.log("clicked")
  };

  return (
    <div className=' w-full h-[18rem] z-20 flex justify-center items-center '>
        <Link to={`/`} onClick={() => dispatch(setPages(1))}>
          <img src={Logo} className=' w-[18rem] cursor-pointer' />
        </Link>
    </div>
  )
}
