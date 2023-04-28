import { useDispatch, useSelector } from "react-redux"
import { loadCurrentEvolutions, selectCurrentEvolutions } from "../../redux/currentEvolutions/currentEvolutions"
import { useEffect } from "react";



export function Evolutions({ names }){

    const { evolutions } = useSelector(selectCurrentEvolutions);
    const dispatch = useDispatch();

    console.log(names)

    useEffect(() => {
        dispatch(loadCurrentEvolutions(names))
    }, [names])

    return(
        <section>
    { 
            
            evolutions.map(evo => (
                <img src={evo.sprites.front_default} alt="" />
            ))
    }
        </section>
    )
}

/*

          { 
            
            evolutions.map(evo => (
                <img src={evo.sprites.front_default} alt="" />
            ))
    }

*/