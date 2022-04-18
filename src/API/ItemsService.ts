import { IBrand, IItem } from "../types/models";
import { instance } from "./instance";



export class ItemsService {

    static async fetchItems(
        category?: string,
        brand?: string,
        max?: number,
        activeSort?: string): Promise<IItem[]> {

        const { data } = await instance.get("/items", {
            params: {
                category,
                price: max,
                brand,
                activeSort
            }
        })

        return data
    }


    static async fetchBrands(): Promise<IBrand[]> {
        const { data } = await instance.get("/brands")
        return data
    }


    static async fetchOne(id: string): Promise<IItem> {
        const { data } = await instance.get(`/items/${id}`)
        return data
    }

    static async fetchSimilar(categ: string): Promise<IItem[]> {
        const { data } = await instance.get(`/items/similar/${categ}`)
        return data
    }

}