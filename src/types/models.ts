export interface IReview {
    _id: string
    user: string
    rate: number
    item: string
    text: string
    createdAt: string
}

export interface IUser {
    _id: string
    email: string
    password: string
    reviews: IReview[]
}


export interface IItem {
    _id: string
    title: string
    img: string
    category: string
    price: number
    reviews: IReview[]
    brand: IBrand
    rating: number
    allRates: number[]
}

export interface ICart {
    _id: string
    items: ICartItem[]
    userId: string
}

export interface ICartItem {
    _id: string
    item: IItem
    quan: number
    userId: string
}

export interface IOrder {

}


export interface IBrand {
    _id: string
    title: string
}