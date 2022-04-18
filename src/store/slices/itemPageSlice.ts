import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IItemPageState } from "../../types/itemPage"
import { IItem } from "../../types/models"
import { fetchItem, fetchSimilar } from "../thunks/itemPage"


const initialState: IItemPageState = {
    isLoading: true,
    item: null,
    reviews: [],
    isAdding: false,
    similarItems: []
}


const itemPageSlice = createSlice({
    name: "itemPage",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchItem.fulfilled.type]: (state, action: PayloadAction<IItem>) => {
            state.item = action.payload
            state.reviews = action.payload.reviews
            state.isLoading = false
        },
        [fetchItem.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchItem.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [fetchSimilar.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
            state.similarItems = action.payload
        },
    }
})


export default itemPageSlice.reducer