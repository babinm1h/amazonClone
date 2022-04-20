import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../types/models";
import { IOrderState } from "../../types/orders";
import { fetchOrders, removeOrder } from "../thunks/orders";


const initialState: IOrderState = {
    isLoading: true,
    items: [],
    isRemoving: false
}


const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrders.fulfilled.type]: (state, action: PayloadAction<IOrder[]>) => {
            state.items = action.payload
            state.isLoading = false
        },
        [fetchOrders.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchOrders.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [removeOrder.fulfilled.type]: (state, action: PayloadAction<IOrder>) => {
            state.items = state.items.filter(i => i._id !== action.payload._id)
            state.isRemoving = false
        },
        [removeOrder.pending.type]: (state, action) => {
            state.isRemoving = true
        },
        [removeOrder.rejected.type]: (state, action) => {
            state.isRemoving = false
        },
    }
})


export default ordersSlice.reducer