import { configureStore } from '@reduxjs/toolkit'
import allCountries from '../Slicers/AllCountries'
import SingleCountry from '../Slicers/SingleCountry'

export default configureStore({
    // import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
  reducer: {
    allCountries: allCountries,
    singleCountry:SingleCountry
  },
}) 