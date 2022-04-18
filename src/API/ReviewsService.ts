import { IReview } from "../types/models";
import { instance } from "./instance";


export class ReviewsService {

    static async create(id: string, text: string, rate: number): Promise<IReview> {
        const { data } = await instance.post(`/reviews/${id}`, { text, rate })
        return data
    }
    

}