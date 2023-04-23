import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPokemons, loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useEffect } from "react";




export function Card({ pokemonNames }){

    const pokemons = useSelector(selectCurrentPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        pokemonNames.map(name => dispatch(loadCurrentPokemons(name)))
    }, [pokemonNames])

    console.log(pokemons)
    return(
        <div>
            {
                pokemons.pokemons.map(pokemon => (
                    <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
                ))
            }
        </div>
    )
}