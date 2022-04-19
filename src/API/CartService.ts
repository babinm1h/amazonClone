import { ICartItem } from "../types/models";
import { instance } from "./instance";


export class CartService {

    static async fetchCart(): Promise<ICartItem[]> {
        const { data } = await instance.get("/cart")
        return data
    }


    static async addItem(id: string): Promise<ICartItem> {
        const { data } = await instance.post(`/cart/${id}`)
        return data
    }


    static async deleteItem(id: string): Promise<ICartItem> {
        const { data } = await instance.delete(`/cart/${id}`)
        return data
    }


    static async incrQuan(id: string): Promise<ICartItem> {
        const { data } = await instance.put(`/cart/incr/${id}`)
        return data
    }


    static async decrQuan(id: string): Promise<ICartItem> {
        const { data } = await instance.put(`/cart/decr/${id}`)
        return data
    }
}