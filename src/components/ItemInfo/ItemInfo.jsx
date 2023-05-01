/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { loadItems, selectItems } from "../../redux/items/itemsSlice";
import { useEffect } from "react";
import { ItemsImage, ItemCard, PokeballLoaderWrapper } from "../../styles";
import { PokeballLoader } from "../pokeballLoader/PokeballLoader";
import { PokemonCardWrapper } from "../../styles";



export function ItemInfo(){

    const {item} = useParams();
    const { data, isLoading, hasError } = useSelector(selectItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems(item))
    }, []);

    return(
        <PokemonCardWrapper
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            `}
        >
            {   isLoading ? (<PokeballLoaderWrapper><PokeballLoader/></PokeballLoaderWrapper>)
                : hasError ? (<p>Data cant be fetched</p>) :
                data && (
                    <ItemCard>
                        <ItemsImage src={data.sprites ? data.sprites.default : ""} alt={data.name} />
                        <h4
                            css={css` padding: 10px 0px `}
                        >
                            {data.name}
                        </h4>
                        {
                            data.effect_entries && (<p>{data.effect_entries[0].effect}</p>)
                        }
                    </ItemCard>
                )
            }
        </PokemonCardWrapper>
    )
}