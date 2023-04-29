import "./pokemons.css"
import { useDispatch, useSelector } from 'react-redux';
import './pokemons.css';
import { selectCurrentGeneration, loadCurrentGeneration } from '../../redux/currentGeneration/currentGenerationSlice';
import { useEffect } from 'react';
import { Card } from '../card/Card';
import { selectPokemon } from "../../redux/pokemon/pokemonSlice";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"; 

export function Pokemons({ url }){

    const currentGeneration = useSelector(selectCurrentGeneration);
    const searchResult = useSelector(selectPokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentGeneration(url))
    }, [url]);

    const pokemonNames = currentGeneration.generation.length === 0 ? [] : currentGeneration.generation.pokemon_species.slice(0, 19).map(pokemon => pokemon.name);
    
    return(
        <section>
            {
                currentGeneration.generation.length === 0 ? "" :
                <header css={css`
                    text-align: center;
                    padding: 20px;
                `}>
                    <h2>{currentGeneration.generation.name.toUpperCase()}</h2>
                    <h3>Main Region: {currentGeneration.generation.main_region.name}</h3>
                </header>
            }
            <section >
                <Card pokemonNames={pokemonNames} />
            </section>
        </section>
    )
};

