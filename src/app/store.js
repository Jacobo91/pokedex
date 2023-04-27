import { configureStore } from '@reduxjs/toolkit';
import { generationsURLsReducer } from '../redux/generations/generationsURLsSlice';
import { currentGenerationReducer } from '../redux/currentGeneration/currentGenerationSlice';
import { currentPokemonsReducer } from '../redux/currentPokemons/currentPokemonsSlice';
import { pokemonReducer } from '../redux/pokemon/pokemonSlice';
import { evolutionUrlReducer } from '../redux/evolutionsUrl/evolutionUrlSlice';
import { currentEvolutionsReducer } from '../redux/currentEvolutions/currentEvolutionsSlice';

export const store = configureStore(
    {
        reducer:{
            generationsURLs: generationsURLsReducer,
            currentGeneration: currentGenerationReducer,
            currentPokemons: currentPokemonsReducer,
            pokemon: pokemonReducer,
            evolutionUrl: evolutionUrlReducer,
            currentEvolutions: currentEvolutionsReducer,
        }
    }
);