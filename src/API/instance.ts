import axios from "axios";
import { SERVER_URL } from "../const";



const instance = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})



export { instance }