import "./pokemon_data.css";
import { useParams } from "react-router-dom"
import { selectPokemon, loadPokemon } from "../../redux/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { colorByType } from "../../colorByTypes";
import { backgroundByType } from '../../backgroundByTypes';
import { statsObj } from "../../statsObject";
import { Evolutions } from "../evolutions/Evolutions";

export function PokemonData(){

        const {pokemon_data} = useParams();
        const { data, isLoading, hasError } = useSelector(selectPokemon);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(loadPokemon(pokemon_data));
        }, []);

        

        const typeColor = {
            backgroundColor: data ? colorByType[data.types[0].type.name] : "#f2f2f2",
            display: "inline-block",
            color: "white",
            padding: "5px 30px",
            fontSize: "0.9rem",
            borderRadius: "20px",
        };

        const backgroundColor = {
            backgroundColor: data ? backgroundByType[data.types[0].type.name] : "#f2f2f2",
            borderRadius: "50%",
            margin: "1.2rem",
        };

        if(isLoading){
            return  <p>Loading...</p>
        }

        if(hasError){
            return <p>An error has ocurred while fetching the data</p>
        }

    
    return(
        <div className="pokemon-card--wrapper" >
        <section className="pokemon-card">

        {
            data  && (
                <section key={data.id} >

                <img 
                src={data.sprites.front_default} 
                alt={data.name} 
                style={backgroundColor}
                />
                
                <p>{`#${data.id}`}</p>

                <article className="pokemon-title">
                    <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
                    <p
                        style={typeColor}
                    >
                        {data.types[0].type.name.toUpperCase()}
                    </p>
                </article>

                <article className="stats-wrapper" >
                    <h3 className="description-titles">Abilities</h3>
                    <article className="abilities">
                        {
                            data.abilities.map(ability => (
                                <article className="abilities">
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
                        data.stats.map(stat => (
                            <article className="stat">
                                <p  
                                    style={{width: "20%" , textAlign: "left"}}
                                >
                                    {statsObj[stat.stat.name]}
                                </p>
                                <p>{stat.base_stat}</p>
                                <div className="loader-wrapper">
                                    <div style={{
                                        backgroundColor: data ? backgroundByType[data.types[0].type.name] : "#f2f2f2",
                                        height: "8px",
                                        borderRadius: "10px",
                                        width: `${stat.base_stat}%`,
                    }}>             </div>
                                </div>
                            </article>
                        ))
                    }

                </article>

                    <Evolutions url={data.species.url} />
                
                </section>
            )
        }
            
        </section>
        </div>
    )
}

/* {data.abilities[0].ability.name}  */

