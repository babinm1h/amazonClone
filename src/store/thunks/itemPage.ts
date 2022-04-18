import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";
import { ItemPageActionTypes } from "../../types/itemPage";



export const fetchItem = createAsyncThunk(ItemPageActionTypes.fetch_item, async (id: string, thunk) => {
    try {
        const data = await ItemsService.fetchOne(id)
        return data

    } catch (err: any) {
        return thunk.rejectWithValue(err.response?.data.message)
    }
})


export const fetchSimilar = createAsyncThunk(ItemPageActionTypes.fetch_similar, async (categ: string, thunk) => {
    try {
        const data = await ItemsService.fetchSimilar(categ)
        return data

    } catch (err: any) {
        return thunk.rejectWithValue(err.response?.data.message)
    }
})