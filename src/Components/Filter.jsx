import React from 'react'
import done from '../Media/Done_round.svg'
import DropDown from '../Media/Expand_down.svg'
import {useDispatch,useSelector} from 'react-redux'
import { setSortBy, setStatus,setFilter } from '../Slicers/AllCountries';

export const Filter = () => {

    // const sortBy = useSelector((state) => state.allCountries.sortBy);
    const filterCountries = useSelector((state) => state.allCountries.filterCountries);
    const status = useSelector((state) => state.allCountries.status);
    const dispatch = useDispatch()
    function handleFilter(index,value){
        if(index===0){
            dispatch(setSortBy(value));
        }
        else if(index === 2){
            dispatch(setStatus(value));
        }
        else{
            dispatch(setFilter(value)); 
        }
    }
  return (
    <div className='Filter flex flex-col justify-center w-full gap-8'>
        <div className='flex flex-col gap-4'>
            <p className='text-ss'>Sort by</p> 
            <div className='relative'>
                <img src={DropDown} className='absolute right-5 top-3 w-6' />
                <select onChange={(e)=>handleFilter(0,e.target.value)} children className='rounded-xl bg-blackish text-white border-solid border-light-gray p-3 border appearance-none min-w-full '>
                    <option value="population" >Population</option>
                    <option value="alphabetical"  >Alphabetical</option>
                </select>
            </div>
        </div>
        
        <div>
            <p  className='text-ss'>Region</p> 
            <div className='flex flex-wrap gap-5'>
            <button className={`${filterCountries["Americas"] ?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Americas")}>Americas</button>
                <button className={`${filterCountries["Antarctic"]?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Antarctic")}>Antarctic</button>
                <button className={`${filterCountries["Africa"]?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Africa")}>Africa</button>
                <button className={`${filterCountries["Asia"]?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Asia")}>Asia</button>
                <button className={`${filterCountries["Europe"]?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Europe")}>Europe</button>
                <button className={`${filterCountries["Oceania"]?'bg-light-black text-white':''} px-3 py-2 rounded-xl text-left`} onClick={()=>handleFilter(1,"Oceania")}>Oceania</button>
            </div>
        </div>

        <div>
            <p  className='text-ss mb-4'>Status</p>
            <form className='flex flex-col gap-4 '>
            <div className='flex gap-5 relative'>
            <img src={done} className={`absolute w-[1.5rem] ${status==="member"?'':'invisible '}`}/> 
                    <input className='appearance-none  min-w-[1.5rem] h-[1.5rem] border-2 rounded-sm checked:bg-light-blue' type="radio" name="Status" value="member" onClick={(e)=>handleFilter(2,e.target.value)} />
                <label>
                    Member of the United Nations
                </label>
            </div>
            <div className='flex gap-5'>
            <img src={done} className={`absolute w-[1.5rem] z-20 ${status==="independent"?'':'invisible '}`}/> 
                    <input className='appearance-none  min-w-[1.5rem] h-[1.5rem] border-2 rounded-sm checked:bg-light-blue' type="radio" name="Status" value="independent"  onClick={(e)=>handleFilter(2,e.target.value)}/>
                <label>
                    Independent
                </label>
            </div>
            </form>
    
        </div>
    </div>
  )
}
