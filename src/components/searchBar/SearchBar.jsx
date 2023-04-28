import { useState } from "react";
import { SearchBar } from "../../styles";
import { loadCurrentPokemons } from "../../redux/currentPokemons/currentPokemonsSlice";
import { useDispatch } from "react-redux";

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
            action=""
            onSubmit={handleSubmit}
        >
            <SearchBar
                type="text"
                placeholder="Search pokemon by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm([e.target.value])}
            />
        </form>
    )
}