import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadMoves = createAsyncThunk(
    "moves/loadMoves",
    async(moveName) => {
        try{
            
            if(moveName){
                const formattedMove = moveName.toLowerCase().replace(" ", "-");
                const move = await fetch(`https://pokeapi.co/api/v2/move/${formattedMove}/`);
                const moveData = await move.json();

                return moveData;
            } else {
                const moves = [];
                const allMoves = await fetch(`https://pokeapi.co/api/v2/move/?limit=60`);
                const allMovesData = await allMoves.json();
                const movesURLs = allMovesData.results.map(move => move.url);

                for (let url of movesURLs){
                    const response = await fetch(url);
                    const data = await response.json();

                    moves.push(data);
                }
                return moves;
            }
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const movesSlice = createSlice(
    {
        name: "moves",
        initialState: {
            data: null,
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadMoves.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadMoves.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                    console.log(action.payload);
                })
                .addCase(loadMoves.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectMoves = state => state.moves;
export const movesReducer = movesSlice.reducer;