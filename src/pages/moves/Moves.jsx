/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux"
import { loadMoves, selectMoves } from "../../redux/moves/movesSlice"
import { MyForm, PokeballLoaderWrapper, SearchBar, getButtonStyle} from "../../styles";
import pokeball from '../../images/pokeball.png';
import { useEffect, useState } from "react";
import { PokeballLoader } from "../../components/pokeballLoader/PokeballLoader";
import { NavLink } from "react-router-dom";
import { MoveInfo } from "../../components/moveInfo/MoveInfo";

export function Moves(){

    const [ searchTerm, setSearchTerm ] = useState("");

    const { data, isLoading, hasError } = useSelector(selectMoves);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadMoves());
    }, [])
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(loadMoves(searchTerm))
    }
    return(
        <section>
            <MyForm
                onSubmit={handleSubmit}
            >
                <SearchBar
                    placeholder="Search by move..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                {
                    isLoading ? (<PokeballLoaderWrapper><PokeballLoader/></PokeballLoaderWrapper>)
                    : hasError ? (<p>Error</p>)
                    : data && (
                        <section css={css` display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); padding: 10px `}>
                            {
                                data.length > 0 ? 
                                data.map(move => (
                                    <NavLink
                                        key={move.id}
                                        to={`/Moves/${move.name}`}
                                        css={getButtonStyle()}
                                    >
                                        {move.name}
                                    </NavLink>
                                ))
                                : (
                                    <NavLink
                                    to={`/Moves/${data.name}`}
                                    css={getButtonStyle()}
                                >
                                    {data.name}
                                </NavLink>
                                )
                            }
                        </section>
                    )
                }
        </section>
    )
}