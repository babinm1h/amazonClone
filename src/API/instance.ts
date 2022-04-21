import axios from "axios";
import { DEPLOY_URL, SERVER_URL } from "../const";



const instance = axios.create({
    withCredentials: true,
    baseURL: DEPLOY_URL
})



export { instance }