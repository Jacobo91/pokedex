import { useState } from "react";
import { SearchBar } from "../../styles";
import { loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useDispatch } from "react-redux";
import pokeball  from "../../images/pokeball.png";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MyForm } from "../../styles";

export function SearchInput(){

    const [searchTerm, setSearchTerm] = useState([]);

    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchTerm);
        dispatch(loadCurrentPokemons(searchTerm))
    };


    return(
        <MyForm 
            action=""
            onSubmit={handleSubmit}
        >
            <SearchBar
                type="text"
                placeholder="Search..."
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
        </MyForm>
    )
}