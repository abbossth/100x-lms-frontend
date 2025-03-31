import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://lmsapi.100x.uz/api',
});

export default axiosInstance