import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IItemsState } from "../../types/items"
import { IBrand, IItem } from "../../types/models"
import { fetchBrands, fetchItems } from "../thunks/items"


const initialState: IItemsState = {
    itemsLoading: true,
    items: [],
    brands: [],
    brandsLoading: true,
    activeBrand: null,
    maxPrice: 9999999,
    activeSort: null
}


const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setActiveBrand(state, action:PayloadAction<string|null>) {
            state.activeBrand = action.payload
        },
        setMaxPrice(state, action: PayloadAction<number>) {
            state.maxPrice = Number(action.payload)
        },
        setActiveSort(state, action: PayloadAction<string | null>) {
            state.activeSort = action.payload
        }
    },
    extraReducers: {
        [fetchItems.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload
            state.itemsLoading = false
        },
        [fetchItems.pending.type]: (state) => {
            state.itemsLoading = true
        },
        [fetchItems.rejected.type]: (state) => {
            state.itemsLoading = false
        },



        [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
            state.brands = action.payload
            state.brandsLoading = false
        },
        [fetchBrands.pending.type]: (state, action) => {
            state.brandsLoading = true
        },
        [fetchBrands.rejected.type]: (state, action) => {
            state.brandsLoading = false
        },


    }
})


export default itemsSlice.reducer
export const { setActiveBrand, setMaxPrice, setActiveSort } = itemsSlice.actions