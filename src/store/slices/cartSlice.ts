import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "../../types/cart";
import { ICartItem } from "../../types/models";
import { addCartItem, decrQuan, deleteCartItem, fetchCart, incrQuan } from "../thunks/cart";

const getTotalPrice = (arr: ICartItem[]) => arr.reduce((prev, obj) => obj.item.price * obj.quan + prev, 0)



const initialState: ICartState = {
    isAdding: false,
    isLoading: true,
    inProgress: false,
    items: [],
    totalCount: 0,
    totalPrice: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCart.fulfilled.type]: (state, action: PayloadAction<ICartItem[]>) => {
            state.items = action.payload
            state.totalCount = action.payload.reduce((prev, obj) => obj.quan + prev, 0)
            state.totalPrice = getTotalPrice(action.payload)
            state.isLoading = false
        },
        [fetchCart.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCart.rejected.type]: (state) => {
            state.isLoading = false
        },


        [addCartItem.fulfilled.type]: (state, action: PayloadAction<ICartItem>) => {
            state.totalCount += 1
            state.isAdding = false
        },
        [addCartItem.pending.type]: (state) => {
            state.isAdding = true
        },
        [addCartItem.rejected.type]: (state) => {
            state.isAdding = false
        },



        [deleteCartItem.fulfilled.type]: (state, action: PayloadAction<ICartItem>) => {
            state.items = state.items.filter(i => i._id !== action.payload._id)
            state.totalCount -= action.payload.quan
            state.totalPrice -= action.payload.item.price * action.payload.quan
            state.inProgress = false
        },
        [deleteCartItem.pending.type]: (state) => {
            state.inProgress = true
        },
        [deleteCartItem.rejected.type]: (state) => {
            state.inProgress = false
        },


        [incrQuan.fulfilled.type]: (state, action: PayloadAction<ICartItem>) => {
            const item = state.items.find(i => i._id === action.payload._id)
            if (item) {
                item.quan += 1
                state.totalCount += 1
                state.totalPrice += action.payload.item.price
                state.inProgress = false
            }
        },
        [incrQuan.pending.type]: (state, action) => {
            state.inProgress = true
        },
        [incrQuan.rejected.type]: (state, action) => {
            state.inProgress = false
        },


        [decrQuan.fulfilled.type]: (state, action: PayloadAction<ICartItem>) => {
            const item = state.items.find(i => i._id === action.payload._id)
            if (item) {
                item.quan -= 1
                state.totalCount -= 1
                state.totalPrice -= action.payload.item.price
                state.inProgress = false
            }
        },
        [decrQuan.pending.type]: (state, action) => {
            state.inProgress = true
        },
        [decrQuan.rejected.type]: (state, action) => {
            state.inProgress = false
        },
    }
})


export default cartSlice.reducer