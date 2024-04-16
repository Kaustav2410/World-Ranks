import React from 'react'
import { Link } from 'react-router-dom';
export const SingleCountry = ({country,id}) => {
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
    <div className=' flex  gap-10'>
      <img src={country.flags.svg} className='max-w-16'/>
      <Link to={`/country/${country.cca3}`} className='w-1/6'>
        {country.name.common}
      </Link>
        <p className='w-1/6'>{addCommasToNumber(country.population)} </p>
        <p className='w-1/6'>{addCommasToNumber(country.area)} </p> 
        <p className='w-1/6'>{country.region} </p> 
    </div> 
  )
}
