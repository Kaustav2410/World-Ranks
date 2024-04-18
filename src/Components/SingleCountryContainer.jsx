import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCountry } from '../Slicers/SingleCountry';
import { CountryHome } from './CountryHome';
import { SkeletonCountryHome } from './SkeletonCountryHome';


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
            <>
            {isLoading ? (
                <SkeletonCountryHome />
            ) : countryData !== undefined ? (
                <div className='bg-blackish text-light-gray z-10 flex flex-col -mt-20 mx-auto max-w-[1250px] sm:max-w-[min(700px,100%)] sm:pb-5 rounded-2xl min-h-screen'>
                <CountryHome countryData={countryData} />
                </div>
            ) : (
                <SkeletonCountryHome />
            )}
            </>
    );
};
 