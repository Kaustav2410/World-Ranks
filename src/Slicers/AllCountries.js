import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
// Add the necessary async logic inside a thunk function to handle the API call and data fetching. Thunk functions allow you to write async logic in Redux actions
export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const url = 'https://restcountries.com/v3.1/all'; 
        try {
            const res = await fetch(url);
            const response = await res.json();
            return response;
        } catch (error) {
            console.log("Error in fetching the data regarding the countries", error);
            throw error;
        }
    }
);

export const allCountries = createSlice({
    name: 'countries',
    initialState: {
        rawdata: [],
        modifiedData: [],
        loading: false,
        sortBy: 'population', // Default sorting option by population
        filterCountries: {
            Americas: true,
            Antarctic: true,
            Africa: true,
            Asia: true,
            Europe: true,
            Oceania: true,
        },
        status:null,
        searchTerm:"",
        currentPage:1,
        itemsPerPage:10,
        length:0,
        TotalPages:1
    },
    reducers:{
        setSortBy:(state,action)=>{
            // console.log(action); 
            state.currentPage=1
            state.sortBy=action.payload
        },
        setStatus:(state,action)=>{
            // console.log(state.status);
            state.currentPage=1
            state.status=action.payload
        },
        setFilter:(state,action)=>{
            state.currentPage=1
            state.filterCountries={...state.filterCountries,[action.payload]:!state.filterCountries[action.payload]}
        },
        setTerm:(state,action)=>{
            state.currentPage=1
            state.searchTerm= action.payload
        },
        setPages:(state,action)=>{
            console.log(action.payload);
            state.currentPage= action.payload
        },
        setLength:(state,action)=>{
            state.length = action.payload
            // console.log(action.payload);
            state.TotalPages=Math.ceil(action.payload/state.itemsPerPage)
            // console.log(state.TotalPages);
        },
        setCountries:(state,action)=>{
            state.modifiedData = state.rawdata.filter(country => {
                const isInSearchTerm = (
                    country.name.common.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                    country.region.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                    (country.subregion !== undefined && country.subregion.toLowerCase().includes(state.searchTerm.toLowerCase()))
                );
            
                const isInFilter = (
                    state.filterCountries[country.region] ||
                    state.filterCountries[country.subregion] 
                );
            
                const isInStatus = (
                    (state.status === "independent" && country.unMember === false) ||
                    (state.status === "member" && country.unMember === true) ||
                    state.status === null
                );
            
                return isInSearchTerm && isInFilter && isInStatus;
            }).sort((a, b) => {
                if (state.sortBy === 'population') {
                    return b.population - a.population;
                } else if (state.sortBy === 'alphabetical') {
                    const nameA = a.name.common.toUpperCase();
                    const nameB = b.name.common.toUpperCase();
            
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }
            });
            state.length=state.modifiedData.length
            state.TotalPages=Math.ceil(state.length/state.itemsPerPage)
        }
    },
    // A callback that receives a builder object to define case reducers via calls to builder.addCase(actionCreatorOrType, reducer)
    extraReducers: (builder) => {
        // Adds a case reducer to handle a single exact action type.
        // @remarks — All calls to builder.addCase must come before any calls to builder.addMatcher or builder.addDefaultCase.
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading=false;
                state.rawdata = action.payload;
                state.length=action.payload.length;
                // console.log(state.rawdata)
            })
            .addCase(fetchCountries.rejected, (state) => {
                state.loading = false;
            });
    },
});
export const { setSortBy, setFilter,setStatus,setTerm,setPages,setLength,setCountries } = allCountries.actions;
export default allCountries.reducer; 