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
    PWrapper,
    getWrapperStyles,
    InfoP } from '../../styles';
import { PokeballLoader } from '../../components/pokeballLoader/PokeballLoader';
import { backgroundByType } from '../../backgroundByTypes';
import pokemonLogo from '../../images/pokemon_logo.png';

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
                                <section
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
                                        {
                                            !currentType ? (
                                                <section 
                                                    css={css`
                                                        height: 100vh;
                                                        display: grid;
                                                        place-items: center;
                                                    `}
                                                >
                                                    <img 
                                                        src={pokemonLogo} 
                                                        alt="pokemon logo"
                                                        css={css`
                                                            width: 18rem;
                                                        `}
                                                    />
                                                    <InfoP>
                                                        <i className="fa-solid fa-info"></i>
                                                        <p>Please select a type from the top menu</p>
                                                    </InfoP>
                                                </section>
                                            )
                                                :
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
                                                                                    css={getWrapperStyles(item.name)}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                        }
                                                                        <CardTitles>Double damage to:</CardTitles>
                                                                        {
                                                                            filteredType.damage_relations.double_damage_to.length === 0 ? "N/A" :
                                                                                filteredType.damage_relations.double_damage_to.map(item =>
                                                                                (<PWrapper
                                                                                    css={getWrapperStyles(item.name)}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                        }
                                                                        <CardTitles>Half damage from:</CardTitles>
                                                                        {
                                                                            filteredType.damage_relations.half_damage_from.length === 0 ? "N/A" :
                                                                                filteredType.damage_relations.half_damage_from.map(item =>
                                                                                (<PWrapper
                                                                                    css={getWrapperStyles(item.name)}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                        }
                                                                        <CardTitles>Half damage to:</CardTitles>
                                                                        {
                                                                            filteredType.damage_relations.half_damage_to.length === 0 ? "N/A" :
                                                                                filteredType.damage_relations.half_damage_to.map(item =>
                                                                                (<PWrapper
                                                                                    css={getWrapperStyles(item.name)}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                        }
                                                                        <CardTitles>No damage from:</CardTitles>
                                                                        {
                                                                            filteredType.damage_relations.no_damage_from.length === 0 ? "N/A" :
                                                                                filteredType.damage_relations.no_damage_from.map(item =>
                                                                                (<PWrapper
                                                                                    css={getWrapperStyles(item.name)}
                                                                                >
                                                                                    {item.name}
                                                                                </PWrapper>))
                                                                        }
                                                                        <CardTitles>No damage to:</CardTitles>
                                                                        {
                                                                            filteredType.damage_relations.no_damage_to.length === 0 ? "N/A" :
                                                                                filteredType.damage_relations.no_damage_to.map(item =>
                                                                                (<PWrapper
                                                                                    css={getWrapperStyles(item.name)}
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
                                        }
                            </section>
                        ) 
            }
        </section>
    )
}