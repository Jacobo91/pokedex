import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadTypes = createAsyncThunk(
    "types/loadTypes",
    async() => {
        try{
            const allTypes = [];

            const typesURLs = await fetch("https://pokeapi.co/api/v2/type");
            const typesURLsData = await typesURLs.json();
            const typesResults = typesURLsData.results.map(type => type.url);

            for (let url of typesResults){
                const response = await fetch(url);
                const data = await response.json();
                allTypes.push(data);
            }

            return allTypes;

        }
        catch(error){
            throw new Error(error);
        }
    }
);

const typesSlice = createSlice(
    {
        name: "types",
        initialState: {
            data: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadTypes.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadTypes.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                    
                })
                .addCase(loadTypes.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectTypes = state => state.types;
export const typesReducer = typesSlice.reducer;