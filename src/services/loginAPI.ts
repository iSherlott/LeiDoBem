import { api } from "@/config/axios";

export const PostUserByEmail = async (email: string, access_token: string) => {
    try {
        api.defaults.headers = {
            Authorization: `Bearer ${access_token}`,
        } as any;

        const result = await api.post("/Account/PostUserByEmail", { UserEmail: email });

        const response = await result.data;
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export const PutUserByEmail = async (email: string, term: number, access_token: string) => {
    try {
        api.defaults.headers = {
            Authorization: `Bearer ${access_token}`,
        } as any;

        const result = await api.put("/Account/PutUserByEmail", { UserEmail: email, Term: term });

        const response = await result.data;
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export const GetRolesAPI = async (tenantId: string) => {
    try {
        const result = await api.get(`/Account/GetRoles/?tenantId=${tenantId}`);
        const response = result.data;
        return response;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}