/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SearchInput } from '../../components/searchBar/SearchBar';
import './items.css';
import { loadItems, selectItems } from '../../redux/items/itemsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { PokeballLoader } from '../../components/pokeballLoader/PokeballLoader';
import { MyForm, PokeballLoaderWrapper, SearchBar } from '../../styles';
import { Item } from '../../components/Item/Item';
import pokeball from "../../images/pokeball.png";

export function Items(){

    const [searchTerm, setSearchTerm] = useState("");

    const { data, isLoading, hasError } = useSelector(selectItems);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadItems())
    }, [])

    function handleSubmit(e){
        e.preventDefault();
        dispatch(loadItems(searchTerm));
    }

    return(
        <section>
            <MyForm
                onSubmit={handleSubmit}
            >
                <SearchBar 
                    type="text" 
                    placeholder='Search by Item'
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
                : hasError ? (<p>An unexpected error ocurred</p>)
                : data && data.length > 0 ? (
                    <section css={css` display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); padding: 10px `} >    
                            {
                                data.map(item => (
                                    <Item item={item} key={item.id}/>
                                ))
                            }
                    </section>
                ) : (
                        <Item item={data} />
                )
            }
        </section>
    )
}