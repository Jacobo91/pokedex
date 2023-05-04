import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadLocations = createAsyncThunk(
    "locations/loadLocations",
    async(name) => {
        try{
            
            /** const locationName = name.toLowerCase().replace(" ", "-")+"-area"; */
            if(name){
                const byAreaName = [];
                const pokemonsByAreaName = [];
                const locationByname = await fetch(`https://pokeapi.co/api/v2/location-area/${name}/`);
                const data = await locationByname.json();
                const pokemon_encountersURLs = data.pokemon_encounters.map(pokemon => pokemon.pokemon.url);

                for(let pokeUrl of pokemon_encountersURLs){
                    const response = await fetch(pokeUrl);
                    const data = await response.json();
                    pokemonsByAreaName.push(data)
                }
                byAreaName.push({...data, pokemons: pokemonsByAreaName});

                return byAreaName;
            } else {
                const locationsInfo = [];
                const pokemonsInfo = [];
                const allLocations = await fetch("https://pokeapi.co/api/v2/location-area/?limit=50");
                const allLocationsData = await allLocations.json();
                const allLocationsUrls = allLocationsData.results.map(location => location.url);
                
                for (let url of allLocationsUrls){
                    const response = await fetch(url);
                    const data = await response.json();
                    const pokemonsURLs = data.pokemon_encounters.map(pokemon => pokemon.pokemon.url);

                    for(let pokeURL of pokemonsURLs){
                        const pokeResponse = await fetch(pokeURL);
                        const pokeData = await pokeResponse.json();
                        pokemonsInfo.push(pokeData);
                    }

                    locationsInfo.push({...data, pokemons: pokemonsInfo});
                }
                return locationsInfo;
            }
        }
        catch(error){
            throw new Error(error)
        }
    }
);

const locationsSlice = createSlice(
    {
        name: "locations",
        initialState: {
            data: null,
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadLocations.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadLocations.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadLocations.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectLocations = state => state.locations;
export const locationsReducer = locationsSlice.reducer;