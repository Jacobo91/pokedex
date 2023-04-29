import "./pokeballLoader.css";


export function PokeballLoader(){
    return(
        <div class="pokeball-loader">
            <div class="pokeball-loader__top"></div>
            <div class="pokeball-loader__bottom"></div>
            <div class="pokeball-loader__stripe"></div>
            <div class="pokeball-loader__inner">
                <div class="pokeball-loader__button"></div>
                <div class="pokeball-loader__button"></div>
                <div class="pokeball-loader__light"></div>
            </div>
        </div>
    )
}