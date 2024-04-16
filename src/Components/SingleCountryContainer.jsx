import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCountry } from '../Slicers/SingleCountry';
import { CountryHome } from './CountryHome';

export const SingleCountryContainer = () => {
    // const navigation = useNavigate();
    const countryData=useSelector((state)=>state.singleCountry.Data[0]) 
    const isLoading = useSelector((state)=>state.singleCountry.isLoading);
    // console.log(countryData?.name.common)
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCountry(tag));
    },[dispatch,tag])

    return (
        <div className='bg-blackish text-light-gray z-10 flex flex-col my-[0rem] mx-auto max-w-[1250px] px-10  rounded-2xl'>  
         {
            isLoading ? 
                <p>Loading...</p>
            :
            (
                countryData!==undefined ?   
                (<CountryHome countryData={countryData} />):(<p>Data not found</p>)
            ) 
        } 
           
            </div>
    );
};
 