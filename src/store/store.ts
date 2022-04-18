import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import itemPageSlice from "./slices/itemPageSlice";
import itemsSlice from "./slices/itemsSlice";



const rootReducer = combineReducers({
    auth: authSlice,
    items: itemsSlice,
    itemPage: itemPageSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>