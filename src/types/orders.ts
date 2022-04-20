import { IOrder } from "./models";


export interface IOrderState {
    items: IOrder[]
    isLoading: boolean
    isRemoving: boolean
}


export enum OrdersActionTypes {
    fetch_orders = "orders/fetch_orders",
    remove_order = "orders/remove_order",
}