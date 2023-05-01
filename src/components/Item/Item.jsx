/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from "react-router-dom";
import { ItemsImage } from '../../styles';



export function Item({ item }){
    return(
        <NavLink
            to={`/Items/${item.name}`}
            css={css`
                text-decoration: none;
                color: black;
                display: grid;
                place-items: center;
            `}
        >
            <ItemsImage 
                src={item.sprites ? item.sprites.default: ""} alt={item.name}
            />
            <p
                css={css`
                    font-size: 0.9rem;
                `}
            >
                {item.name}
            </p>
        </NavLink>
    )
}