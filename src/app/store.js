import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { generationsURLsReducer } from '../redux/generations/generationsURLsSlice';
import { currentGenerationReducer } from '../redux/currentGeneration/currentGenerationSlice';
import { currentPokemonsReducer } from '../redux/currentPokemons/currentPokemonsSlice';
import { pokemonReducer } from '../redux/pokemon/pokemonSlice';
import { currentSpeciesReducer } from '../redux/currentSpeciesUrl/currentSpeciesSlice';
import { typesReducer } from '../redux/_types/typesSlice';
import { itemsReducer } from '../redux/items/itemsSlice';
import { movesReducer } from '../redux/moves/movesSlice';
import { locationsReducer } from '../redux/locations/locationsSlice';

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
            types: typesReducer,
            items: itemsReducer,
            moves: movesReducer,
            locations: locationsReducer,
        },
        middleware,
    }
);