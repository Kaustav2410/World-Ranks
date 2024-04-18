import React from 'react'
import SearchIcon from '../Media/Search.svg';
import { setTerm } from '../Slicers/AllCountries';
import {useDispatch} from 'react-redux'

export const SearchBar = ({length}) => {
    const dispatch = useDispatch()
    function handleTerm(e){
      const term = e.target.value;
      dispatch(setTerm(term));
    }

  return (
    <div className='SearchBar flex text-white justify-between items-center font-Vietnam_Pro py-6 '>
        <div> 
            <p>Found {length} countries</p>
        </div>
        <div className='rounded-xl pr-7 pl-3  py-[.5rem] bg-light-black text-xs flex gap-3 w-1/3 max-lg:w-8/12'>
            <img src={SearchIcon} className='' />
            <input className=' bg-light-black w-full ' placeholder='Search by Name, Region, SubRegion' onChange={handleTerm} ></input>
        </div>
    </div>
  )
}
