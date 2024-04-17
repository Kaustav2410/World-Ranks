import React from 'react'
import { Link } from 'react-router-dom';
export const SingleCountry = ({country}) => {
  // console.log(country);
  function addCommasToNumber(number) {
    // Convert the number to a string
    let numberString = number.toString();
    // Split the string into an array of characters
    let chars = numberString.split('');
    // Reverse the array to make it easier to insert commas
    chars.reverse();
    // Loop through the array and insert commas at every third position
    for (let i = 3; i < chars.length; i += 4) {
      // https://www.w3schools.com/jsref/jsref_splice.asp
        chars.splice(i, 0, ',');
    }
    // Reverse the array back to its original order
    chars.reverse();
    // Join the array back into a string
    return chars.join(''); 
} 
  return (
    <div className=' flex w-full gap-10 text-base sm:justify-between'>
      <img src={country.flags.svg} className='max-w-16'/>
      <Link to={`/country/${country.cca3}`} className='w-3/12'>
        {country.name.common}
      </Link>
        <p className='w-4/12 max-lg:w-1/4  sm:hidden '>{addCommasToNumber(country.population)} </p>
        <p className='w-4/12 max-lg:w-1/4  max-lg:hidden'>{addCommasToNumber(country.area)} </p> 
        <p className='w-3/12 max-lg:w-1/4 '>{country.region} </p> 
    </div> 
  )
}
