

import axios, { AxiosError, HeadersDefaults } from 'axios';

export interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
}

export const api = GetAPIClient();

export function GetAPIClient() {

    const api = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}/api`
    });

    api.interceptors.request.use(request => {
        return request;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    api.interceptors.response.use(function (response) {

        if (response.data.hasOwnProperty('statusCode')) {
            if (response.data.statusCode != 200) {
                response.data.errors.forEach((error: string) => {});
            }
        }

        return response;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    return api;
}