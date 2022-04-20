import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import itemPageSlice from "./slices/itemPageSlice";
import itemsSlice from "./slices/itemsSlice";
import ordersSlice from "./slices/ordersSlice";



const rootReducer = combineReducers({
    auth: authSlice,
    items: itemsSlice,
    itemPage: itemPageSlice,
    cart: cartSlice,
    orders: ordersSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>