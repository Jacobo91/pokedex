/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux"
import { loadLocations, selectLocations } from "../../redux/locations/locationsSlice"
import { useEffect, useState } from "react";
import { MyForm, getButtonStyle, SearchBar } from "../../styles";
import { PokeballLoader } from "../../components/pokeballLoader/PokeballLoader";
import { NavLink } from 'react-router-dom';
import  pokeball  from "../../images/pokeball.png";

export function Locations(){

    const [area, setArea] = useState("");

    const { data, isLoading, hasError } = useSelector(selectLocations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadLocations())
    }, []);

    function hadleSubmit(e){
        e.preventDefault();
        const term = area.toLowerCase().replace(" ", "-")+"-area";
        console.log(term);
        dispatch(loadLocations(term));
    }

    return(
        <section>
            <MyForm
                onSubmit={hadleSubmit}
            >
                <SearchBar
                    placeholder="Search by location..."
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
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
            <section>
                {
                    isLoading ? (
                        <div
                        css={css`
                            display: flex; 
                            justify-content: center; 
                            height: 100vh; 
                            align-items: center;  
                            `}
                        >
                            <PokeballLoader/>
                        </div>
                    )
                        : hasError ? (<p>{hasError}</p>)
                        : data && data.length > 0 ? (
                            <section css={css` display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); padding: 10px `} >
                                {
                                    data.map(location => 
                                        <NavLink
                                            to={`/Locations/${location.name}`}
                                            key={location.id}
                                            css={getButtonStyle()}
                                        >
                                            {location.names[0].name}
                                        </NavLink>
                                        )
                                }
                            </section>
                        ) : ""
                }
            </section>
        </section>
    )
}
