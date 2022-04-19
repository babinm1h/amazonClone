import { ICartItem } from "./models";



export interface ICartState {
    items: ICartItem[]
    isLoading: boolean
    isAdding: boolean
    totalPrice: number
    totalCount: number
    inProgress: boolean
}


export enum CartActionTypes {
    fetch_cart = "cart/fetch_cart",
    add_item = "cart/add_item",
    delete_item = "cart/delete_item",
    incr_quan = "cart/incr_quan",
    decr_quan = "cart/decr_quan",
}