import { configureStore } from '@reduxjs/toolkit';
import { generationsURLsReducer } from '../redux/generations/generationsURLsSlice';
import { currentGenerationReducer } from '../redux/currentGeneration/currentGenerationSlice';
import { currentPokemonsReducer } from '../redux/currentPokemons/currentPokemonsSlice';

export const store = configureStore(
    {
        reducer:{
            generationsURLs: generationsURLsReducer,
            currentGeneration: currentGenerationReducer,
            currentPokemons: currentPokemonsReducer,
        }
    }
);