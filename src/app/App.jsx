import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Pokedex } from "../pages/pokedex/Pokedex";
import { Types } from "../pages/_types/Types";
import { Items } from '../pages/items/Items';
import { Moves } from '../pages/moves/Moves';
import { Locations } from '../pages/locations/Locations';
import { PokemonData } from "../components/pokemon_data/PokemonData";
import { ItemInfo } from "../components/ItemInfo/ItemInfo";
import { MoveInfo } from "../components/moveInfo/MoveInfo";

export function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/Pokédex" element={<Pokedex/>} />
            <Route path="/Pokédex/:pokemon_data" element={<PokemonData />}/>
            
            
          <Route path="/Types" element={<Types/>} />

          <Route path="/Items" element={<Items/>} />
            <Route path="/Items/:item" element={<ItemInfo/>}/>

          <Route path="/Moves" element={<Moves/>} />
            <Route path="/Moves/:move" element={<MoveInfo/>} />
          
          <Route path="/Locations" element={<Locations/>} />
        </Routes>
    </div>
  );
}

export default App;
