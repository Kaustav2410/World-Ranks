import React, { useContext,useState,useEffect,useMemo } from 'react'
import { SingleCountry } from './SingleCountry'
import { SearchBar } from './SearchBar';
import { Filter } from './Filter';
import {useDispatch,useSelector} from 'react-redux'
import { fetchCountries, setCountries, setLength  } from '../Slicers/AllCountries';
import { Pagination } from '../Components/Pagination';
import { SkeletonSingleCountry } from './SkeletonSingleCountry';

 
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
    <div className='bg-blackish text-light-gray flex flex-col -mt-20 mx-auto max-w-[1250px] sm:max-w-[min(700px,100%)] sm:pb-5 rounded-2xl min-h-screen px-8 z-20 '>
        <SearchBar length={length} />
        <div className='flex gap-8 max-lg:flex-col'>
            <div> 
            <Filter/> 
            </div>
            <div className='flex flex-col gap-5 py-[2rem] w-3/4 max-lg:w-full'>
                <div className='flex gap-10  sm:justify-between'>
                    <p className='  min-w-16'>Flag</p>
                    <p className='w-3/12 max-lg:w-1/4 sm:w-1/3'>Country</p>
                    <p className='w-4/12 max-lg:w-1/4 sm:hidden sm:w-1/3'>Population</p>
                    <p className='w-4/12 max-lg:hidden'>Area(kms<sup>2</sup>)</p>
                    <p className='w-3/12 max-lg:w-1/4 sm:w-1/3'>Region</p>
                </div>
                <hr></hr>
                <div className='flex flex-col gap-10 text-white' >
                {
                            loading ? 
                            (
                                Array.from({ length: 10 }).map((_, index) => (
                                    <SkeletonSingleCountry key={index} />
                                ))
                            )
                                :
                                (
                                    paginatedData && paginatedData.length > 0 ?
                                    paginatedData.map((country, index) => (
                                            <SingleCountry country={country} id={index} key={index} />
                                        )) 
                                        : 
                                        <p>No Countries found according to the filter </p>
                                ) 
                        }
                </div>
            </div>
        </div>
        <Pagination/>
    </div>
  )
})
 