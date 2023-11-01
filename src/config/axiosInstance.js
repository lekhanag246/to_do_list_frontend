import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://to-do-list-v2-640k.onrender.com/app',
    // baseURL: "http://localhost:4000/app",
    // timeout: 1000,
})



export default axiosInstance;