export const carouselItems = [
    `https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg`
]


export const categories: ICateg[] = [
    { id: 1, title: "Computer and accessories", img: `https://www.notik.ru/content/img/1603093565_02-pc-vs-laptop-vs-aio.jpg`, cat: "computer" },
    { id: 2, title: "Gaming accessories", img: `https://4frag.ru/image/data/News/444/logitech-g-pro-x-keyboard-news-2.jpg`, cat: "gaming" },
    { id: 3, title: "Electronics", img: `https://catherineasquithgallery.com/uploads/posts/2021-02/1612486346_190-p-noutbuk-na-serom-fone-242.jpg`, cat: "electronics" },
    { id: 4, title: "Fashion", img: `https://4frag.ru/image/data/News/444/logitech-g-pro-x-keyboard-news-2.jpg`, cat: "clothes" },
]


export const sortOptions = [
    { value: "default", title: "Default" },
    { value: 'rating', title: "Rating" },
    { value: "priceAsc", title: "Price Low to Hight" },
    { value: "priceDesc", title: "Price High to Low" },
]

export const stars = [1, 2, 3, 4, 5]



/////////////////////
export interface ICateg {
    id: number
    img: string
    cat: string
    title: string
}