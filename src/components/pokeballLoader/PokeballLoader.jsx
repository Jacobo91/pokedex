import "./pokeballLoader.css";


export function PokeballLoader(){
    return(
        <div className="pokeball-loader">
            <div className="pokeball-loader__top"></div>
            <div className="pokeball-loader__bottom"></div>
            <div className="pokeball-loader__stripe"></div>
            <div className="pokeball-loader__inner">
                <div className="pokeball-loader__button"></div>
                <div className="pokeball-loader__button"></div>
                <div className="pokeball-loader__light"></div>
            </div>
        </div>
    )
}