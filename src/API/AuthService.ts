import { IUser } from "../types/models";
import { instance } from "./instance";


export class AuthService {

    static async login(email: string, password: string): Promise<IUser> {
        const { data } = await instance.post("/auth/login", { email, password })
        return data
    }


    static async registr(email: string, password: string): Promise<IUser> {
        const { data } = await instance.post("/auth/registr", { email, password })
        return data
    }


    static async check(): Promise<IUser> {
        const { data } = await instance.get("/auth/check")
        return data
    }


    static async logout() {
        const { data } = await instance.get("/auth/logout")
        return data
    }

}