

import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export class AxiosClientClass {
    client: AxiosInstance

    private requestIntercept(value: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> {
        return value
    }
    
    private async responseIntercept(value: AxiosResponse<unknown, unknown>): Promise<AxiosResponse<unknown, unknown>> {
        return value
    }

    private async onError(err: AxiosError) {
        console.log(err)
        return Promise.reject(err);
    }

    public setToken(token: string) {
        this.client.defaults.headers.Authorization = `Bearer ${token}`
    }

    constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BACKEND,
            headers: {
                "Accept": '*/*'
            }
        })

        this.client.interceptors.request.use(this.requestIntercept, this.onError);
        this.client.interceptors.response.use(this.responseIntercept, this.onError);
    }
}

export const AxiosClient = new AxiosClientClass();