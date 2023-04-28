import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentSpecies = createAsyncThunk(
    "currentSpecies/loadCurrentSpecies",
    async(speciesUrl) => {
        try{
            const response = await fetch(speciesUrl);
            const data = await response.json();
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentSpeciesSlice = createSlice(
    {
        name: "currentSpecies",
        initialState: {
            speciesData: null,
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadCurrentSpecies.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadCurrentSpecies.fulfilled, (state, action) => {
                    state.speciesData = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadCurrentSpecies.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectCurrentSpecies = state => state.currentSpecies;
export const currentSpeciesReducer = currentSpeciesSlice.reducer;