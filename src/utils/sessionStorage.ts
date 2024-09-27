export type UserModel = {
    id: string,
    fullName: string,
    roles: number[],
    email: string,
    confidentialTerm: number
}

interface SessionStorageInterface {
    token: string;
    userId: string;
    expiration: Date;
}

export function getSession(sessionKey : string){
    const response = sessionStorage.getItem(sessionKey);
    return response;
}

export function setSession(sessionKey: string, sessionValue: string){
    sessionStorage.setItem(sessionKey, sessionValue);
}

export const GetTokenSession = () => {
    return sessionStorage.getItem("token");
}

export const GetInfosSession = () => {
    var token = sessionStorage.getItem("bearer-token") ?? "";
    var userId = sessionStorage.getItem("userId") ?? "";

    return {token: token, userId: userId};
}

export const GetUserSession = () => {
    return sessionStorage.getItem("user") ?? "";
}

export const GetTenantIdSession = () => {
    return sessionStorage.getItem("tenantId") ?? "";
}

export const GetTimeoutSession = () => {
    return JSON.stringify(sessionStorage.getItem("timeout")) ?? "";
}

export const GetRolesSession = () => {
    return sessionStorage.getItem("roles") ?? "";
}

export const SetTokenSession = (value: string) => {
    sessionStorage.setItem("token", value);
}

export const SetTimeoutSession = (value: string) => {
    sessionStorage.setItem("timeout", value);
    window.dispatchEvent(new Event("storage"));
}

export const SetUserSession = (value: string) => {
    sessionStorage.setItem("user", JSON.stringify(value));
}

export const SetRolesSession = (roles: string[]) => {
    sessionStorage.setItem("roles", JSON.stringify(roles));
}

export const ClearSession = () => {
    sessionStorage.clear();
}

export const SetTenantIdSession = (tenantId: string) => {
    sessionStorage.setItem("tenantId", tenantId);
}