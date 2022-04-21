import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";
import { ItemsActionTypes } from "../../types/items";


interface IFetchItemsPayload {
    category?: string,
    brand?: string,
    max?: number,
    activeSort?: string
    search?: string
}


export const fetchItems = createAsyncThunk(ItemsActionTypes.fetch_items,
    async (payload: IFetchItemsPayload, thunk) => {
        try {
            const data = await ItemsService.fetchItems(payload.category, payload.brand, payload.max, payload.activeSort, payload.search)
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })


export const fetchBrands = createAsyncThunk(ItemsActionTypes.fetch_brands,
    async (_, thunk) => {
        try {
            const data = await ItemsService.fetchBrands()
            return data

        } catch (err) {
            return thunk.rejectWithValue(err)
        }
    })