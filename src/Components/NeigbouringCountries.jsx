import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const NeigbouringCountries = ({neigbours,countryData,url}) => {
    const [neigbourData,setNeigbourData]= useState([]);
    async function fetchNeighboursData(){
        const link = `https://restcountries.com/v3.1/alpha?codes=${url}`; 
    // console.log(link); 
        try {
            const res = await fetch(link);
            const response = await res.json();
            // console.log(response.status);
            setNeigbourData(response);
            console.log(response)
            return response;
        } catch (error) {
            console.log("Error in fetching the data regarding the countries", error);
            throw error;
        }
    }
    useEffect(()=>{
        if (url) {
            fetchNeighboursData(url)
        }
    },[url])
    console.log(neigbourData[0]?.cca3,neigbourData[0]?.flags.svg)  
  return (
    <div className='text-white flex flex-wrap justify-start gap-5'>
                    {neigbourData && neigbourData.map((con, index) => (
                        <Link to={`/country/${con.cca3}`} key={index} className='w-1/12'>
                            <div className='flex flex-col gap-5 items-center'>
                                <div>
                                    <img  src={con.flags.svg} />
                                </div>
                            <span className='px-[.5rem] cursor-pointer' key={index}>
                                {index === countryData.borders.length-1  ? con.cca3 : `${con.cca3},`}
                            </span>
                            </div>
                        </Link>
                    ))}

                    </div>
  )
}
