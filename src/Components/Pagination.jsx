import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setPages } from '../Slicers/AllCountries';

export const Pagination = () => {
    const dispatch=useDispatch();
    const page =useSelector((state) => state.allCountries.currentPage); 
    const totalPage =useSelector((state) => state.allCountries.TotalPages); 
    function handleNextPage(){
        console.log(page);
        dispatch(setPages(page+1));
    }
    function handlePrevPage(){
        console.log(page);
        dispatch(setPages(page-1));
    }
  return (
    <div className='flex justify-center my-4 gap-4 text-white'>
        <button onClick={handlePrevPage} disabled={page === 1}>{`<`}</button>
            <p>{`${page}/${totalPage}`}</p>
            <button onClick={handleNextPage} disabled={page === totalPage}>{`>`}</button>
    </div>
  )
}
