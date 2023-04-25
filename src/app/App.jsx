import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Pokedex } from "../pages/pokedex/Pokedex";
import { Types } from "../pages/_types/Types";
import { Abilities } from '../pages/Abilities/Abilities';
import { Berries } from '../pages/berries/Berries';
import { Items } from '../pages/items/Items';
import { Moves } from '../pages/moves/Moves';
import { Locations } from '../pages/locations/Locations';
import { PokemonData } from "../components/pokemon_data/PokemonData";

export function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/Pokédex" element={<Pokedex/>} />
            <Route path="/Pokédex/:pokemon_data" element={<PokemonData />}/>
            
          <Route path="/Types" element={<Types/>} />
          <Route path="/Abilities" element={<Abilities/>} />
          <Route path="/Berries" element={<Berries/>} />
          <Route path="/Items" element={<Items/>} />
          <Route path="/Moves" element={<Moves/>} />
          <Route path="/Locations" element={<Locations/>} />
        </Routes>
    </div>
  );
}

export default App;
