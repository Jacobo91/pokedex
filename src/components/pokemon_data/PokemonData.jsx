import { useParams } from "react-router-dom"
import { selectPokemon, loadPokemon } from "../../redux/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export function PokemonData(){

        const {pokemon_data} = useParams();
        const { data, isLoading, hasError } = useSelector(selectPokemon);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(loadPokemon(pokemon_data))
        }, []);
        
        if(isLoading){
            return  <p>Loading...</p>
        }

        if(hasError){
            return <p>An error has ocurred while fetching the data</p>
        }

        
    
    return(
        <section>

        {
            data  && (
                <section key={data.id} >

                <img src={data.sprites.front_default} alt={data.name} />
                
                <article>
                    <p>{`#${data.id}`}</p>
                    <h1>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
                    <p>
                        {data.types[0].type.name}
                    </p>
                </article>
                
                <article>
                    stats
                </article>
                
                <article>
                    resistance
                </article>
                
                <article>
                    weaknesses
                </article>
                
                <article>
                    abilities
                </article>
                
                <article>
                    characteristics
                </article>
                </section>
            )
        }
            
        </section>
    )
}


/* backgroundColor: data && data.types ? typesColors[data.types[1].type.name] : "white",


                pokemon.data === [] ? "No data" :
                <section key={data.id} >

                <img src={pokemon.data[0].sprites.front_default} alt={data.name} />
                
                <article>
                    <p>{`#${pokemon.data[0].id}`}</p>
                    <h1>{pokemon.data[0].name.charAt(0).toUpperCase() + pokemon.data[0].name.slice(1)}</h1>
                    <p
                        style={styles}
                    >
                        {pokemon.data[0].types[1].type.name}
                    </p>
                </article>
                
                <article>
                    stats
                </article>
                
                <article>
                    resistance
                </article>
                
                <article>
                    weaknesses
                </article>
                
                <article>
                    abilities
                </article>
                
                <article>
                    characteristics
                </article>
                </section>


*/