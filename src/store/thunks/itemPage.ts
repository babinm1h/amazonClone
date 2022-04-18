import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";
import { ReviewsService } from "../../API/ReviewsService";
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


export const createReview = createAsyncThunk(ItemPageActionTypes.create_review,
    async (payload: { id: string, text: string, rate: number }, thunk) => {
        try {
            const data = await ReviewsService.create(payload.id, payload.text, payload.rate)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })