import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentEvolutions = createAsyncThunk(
    "currentEvolutions/loadCurrentEvolutions",
    async(currentEvolutionNames) => {
        
        try{
            const evolutionNames = [];
            for (let name of currentEvolutionNames){
                const response = await fetch(` https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                evolutionNames.push(data);
            }
            return evolutionNames;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentEvolutionsSlice = createSlice(
    {
        name: "currentEvolutions",
        initialState: {
            evolutions: null,
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadCurrentEvolutions.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadCurrentEvolutions.fulfilled, (state, action) => {
                    state.evolutions = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadCurrentEvolutions.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectCurrentEvolutions = state => state.currentEvolutions;
export const currentEvolutionsReducer = currentEvolutionsSlice.reducer;