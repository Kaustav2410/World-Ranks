import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NeigbouringCountries } from './NeigbouringCountries';

export const CountryHome = ({ countryData }) => {
    const [languages, setLanguages] = useState([]);
    const [currencies,setCurrencies] = useState([]);
    const [neigbours,setNeighours] = useState([]);
    const [url,setUrl] = useState('');
    // console.log(countryData.languages);
    useEffect(() => {
        // Extracting languages from the countryData object and updating the languages state
        if (countryData.languages) {
            const extractedLanguages = [];
            for (const key in countryData.languages) {
                // console.log(countryData.languages[key]); 
                extractedLanguages.push(countryData.languages[key]);
            }
            setLanguages(extractedLanguages);
        }
        // console.log(countryData.currencies["INR"].name)
        if (countryData.currencies) {
            const extractedCurrencies = [];
            for (const key in countryData.currencies) {
                extractedCurrencies.push(countryData.currencies[key].name);
            }
            setCurrencies(extractedCurrencies);
        }
        if(countryData.borders){
            const extractedBorders=[];
            countryData.borders.map((con,index)=>{
                setUrl((prevUrl)=>{
                    return index===countryData.borders.length-1?prevUrl+con:prevUrl+con+',';
                })
                extractedBorders.push(con);
            })
            setNeighours(extractedBorders);
        }
    }, [countryData.currencies,countryData.languages,countryData.borders]); 
    function addCommasToNumber(number) {
        let numberString = number.toString();
        let chars = numberString.split('');
        chars.reverse();
        for (let i = 3; i < chars.length; i += 4) {
            chars.splice(i, 0, ',');
        }
        chars.reverse();
        return chars.join('');
    }

    return (
        <div className='flex flex-col items-center px-8 gap-10'>
            <img src={countryData.flags.svg} className='max-w-[250px] w-full rounded-lg -mt-10' alt={countryData.name.common} />
            <div className='text-center text-white'>
                <p className='text-xl'>{countryData.name.common}</p>
                <p>{countryData.name.official}</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center gap-5 sm:flex-col sm:items-center text-white'>
                    <div className='flex gap-2 bg-light-black p-3 items-center rounded-xl'>
                        <p>Population</p>
                        <div className='w-[.1rem] h-full bg-blackish'></div>
                        <p>{addCommasToNumber(countryData.population)}</p>
                    </div>
                    <div className='flex gap-2 bg-light-black p-3 items-center rounded-xl  '>
                        <p>Area(kms<sup>2</sup>)</p>
                        <div className='w-[.1rem] h-full bg-blackish'></div>
                        <p>{addCommasToNumber(countryData.area)}</p>
                    </div>
                </div>
                <div className='flex justify-between mt-6 items-center'>
                    <p>Capital</p>
                    <p className='text-white'>{countryData.capital}</p>
                </div>
                <br />
                <div className='flex justify-between mt-6 items-center'>
                    <p>Subregion</p>
                    <p className='text-white'>{countryData.subregion}</p>
                </div>
                <br />
                <div className='flex justify-between mt-6 items-center gap-10 '>
                    <p>Languages</p>
                    <div className='text-white flex flex-wrap justify-start max-w-1/3'> 
                        {languages.map((language, index) => (
                            <span className='px-[.5rem]' key={index}>
                            {index === languages.length-1  ? language : `${language},`} 
                        </span>
                        ))} 
                    </div>
                </div>
                <br />
                <div className='flex justify-between mt-6 items-center '>
                    <p>Currencies</p>
                    <div className='text-white flex flex-wrap'>
                    {currencies.map((currency, index) => (
                    <p className='px-[.5rem]' key={index}>
                        {index === currencies.length-1  ? currency : `${currency},`}
                    </p>
                    ))}

                    </div>
                </div>
                <br />
                <div className='flex  mt-6 flex-col gap-4'>
                    <p>Neighbouring Countries</p> 
                    <NeigbouringCountries neigbours={neigbours} countryData={countryData} url={url} />
                </div>
            </div> 
        </div>
    );
};
