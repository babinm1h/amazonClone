import { IItem, IReview } from "./models";



export interface IItemPageState {
    item: IItem | null
    isLoading: boolean
    reviews: IReview[]
    isAdding: boolean
    similarItems: IItem[]
}

export enum ItemPageActionTypes {
    fetch_item = "itempage/fetch_item",
    fetch_similar = "itempage/fetch_similar",
}