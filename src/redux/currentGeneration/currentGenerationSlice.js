import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentGeneration = createAsyncThunk(
    'currentGeneration/loadCurrentGeneration',
    async(url) => {
        try{
            const baseURL = !url ? " https://pokeapi.co/api/v2/generation/1/" : url;
            const response = await fetch(baseURL);
            const data = await response.json();
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentGenerationSlice = createSlice(
    {
        name: "currentGeneration",
        initialState: {
            generation: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadCurrentGeneration.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadCurrentGeneration.fulfilled, (state,action) => {
                    state.generation = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadCurrentGeneration.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectCurrentGeneration = state => state.currentGeneration;
export const currentGenerationReducer = currentGenerationSlice.reducer;