import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const loadCurrentPokemons = createAsyncThunk(
    'currentPokemons/loadCurrentPokemons',
    async(pokemonNames) => {
        try{
            const filteredPokemonNames = pokemonNames.filter(poke => poke !== "oricorio");
            const pokemonData = [];

            for (const name of filteredPokemonNames){
                
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const data = await response.json();
                pokemonData.push(data)
            }
        
            return pokemonData
            
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentPokemonsSlice = createSlice(
    {
        name: "currentPokemons",
        initialState: {
            pokemons: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadCurrentPokemons.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadCurrentPokemons.fulfilled, (state, action) => {
                    state.pokemons = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadCurrentPokemons.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectCurrentPokemons = state => state.currentPokemons;
export const currentPokemonsReducer = currentPokemonsSlice.reducer;