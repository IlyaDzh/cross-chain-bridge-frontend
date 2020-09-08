import axios from "axios";

const _axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

export const axiosInstance = _axiosInstance;
