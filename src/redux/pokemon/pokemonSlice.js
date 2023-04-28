import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const loadPokemon = createAsyncThunk(
    "pokemon/loadPokemon",
    async(pokemonName) => {
        try{
            const currentEvolutions = [];
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemon = await response.json();
            const specielUrl = pokemon.species.url;
            const species = await fetch(specielUrl);
            const speciesData = await species.json();
            const evoUrl = speciesData.evolution_chain.url;
            const evolutions = await fetch(evoUrl);
            const evolutionsData = await evolutions.json();
            const currentEvolutionsNames = evolutionsData.chain.evolves_to.length === 0
            ? []
            : evolutionsData.chain.evolves_to[0].evolves_to.length === 0
                ? [evolutionsData.chain.evolves_to[0].species.name]
                : [evolutionsData.chain.evolves_to[0].species.name, evolutionsData.chain.evolves_to[0].evolves_to[0].species.name];
            for (let name of currentEvolutionsNames){
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    const data = await response.json();
                    currentEvolutions.push(data);
                }
                catch(error){
                    throw new Error(error);
                }
            };
            return {pokemon, speciesData, evolutionsData, currentEvolutions};
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
            data: [],
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