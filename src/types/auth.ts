import { IReview, IUser } from "./models";



export interface IAuthState {
    user: null | IUser
    isLoading: boolean
    reviews: IReview[]
    loginError: string
    registrError: string
    isAuth: boolean
}

export enum AuthActionTypes {
    registr = "auth/registr",
    login = "auth/login",
    check = "auth/check",
    logout = "auth/logout"
}