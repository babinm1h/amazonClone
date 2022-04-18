import { IBrand, IItem } from "./models";


export interface IItemsState {
    itemsLoading: boolean
    items: IItem[]
    brands: IBrand[]
    brandsLoading: boolean
    activeBrand: null | string
    maxPrice: number
    activeSort: string | null
}

export enum ItemsActionTypes {
    fetch_items = "items/fetch_items",
    fetch_brands = "items/brands"
}

