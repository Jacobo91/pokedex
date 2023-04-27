import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadEvolutionUrl = createAsyncThunk(
    "evolutions/loadEvolutionNames",
    async(url) => {
        try{
            const response = await fetch(url);
            const data = await response.json();
            
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const evolutionUrlSlice = createSlice(
    {
        name: "evolutionUrl",
        initialState: {
            url: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadEvolutionUrl.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadEvolutionUrl.fulfilled, (state, action) => {
                    state.url = action.payload.evolution_chain;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadEvolutionUrl.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectEvolutionUrl = state => state.evolutionUrl;
export const evolutionUrlReducer = evolutionUrlSlice.reducer;

/*

[data.chain.evolves_to[0].species.name, data.chain.evolves_to[0].evolves_to[0].species.name]

*/