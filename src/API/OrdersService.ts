import { ICartItem } from "../types/models";
import { instance } from "./instance";


export class OrdersService {

    static async stripeCreate(items: ICartItem[]) {
        const { data } = await instance.post(`/stripe/create-checkout-session`, { items })
        return data
    }


    static async fetchOrders() {
        const { data } = await instance.get('/orders')
        return data
    }


    static async delete(id: string) {
        const { data } = await instance.delete(`/orders/${id}`)
        return data
    }
}