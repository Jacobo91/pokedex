import  styled  from "@emotion/styled";
import { css } from "@emotion/react";
import { backgroundByType } from "./backgroundByTypes";




export const SearchBar = styled.input`
    width: 60%;
    height: 1.6rem;
    text-indent: 5px;
    position: relative;
    border: transparent;
    border-radius: 6px;
`;

export const ButtonStyled = styled.button`
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
`;

export const PokeballLoaderWrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonsWrapper = styled.section`
    display: flex;
    overflow-x: scroll;
    padding:  10px;
`;

export const PokemonCardWrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://st2.depositphotos.com/3213441/12022/v/950/depositphotos_120226446-stock-illustration-pokemon-go-pokeball-seamless-texture.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const PokemonCard = styled.section`
    box-shadow: 5px 5px 10px grey;
    display: grid;
    text-align: center;
    justify-content: center;
    width: 375px;
    background-color: rgba(255,255,255, 0.96);
    border-radius: 10px;
`;

export const CardTitles = styled.h4`
        padding: 10px;
        margin: 10px;
`;

export const PWrapper = styled.p`
    display: inline-block; 
    margin-inline: 5px;
    margin: 5px;
`
export function getWrapperStyles(itemName){
    return css`
        background-color: ${backgroundByType[itemName]};
        padding: 5px 15px;
        border-radius: 20px;
        color: white;
        text-transform: uppercase;
    `;
}

export const InfoP = styled.article`
    box-shadow: 5px 5px 10px grey;
    padding: 20px;
    display: grid;
    place-items: center;
    gap: 20px;
`;

export const MyForm = styled.form`
display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #f2f2f2;background: linear-gradient(166deg, rgba(239,234,241,1) 5%, rgba(164,163,164,1) 80%);
`;

export const ItemsImage = styled.img`
    width: 50px;
`;

export const ItemCard = styled.article`
    box-shadow: 3px 5px 10px grey;
    padding: 20px;
    text-align: center;
    max-width: 330px;
    background-color: rgba(255,255,255, 0.96);
    border-radius: 10px;
`;