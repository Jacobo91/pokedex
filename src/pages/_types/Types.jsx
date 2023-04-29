import './types.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { loadTypes, selectTypes } from '../../redux/_types/typesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { 
    PokeballLoaderWrapper,
    ButtonStyled,
    ButtonsWrapper,
    PokemonCardWrapper,
    PokemonCard,
    CardTitles,
    PWrapper } from '../../styles';
import { PokeballLoader } from '../../components/pokeballLoader/PokeballLoader';
import { backgroundByType } from '../../backgroundByTypes';

export function Types(){

    const [ currentType, setCurrentType ] = useState("");

    const { data, isLoading, hasError } = useSelector(selectTypes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTypes());
    }, []);

    return(
        <section>
            {
                isLoading ? 
                (<PokeballLoaderWrapper>
                    <PokeballLoader />
                </PokeballLoaderWrapper>)

                    : hasError ? (<section>error</section>)
                    
                    : data && 
                        (
                            <section>
                                <section>
                                    <ButtonsWrapper>
                                        {
                                            data.map(type => (
                                                    <ButtonStyled 
                                                        key={type.id}
                                                        value={type.name}
                                                        onClick={(e) => setCurrentType(e.target.value)}
                                                    >
                                                        {type.name}
                                                    </ButtonStyled>
                                            ))
                                        }
                                    </ButtonsWrapper>
                                </section>
                                <section>
                                        {
                                            data.filter(type => type.name === currentType)
                                                .map(filteredType => (
                                                    <PokemonCardWrapper key={filteredType.id}>
                                                        <PokemonCard>
                                                        
                                                            <CardTitles
                                                                style={{
                                                                    backgroundColor: backgroundByType[filteredType.name],
                                                                    borderRadius: "20px",
                                                                    margin: "1.2rem",
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {filteredType.name.toUpperCase()}
                                                            </CardTitles>

                                                            <section>
                                                                <h2
                                                                    css={css`
                                                                        text-decoration: underline;
                                                                    `}
                                                                >
                                                                    Damage Relations
                                                                </h2>
                                                                <article>
                                                                    <CardTitles>Double damage from:</CardTitles> {
                                                                        filteredType.damage_relations.double_damage_from.length === 0 ? "N/A" :
                                                                            filteredType.damage_relations.double_damage_from.map(item => 
                                                                                (<PWrapper
                                                                                    style={{
                                                                                        backgroundColor: backgroundByType[item.name],
                                                                                        padding: "5px 15px",
                                                                                        borderRadius: "20px",
                                                                                        color: "white",
                                                                                        textTransform: "uppercase",
                                                                                    }}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                    }
                                                                    <CardTitles>Double damage to:</CardTitles>
                                                                    {
                                                                        filteredType.damage_relations.double_damage_to.length === 0 ? "N/A" :
                                                                        filteredType.damage_relations.double_damage_to.map(item => 
                                                                            (<PWrapper
                                                                                style={{
                                                                                    backgroundColor: backgroundByType[item.name],
                                                                                    padding: "5px 15px",
                                                                                    borderRadius: "20px",
                                                                                    color: "white",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </PWrapper>))
                                                                    }
                                                                    <CardTitles>Half damage from:</CardTitles>
                                                                    {
                                                                        filteredType.damage_relations.half_damage_from.length === 0 ? "N/A" :
                                                                        filteredType.damage_relations.half_damage_from.map(item => 
                                                                            (<PWrapper
                                                                                style={{
                                                                                    backgroundColor: backgroundByType[item.name],
                                                                                    padding: "5px 15px",
                                                                                    borderRadius: "20px",
                                                                                    color: "white",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </PWrapper>))
                                                                    }
                                                                    <CardTitles>Half damage to:</CardTitles>
                                                                    {
                                                                        filteredType.damage_relations.half_damage_to.length === 0 ? "N/A" :
                                                                        filteredType.damage_relations.half_damage_to.map(item => 
                                                                            (<PWrapper
                                                                                style={{
                                                                                    backgroundColor: backgroundByType[item.name],
                                                                                    padding: "5px 15px",
                                                                                    borderRadius: "20px",
                                                                                    color: "white",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </PWrapper>))
                                                                    }
                                                                    <CardTitles>No damage from:</CardTitles>
                                                                    {
                                                                        filteredType.damage_relations.no_damage_from.length === 0 ? "N/A" :
                                                                        filteredType.damage_relations.no_damage_from.map(item => 
                                                                            (<PWrapper
                                                                                style={{
                                                                                    backgroundColor: backgroundByType[item.name],
                                                                                    padding: "5px 15px",
                                                                                    borderRadius: "20px",
                                                                                    color: "white",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </PWrapper>))
                                                                    }
                                                                    <CardTitles>No damage to:</CardTitles>
                                                                    {
                                                                        filteredType.damage_relations.no_damage_to.length === 0 ? "N/A" :
                                                                        filteredType.damage_relations.no_damage_to.map(item => 
                                                                            (<PWrapper
                                                                                style={{
                                                                                    backgroundColor: backgroundByType[item.name],
                                                                                    padding: "5px 15px",
                                                                                    borderRadius: "20px",
                                                                                    color: "white",
                                                                                    textTransform: "uppercase",
                                                                                }}
                                                                            >
                                                                                {item.name}
                                                                            </PWrapper>))
                                                                    }
                                                                </article>
                                                            </section>
                                                        </PokemonCard>
                                                    </PokemonCardWrapper>
                                                ))
                                        }
                                </section>
                            </section>
                        )
            }
        </section>
    )
}