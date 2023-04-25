import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPokemons, loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



export function Card({ pokemonNames }){

    const pokemons = useSelector(selectCurrentPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCurrentPokemons(pokemonNames))
    }, [pokemonNames])
    
    return(
        <section className="gallery">
            {
                pokemons.pokemons.length === 0 ? "Loading..." :
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
    )
}

