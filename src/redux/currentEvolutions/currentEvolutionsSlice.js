import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadCurrentEvolutions = createAsyncThunk(
    "currentEvolutions/loadCurrentEvolutions",
    async(evolutionUrl) => {
        try{
            const response = await fetch(evolutionUrl);
            const data = await response.json();
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentEvolutionsSlice = createSlice(
    {
        name:"currentEvolutions",
        initialState: {
            evolutions: [],
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
                    console.log(action.payload);
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