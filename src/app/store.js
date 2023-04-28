import { configureStore } from '@reduxjs/toolkit';
import { generationsURLsReducer } from '../redux/generations/generationsURLsSlice';
import { currentGenerationReducer } from '../redux/currentGeneration/currentGenerationSlice';
import { currentPokemonsReducer } from '../redux/currentPokemons/currentPokemonsSlice';
import { pokemonReducer } from '../redux/pokemon/pokemonSlice';
import { currentSpeciesReducer } from '../redux/currentSpeciesUrl/currentSpeciesSlice';
import { currentEvolutionNamesReducer } from '../redux/currentEvolutionNames/currentEvolutionNamesSlice';
import { currentEvolutionsReducer } from '../redux/currentEvolutions/currentEvolutions';

export const store = configureStore(
    {
        reducer:{
            generationsURLs: generationsURLsReducer,
            currentGeneration: currentGenerationReducer,
            currentPokemons: currentPokemonsReducer,
            pokemon: pokemonReducer,
            currentSpecies: currentSpeciesReducer,
            currentEvolutionNames:currentEvolutionNamesReducer,
            currentEvolutions: currentEvolutionsReducer,
        }
    }
);