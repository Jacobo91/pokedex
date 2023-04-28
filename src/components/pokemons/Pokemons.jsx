import "./pokemons.css"
import { useDispatch, useSelector } from 'react-redux';
import './pokemons.css';
import { selectCurrentGeneration, loadCurrentGeneration } from '../../redux/currentGeneration/currentGenerationSlice';
import { useEffect } from 'react';
import { Card } from '../card/Card';
import { selectPokemon } from "../../redux/pokemon/pokemonSlice";

export function Pokemons({ url }){

    const currentGeneration = useSelector(selectCurrentGeneration);
    const searchResult = useSelector(selectPokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentGeneration(url))
    }, [url]);

    const pokemonNames = currentGeneration.generation.length === 0 ? [] : currentGeneration.generation.pokemon_species.slice(0, 9).map(pokemon => pokemon.name);
    
    return(
        <section>
            {
                currentGeneration.generation.length === 0 ? "Loading" :
                <header>
                    <h2>{currentGeneration.generation.name.toUpperCase()}</h2>
                    <h3>Main Region: {currentGeneration.generation.main_region.name}</h3>
                </header>
            }
            <section>
                <Card pokemonNames={pokemonNames} />
                
            </section>
        </section>
    )
};

