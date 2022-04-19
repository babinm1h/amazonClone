import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../API/CartService";
import { CartActionTypes } from "../../types/cart";


export const fetchCart = createAsyncThunk(CartActionTypes.fetch_cart, async (_, thunk) => {
    try {
        const data = await CartService.fetchCart()
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})



export const addCartItem = createAsyncThunk(CartActionTypes.add_item, async (id: string, thunk) => {
    try {
        const data = await CartService.addItem(id)
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})


export const deleteCartItem = createAsyncThunk(CartActionTypes.delete_item, async (id: string, thunk) => {
    try {
        const data = await CartService.deleteItem(id)
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})


export const incrQuan = createAsyncThunk(CartActionTypes.incr_quan, async (id: string, thunk) => {
    try {
        const data = await CartService.incrQuan(id)
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})


export const decrQuan = createAsyncThunk(CartActionTypes.decr_quan, async (id: string, thunk) => {
    try {
        const data = await CartService.decrQuan(id)
        return data

    } catch (err) {
        return thunk.rejectWithValue(err)
    }
})