import { IUser } from "../types/models";
import { removeTokenCookie, setTokenCookie } from "../utils/authHelpers";
import { instance } from "./instance";


export class AuthService {

    static async login(email: string, password: string): Promise<IUser> {
        const { data } = await instance.post("/auth/login", { email, password })
        setTokenCookie(data.token)
        return data
    }


    static async registr(email: string, password: string): Promise<IUser> {
        const { data } = await instance.post("/auth/registr", { email, password })
        setTokenCookie(data.token)
        return data
    }


    static async check(): Promise<IUser> {
        const { data } = await instance.get("/auth/check")
        return data
    }


    static async logout() {
        const { data } = await instance.get("/auth/logout")
        removeTokenCookie()
        return data
    }

}