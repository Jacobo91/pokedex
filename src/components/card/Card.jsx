import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPokemons, loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PokeballLoader } from "../pokeballLoader/PokeballLoader";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


export function Card({ pokemonNames }){

    const pokemons = useSelector(selectCurrentPokemons);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentPokemons(pokemonNames))
    }, [pokemonNames])

    if(pokemons.hasError){
        return <p>The data had a problem while being fetched</p>
    }

    return(
        <section>
            {
                pokemons.isLoading ? 
                <div css={css` display: flex; justify-content: center; height: 70vh; align-items: center `}>
                    <PokeballLoader/>
                </div> : 
                <section className="gallery">
                {
                    pokemons.pokemons.length === 0 ? "" :
                        pokemons.pokemons.map(pokemon => (
                            <NavLink
                                to={`/Pokédex/${pokemon.name}`}
                                className="card"
                                key={pokemon.id}
                            >
                                <img
                                    className="pokemon-img"
                                    src={pokemon.sprites.front_default}
                                />
                            </NavLink>
                        ))
                }
            </section>
            }
        </section>
    )
}

