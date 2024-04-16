import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
// Add the necessary async logic inside a thunk function to handle the API call and data fetching. Thunk functions allow you to write async logic in Redux actions
export const fetchCountry = createAsyncThunk(
    'countries/fetchCountry',
    async (code) => {
        const url = `https://restcountries.com/v3.1/alpha/${code}`; 
        // console.log(url);
        try {
            
            const res = await fetch(url);
            const response = await res.json();
            // console.log(response.status);
            return response;
        } catch (error) {
            console.log("Error in fetching the data regarding the countries", error);
            throw error;
        }
    }
);

export const SingleCountry = createSlice({
    name: 'country',
    initialState:{
        Data:[],
        isError:false,
        isLoading:false
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCountry.pending,(state)=> {
            state.isLoading=true;
        });
        builder.addCase(fetchCountry.fulfilled,(state,action)=> {
            state.isLoading=false;
            state.Data=action.payload;
        });
        builder.addCase(fetchCountry.rejected,(state)=> {
            state.isLoading=false;
            state.isError=true;
        });
    }
})

// export const {  } = SingleCountry.actions;
export default SingleCountry.reducer; 