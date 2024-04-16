import React, { useContext,useState,useEffect,useMemo } from 'react'
import { SingleCountry } from './SingleCountry'
import { SearchBar } from './SearchBar';
import { Filter } from './Filter';
import {useDispatch,useSelector} from 'react-redux'
import { fetchCountries, setCountries, setLength  } from '../Slicers/AllCountries';
import { Pagination } from './Pagination';

 
export const CountryContainer = React.memo(() => { 
 
    // Now we can use the React Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch
    const modifiedData =useSelector((state) => state.allCountries.modifiedData); 
    const dependencies =useSelector((state) => state.allCountries); 
    const loading =useSelector((state) => state.allCountries.loading);
     const length = useSelector((state)=>state.allCountries.length);
     const itemsPerPage = useSelector((state)=>state.allCountries.itemsPerPage);
     const currentPage = useSelector((state)=>state.allCountries.currentPage);
     const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const dispatch = useDispatch()
    // const paginatedData = modifiedData.slice(startIndex, endIndex);
    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]); // Added dispatch as a dependency

    useEffect(() => {
        dispatch(setCountries());
    }, [dependencies.rawdata, dependencies.filterCountries, dependencies.sortBy, dependencies.status, dependencies.searchTerm, currentPage, dispatch]);

    const paginatedData = useMemo(() => modifiedData.slice(startIndex, endIndex), [modifiedData, startIndex, endIndex]);
    

  return ( 
    <div className='bg-blackish text-light-gray z-10 flex flex-col align-middle my-[0rem] mx-auto max-w-[1250px] px-10  rounded-2xl'>
        <SearchBar length={length} />
        <div className='flex gap-8'>
            <div >
            <Filter/> 
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10'>
                    <p className='min-w-16'>Flag</p>
                    <p className='w-1/6'>Country</p>
                    <p className='w-1/6'>Population</p>
                    <p className='w-1/6'>{`Area(kms)`}</p>
                    <p className='w-1/6'>Region</p>
                </div>
                <hr></hr>
                <div className='flex flex-col justify-center align-middle gap-5 text-white' >
                {
                            loading ? 
                                <p>Loading...</p>
                                :
                                (
                                    paginatedData && paginatedData.length > 0 ?
                                    paginatedData.map((country, index) => (
                                            <SingleCountry country={country} id={index} key={index} />
                                        )) 
                                        : 
                                        <p>No data found</p>
                                ) 
                        }
                </div>
            </div>
        </div>
        <Pagination/>
    </div>
  )
})
 