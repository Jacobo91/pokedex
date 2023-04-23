import { useDispatch, useSelector } from 'react-redux';
import './pokedex.css';
import { selectGenerationsURLs,
        loadGenerationsURLs } from '../../redux/generations/generationsURLsSlice';
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Pokemons } from '../../components/pokemons/Pokemons';

export function Pokedex(){

    const [url, setURL] = useState("https://pokeapi.co/api/v2/generation/1/");

    const generations = useSelector(selectGenerationsURLs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGenerationsURLs())
    }, []);

    return(
        <section>
            <ul
                css={css`
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    background-color: #f2f2f2;
                    padding: 20px;
                `}
            >
                {
                    generations.isLoading ? "Loading" : 
                        generations.generationsURLs.map(generation => (
                            <button                              
                                key={generation.name}
                                css={css`
                                    text-decoration: none;
                                    color: black;
                                    padding: 10px 20px;
                                    border: 1px solid black;
                                    border-radius: 20px;
                                    cursor: pointer;
                                    font-weight: bold;
                                    &:hover {
                                        background-color: #C12027;
                                        color: white;
                                    };
                                `}
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