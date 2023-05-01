import { useParams } from "react-router-dom";
import "./pokemon_data.css";
import { loadPokemon, selectPokemon } from '../../redux/pokemon/pokemonSlice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { backgroundByType } from '../../backgroundByTypes';
import { colorByType } from "../../colorByTypes";
import { statsObj } from "../../statsObject";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PokeballLoader } from "../pokeballLoader/PokeballLoader";
import { PokemonCard,
    PokemonCardWrapper } from "../../styles";

export function PokemonData(){
    const {pokemon_data} = useParams();
    const dispatch = useDispatch();
    const {data, isLoading, hasError} = useSelector(selectPokemon);
    const name = pokemon_data && pokemon_data;
    useEffect(() => {
        dispatch(loadPokemon(name))
    }, [])

    
    
    const typeColor = {
        backgroundColor: data.pokemon ? colorByType[data.pokemon.types[0].type.name] : "#f2f2f2",
        display: "inline-block",
        color: "white",
        padding: "5px 30px",
        fontSize: "0.9rem",
        borderRadius: "20px",
    };

    const backgroundColor = {
        backgroundColor: data.pokemon ? backgroundByType[data.pokemon.types[0].type.name] : "#f2f2f2",
        borderRadius: "50%",
        margin: "1.2rem",
    };

    if(hasError){
        return <p>Error</p>
    }

    return(
        <section>
            {
                isLoading 
                ? 
                <div css={css`
                    display: flex; 
                    justify-content: center; 
                    height: 100vh; 
                    align-items: center;  
                `}>
                    <PokeballLoader/>
                </div> 
                :
                <PokemonCardWrapper>
                <PokemonCard>
                    {   
                        data.pokemon  && (
                            <section key={data.pokemon.id} >
            
                            <img 
                            src={data.pokemon.sprites.front_default} 
                            alt={data.pokemon.name} 
                            style={backgroundColor}
                            />
                            
                            <p>{`#${data.pokemon.id}`}</p>
            
                            <article className="pokemon-title">
                                <h1>{data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1)}</h1>
                                <p
                                    style={typeColor}
                                >
                                    {data.pokemon.types[0].type.name.toUpperCase()}
                                </p>
                            </article>
            
                            <article className="stats-wrapper" >
                                <h3 className="description-titles">Abilities</h3>
                                <article className="abilities">
                                    {
                                        data.pokemon.abilities.map(ability => (
                                            <article className="abilities" key={ability.ability.name}>
                                                <p className="ability">{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                                            </article>
                                        ))
                                    }
                                </article>
                            </article>
            
                            <article className="stats-wrapper">
                                <h3 className="description-titles">
                                    Stats
                                </h3>
            
                                {
                                    data.pokemon.stats.map(stat => (
                                        <article className="stat" key={stat.stat.name}>
                                            <p  
                                                style={{width: "20%" , textAlign: "left"}}
                                            >
                                                {statsObj[stat.stat.name]}
                                            </p>
                                            <p>{stat.base_stat}</p>
                                            <div className="loader-wrapper">
                                                <div style={{
                                                    backgroundColor: data.pokemon ? backgroundByType[data.pokemon.types[0].type.name] : "#f2f2f2",
                                                    height: "8px",
                                                    borderRadius: "10px",
                                                    width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%`,
                                }}>             </div>
                                            </div>
                                        </article>
                                    ))
                                }
            
                            </article>
                            <h5>Evolution Chain</h5>
                            <article css={css`display: flex; justify-content: space-around; padding: 20px`}>
                            
                                {
                                    data.currentEvolutions.length === 0 ? "This pokemons has no evolutions" : 
                                        (data.currentEvolutions.map(pokemon => (
                                            
                                                <figure key={pokemon.id}>
                                                    <img src={pokemon.sprites.front_default} />
                                                    <figcaption>{pokemon.name}</figcaption>
                                                </figure>
                                            
                                        )))
                                }
                            </article>
                            </section>
                        )
                    }
                        
                    </PokemonCard>
            </PokemonCardWrapper>
            }
        </section>
    )
}



/* 

first evolution name 
evolutionsData.chain.evolves_to[0].species.name 

second evolution second
evolutionsData.chain.evolves_to[0].evolves_to[0].species.name  

*/