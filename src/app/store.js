import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { generationsURLsReducer } from '../redux/generations/generationsURLsSlice';
import { currentGenerationReducer } from '../redux/currentGeneration/currentGenerationSlice';
import { currentPokemonsReducer } from '../redux/currentPokemons/currentPokemonsSlice';
import { pokemonReducer } from '../redux/pokemon/pokemonSlice';
import { currentSpeciesReducer } from '../redux/currentSpeciesUrl/currentSpeciesSlice';

const middleware = getDefaultMiddleware(
    {
        serializableCheck: false,
    }
);


export const store = configureStore(
    {
        reducer:{
            generationsURLs: generationsURLsReducer,
            currentGeneration: currentGenerationReducer,
            currentPokemons: currentPokemonsReducer,
            pokemon: pokemonReducer,
            currentSpecies: currentSpeciesReducer,
        },
        middleware,
    }
);