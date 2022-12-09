export const carouselItems = [
    `https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg`,
    `https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg`
]


export const categories: ICateg[] = [
    { id: 1, title: "Computer and accessories", img: `https://www.notik.ru/content/img/1603093565_02-pc-vs-laptop-vs-aio.jpg`, cat: "computer" },
    { id: 2, title: "Gaming accessories", img: `https://4frag.ru/image/data/News/444/logitech-g-pro-x-keyboard-news-2.jpg`, cat: "gaming" },
    { id: 3, title: "Electronics", img: `https://259506.selcdn.ru/sites-static/site491636/3b16848d-a931-4588-8f7e-3d1e158de37a/3b16848d-a931-4588-8f7e-3d1e158de37a-1134633.jpeg`, cat: "electronics" },
    { id: 4, title: "Fashion", img: `https://i.pinimg.com/736x/8d/57/c7/8d57c7a8d37c8e7542ef57d093278ecf.jpg`, cat: "clothes" },
]


export const sortOptions = [
    { value: "", title: "Default" },
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