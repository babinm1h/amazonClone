import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersService } from "../../API/OrdersService";
import { OrdersActionTypes } from "../../types/orders";


export const fetchOrders = createAsyncThunk(OrdersActionTypes.fetch_orders, async (_, thunk) => {
    try {
        const data = await OrdersService.fetchOrders()
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})



export const removeOrder = createAsyncThunk(OrdersActionTypes.remove_order,
    async (id: string, thunk) => {
        try {
            const data = await OrdersService.delete(id)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })