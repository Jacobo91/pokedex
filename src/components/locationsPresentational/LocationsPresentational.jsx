/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { selectLocations, loadLocations } from "../../redux/locations/locationsSlice";
import { useEffect } from "react";
import { PokemonCardVariation, PokemonCardWrapper } from "../../styles";
import { PokeballLoader } from "../pokeballLoader/PokeballLoader";



export function LocationsPresentational(){

    const { area } = useParams();
    const { data, isLoading, hasError } = useSelector(selectLocations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLocations(area))
    }, [])

    return(
        <section>
            
            {
                isLoading ? (
                <div
                css={css`
                    display: flex; 
                    justify-content: center; 
                    height: 100vh; 
                    align-items: center;  
                `}
                >
                    <PokeballLoader/>
                </div>)
                : hasError ? (<p>Error</p>)
                : data && (
                    <PokemonCardWrapper>
                        <PokemonCardVariation>
                            <h2>
                                {data[0].names[0].name}
                            </h2>
                        {
                            data.length > 0 ? data[0].pokemons.map(pokemon => 
                                <article>
                                    <img src={pokemon.sprites.front_default} alt={pokemon.order}/>
                                    <p>{pokemon.name}</p>
                                </article>
                                ) : "no data available"
                        }
                        </PokemonCardVariation>
                    </PokemonCardWrapper>
                )
            }
        </section>
    )
}