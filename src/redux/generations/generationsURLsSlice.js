import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* fetch all pokemon generations */
export const loadGenerationsURLs = createAsyncThunk(
    "generationsURLS/loadGenerationsURLs",
    async() => {
        try{
            const response = await fetch(" https://pokeapi.co/api/v2/generation");
            const data = await response.json();
            const generations = data.results;
            return generations;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

/** set slice */
export const generationsURLsSlice = createSlice(
    {
        name: "generationsURLs",
        initialState: {
            generationsURLs: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadGenerationsURLs.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadGenerationsURLs.fulfilled, (state, action) => {
                    state.generationsURLs = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadGenerationsURLs.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        },
    }
);

export const selectGenerationsURLs = state => state.generationsURLs;
export const generationsURLsReducer = generationsURLsSlice.reducer;