import { useDispatch, useSelector } from 'react-redux';
import './pokedex.css';
import { selectGenerationsURLs,
        loadGenerationsURLs } from '../../redux/generations/generationsURLsSlice';
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Pokemons } from '../../components/pokemons/Pokemons';
import { SearchInput } from '../../components/searchBar/SearchBar';


export function Pokedex(){

    const [url, setURL] = useState("");

    const generations = useSelector(selectGenerationsURLs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGenerationsURLs())
    }, [url]);

    

    return(
        <section>
            <SearchInput/>
            <ul
                css={css`
                    display: flex;
                    gap: 10px;
                    overflow-x: scroll;
                    padding: 5px;
                    @media only screen and (min-width: 1192px){
                        justify-content: center
                    }
                `}
            >
                {
                    generations.isLoading ? "Loading" : 
                        generations.generationsURLs.map(generation => (
                            <button                              
                                key={generation.name}
                                css={css`
                                background-color: ;
                                color: black;
                                border: none;
                                padding: 10px 20px;
                                font-size: 12px;
                                border-radius: 5px;
                                text-transform: uppercase;
                                box-shadow: 0 3px 10px rgba(0,0,0,0.3);
                                transition: all 0.3s ease-in-out;
                                cursor: pointer;
                                &:hover {
                                    background-color: #6b6b6b;
                                    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
                                    color: white;
                                }`
                            }
                                value={generation.url}
                                onClick={(e) => {
                                    setURL(e.target.value);
                                }}
                            >
                                {generation.name.toUpperCase()}
                            </button>
                        ))
                }
            </ul>
            <Pokemons url={url}/>
        </section>
    )
}