export interface IReview {
    userId: string
    rate: number
    item: string
    text: string
}

export interface IUser {
    email: string
    password: string
    reviews: IReview[]
}


export interface IItem {
    title: string
    img: string
    categories: string[]
    price: number
    reviews: IReview[]
    brand: string
}

export interface ICart {
    items: ICartItem[]
    userId: string
}

export interface ICartItem {
    item: IItem
    cartId: string
}

export interface IOrder {

}