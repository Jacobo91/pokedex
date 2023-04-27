import { useDispatch, useSelector } from "react-redux";
import { loadEvolutionUrl, selectEvolutionUrl } from "../../redux/evolutionsUrl/evolutionUrlSlice";
import { useEffect, useState } from "react";
import { loadCurrentEvolutions, selectCurrentEvolutions } from "../../redux/currentEvolutions/currentEvolutionsSlice";

export function Evolutions({ url }){

    const evolutionUrl = useSelector(selectEvolutionUrl);
    const { evolutions, isLoading, hasError } = useSelector(selectCurrentEvolutions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEvolutionUrl(url));
        dispatch(loadCurrentEvolutions(evolutionUrl.url.url))
    }, [evolutionUrl.url.url]);


    if(isLoading){
        return  <p>Loading...</p>
    }

    if(hasError){
        return <p>An error has ocurred while fetching the data</p>
    }

    
    return(
        <div>
            {
                evolutions.chain && evolutions.chain.evolves_to && evolutions.chain.evolves_to.length > 0 ? (
                
                        
                        <article>
                            <p>{evolutions.chain.evolves_to[0].species.name}</p>
                            <p>{evolutions.chain.evolves_to[0].evolves_to[0].species.name}</p>
                        </article>
                    
                
                ) : "No evolution found"
            }
        </div>
    )
}

