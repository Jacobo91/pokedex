import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadPokemon = createAsyncThunk(
    "pokemon/loadPokemon",
    async(pokemon) => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const pokemonSlice = createSlice(
    {
        name: "pokemon",
        initialState: {
            data: null,
            isLoading: false,
            hasError: false,
        },
        reducers:{},
        extraReducers: (builder) => {
            builder
                .addCase(loadPokemon.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadPokemon.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadPokemon.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectPokemon = state => state.pokemon;
export const pokemonReducer = pokemonSlice.reducer;