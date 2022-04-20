import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAuthState } from "../../types/auth"
import { IUser } from "../../types/models"
import { checkAuth, login, logout, registration } from "../thunks/auth"



const initialState: IAuthState = {
    isAuth: false,
    user: null,
    reviews: [],
    isLoading: true,
    registrError: "",
    loginError: '',
}


const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {},
    extraReducers: {
        [registration.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
            state.registrError = ""
            state.reviews = action.payload.reviews
            state.loginError = ""
            state.isLoading = false
        },
        [registration.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [registration.rejected.type]: (state, action) => {
            state.isLoading = false
            state.registrError = action.payload
        },


        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
            state.loginError = ""
            state.registrError = ""
            state.reviews = action.payload.reviews
            state.isLoading = false
        },
        [login.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state, action) => {
            state.loginError = "Wrong email or password"
            state.isLoading = false
        },


        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
            state.loginError = ""
            state.registrError = ""
            state.reviews = action.payload.reviews
            state.isLoading = false
        },
        [checkAuth.pending.type]: (state, action) => {
            state.isLoading = true
        },
        [checkAuth.rejected.type]: (state, action) => {
            state.isLoading = false
        },


        [logout.fulfilled.type]: (state, action) => {
            state.user = null
            state.isAuth = false
            state.reviews = []
            state.loginError = ""
            state.registrError = ""
        },
    }
})


export default authSlice.reducer