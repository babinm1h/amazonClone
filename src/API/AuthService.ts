import { instance } from "./instance";


export class AuthService {

    static async login(email: string, password: string) {
        const { data } = await instance.post("/auth/login", { email, password })
        console.log(data);
        return data
    }


    static async registr(email: string, password: string) {
        const { data } = await instance.post("/auth/registr", { email, password })
        console.log(data);
        return data
    }


    static async check() {
        const { data } = await instance.get("/auth/check")
        console.log(data);
        return data
    }


    static async logout() {
        const { data } = await instance.get("/auth/logout")
        console.log(data);
        return data
    }

}