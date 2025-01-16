import axios, { AxiosInstance } from "axios";

export function getApi(): AxiosInstance {
    const api = axios.create({
        baseURL: 'http://localhost:4000',
    });

    return api;
}