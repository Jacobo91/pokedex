import './home.css';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";


const navlinks = ["Pokédex", "Types", "Abilities", "Berries", "Items", "Moves", "Locations"];

export function Home(){
    return(
        <main>
            <ul className='main-links-wrapper'>
                {
                    navlinks.map(link => (
                            <NavLink
                                to={`/${link}`}
                                className={link} 
                                key={link}>
                                <h2 className='link-title'>
                                    {link}
                                </h2>
                            </NavLink>
                    ))
                }
            </ul>
        </main>
    )
}