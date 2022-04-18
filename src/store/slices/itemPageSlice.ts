import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IItemPageState } from "../../types/itemPage"
import { IItem, IReview } from "../../types/models"
import { createReview, fetchItem, fetchSimilar } from "../thunks/itemPage"


const initialState: IItemPageState = {
    item: null,
    reviews: [],
    similarItems: [],
    isAddingReview: false,
    isAdding: false,
    isLoading: true,
    rating: 0
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

            const rates = action.payload.reviews.map(i => i.rate)
            state.rating = Math.round(rates.reduce((prev, cur) => prev + cur, 0) / rates.length)
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

        [createReview.fulfilled.type]: (state, action: PayloadAction<IReview>) => {
            state.isAddingReview = true
        }
    }
})


export default itemPageSlice.reducer