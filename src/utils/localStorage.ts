
export const GetTokenSession = () => {
    return sessionStorage.getItem("token");
}

export const GetTimeoutSession = () => {
    return JSON.stringify(sessionStorage.getItem("timeout")) ?? "";
}

export const SetTimeoutSession = (value: string) => {
    sessionStorage.setItem("timeout", value);
    window.dispatchEvent(new Event("storage"));
}