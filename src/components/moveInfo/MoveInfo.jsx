/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ItemCard, CardTitles, PokeballLoaderWrapper, PokemonCardWrapper, MyTd } from '../../styles';
import { PokeballLoader } from '../pokeballLoader/PokeballLoader';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoves, selectMoves } from '../../redux/moves/movesSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function MoveInfo(){

    const { move } = useParams();

    const {data, isLoading, hasError} = useSelector(selectMoves);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadMoves(move));
    }, [move])
    console.log(data)
    return(
        <PokemonCardWrapper>
            {
                isLoading ? (
                    <PokeballLoaderWrapper>
                        <PokeballLoader/>
                    </PokeballLoaderWrapper>
                )
                : hasError ? (<p>An unexpected error happended</p>)
                : data && data.name ?(
                    <ItemCard>
                        <h3 css={css`
                            padding: 10px;
                        `} >
                            {data?.name?.charAt(0).toUpperCase() + data?.name?.slice(1)}
                        </h3>
                        <section>
                            <table css={css`display: inline`}>
                                <thead css={css` text-transform: uppercase`}>
                                    <tr>
                                        <th>acc</th>
                                        <th>pow</th>
                                        <th>pp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <MyTd>{data.accuracy}</MyTd>
                                        <MyTd>{data.power}</MyTd>
                                        <MyTd>{data.pp}</MyTd>
                                    </tr>
                                </tbody>
                            </table>
                            <CardTitles>Effect</CardTitles>
                            <p>{ data.effect_entries.length > 0 ? data.effect_entries[0].effect : ""}</p>
                            <CardTitles>Target</CardTitles>
                            <p>{data.target.name.replace("-", " ")}</p>
                        </section>
                    </ItemCard>
                ) : <p>No data available</p>
            }
        </PokemonCardWrapper>
    )
}