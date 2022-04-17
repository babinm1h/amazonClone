import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/AuthService";
import { AuthActionTypes } from "../../types/auth";


export const registration = createAsyncThunk(AuthActionTypes.registr,
    async (payload: { email: string, password: string }, thunk) => {
        try {
            const data = await AuthService.registr(payload.email, payload.password)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })



export const login = createAsyncThunk(AuthActionTypes.login,
    async (payload: { email: string, password: string }, thunk) => {
        try {
            const data = await AuthService.login(payload.email, payload.password)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const checkAuth = createAsyncThunk(AuthActionTypes.check,
    async (_, thunk) => {
        try {
            const data = await AuthService.check()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })


export const logout = createAsyncThunk(AuthActionTypes.logout,
    async (_, thunk) => {
        try {
            const data = await AuthService.logout()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })