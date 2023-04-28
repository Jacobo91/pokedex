import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";

export const loadCurrentEvolutionNames = createAsyncThunk(
    "currentEvolutionNames/loadCurrentEvolutionNames",
    async(evolutionsUrl) => {
        try{
            const response = await fetch(evolutionsUrl);
            const data = await response.json();
            return data;
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const currentEvolutionNamesSlice = createSlice(
    {
        name: "currentEvolutionNames",
        initialState: {
            names: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadCurrentEvolutionNames.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadCurrentEvolutionNames.fulfilled, (state, action) => {
                    state.names = action.payload.chain.evolves_to.length === 0
                    ? []
                    : action.payload.chain.evolves_to[0].evolves_to.length === 0
                        ? [action.payload.chain.evolves_to[0].species.name]
                        : [action.payload.chain.evolves_to[0].species.name, action.payload.chain.evolves_to[0].evolves_to[0].species.name];
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadCurrentEvolutionNames.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectCurrentEvolutionNames = state => state.currentEvolutionNames;
export const currentEvolutionNamesReducer = currentEvolutionNamesSlice.reducer;

/*

[action.payload.chain.evolves_to[0].species.name, action.payload.chain.evolves_to[0].evolves_to[0].species.name]

*/