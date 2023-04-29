import { useState } from "react";
import { SearchBar } from "../../styles";
import { loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useDispatch } from "react-redux";
import pokeball  from "../../images/pokeball.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function SearchInput(){

    const [searchTerm, setSearchTerm] = useState([]);

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchTerm);
        dispatch(loadCurrentPokemons(searchTerm))
    };


    return(
        <form 
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                background: #f2f2f2;background: linear-gradient(166deg, rgba(239,234,241,1) 5%, rgba(164,163,164,1) 80%);
            `}
            action=""
            onSubmit={handleSubmit}
        >
            <SearchBar
                type="text"
                placeholder="Search pokemon by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm([e.target.value.toLowerCase()])}
            />
            <img 
                src={pokeball} 
                alt="" 
                css={css`
                    width: 30px;
                    position: absolute;
                    right: 0;
                    margin: 0 20px;
                `}
            />
        </form>
    )
}