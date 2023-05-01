import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadItems = createAsyncThunk(
    "items/loadItems",
    async(item) => {
        try{
            if (item){
                
                const itemResponse = await fetch(`https://pokeapi.co/api/v2/item/${item}`);
                const itemData = await itemResponse.json();
                return itemData
            } else {
                const allItems = [];

                const itemsListResponse = await fetch(`https://pokeapi.co/api/v2/item/?limit=80`);
                const itemsListData = await itemsListResponse.json();
                const itemsListURLs = itemsListData.results.map(item => item.url);

                for (let url of itemsListURLs){
                    const response = await fetch(url);
                    const data = await response.json();
                    allItems.push(data)
                }
                return allItems;
            }
        }
        catch(error){
            throw new Error(error);
        }
    }
);

const itemsSlice = createSlice(
    {
        name: "items",
        initialState: {
            data: [],
            isLoading: false,
            hasError: false,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(loadItems.pending, (state) => {
                    state.isLoading = true;
                    state.hasError = false;
                })
                .addCase(loadItems.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.isLoading = false;
                    state.hasError = false;
                })
                .addCase(loadItems.rejected, (state) => {
                    state.isLoading = false;
                    state.hasError = true;
                })
        }
    }
);

export const selectItems = state => state.items;
export const itemsReducer = itemsSlice.reducer;