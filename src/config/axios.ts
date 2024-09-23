

import axios, { AxiosError, HeadersDefaults } from 'axios';
import { GetTimeoutSession, GetTokenSession, SetTimeoutSession } from '../utils/localStorage';

export interface CommonHeaderProperties extends HeadersDefaults {
    Authorization: string;
}

export const api = GetAPIClient();

export function GetAPIClient() {

    const token = GetTokenSession();

    const api = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}/api`
    });

    api.interceptors.request.use(request => {
        return request;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    api.interceptors.response.use(function (response) {

        let session = GetTimeoutSession();

        if (response.request?.responseURL.includes("AccessDenied") || response.data.statusCode == 404) {
            window.location.href = `/404`;
        }

        if (response.data.hasOwnProperty('statusCode')) {
            if (response.data.statusCode != 200) {
                response.data.errors.forEach((error: string) => {});
            }
        }

        if (response.data.statusCode === 500) {
            window.location.href = `/500`;
        }

        SetTimeoutSession(session != "dnv" ? "mudou" : "dnv");

        return response;
    }, (error: AxiosError) => {
        return Promise.reject(error);
    });

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return api;
}