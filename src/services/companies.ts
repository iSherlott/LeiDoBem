import { AxiosClient } from "@/config/axios"

export interface CompanyServiceData {
    name?: string,
    nickName?: string,
    cnpj?: string,
    photoUrl?: string,
    sectors?: any[],
    services?: any[],
    id?: string,
    createdBy?: string,
    created?: string,
    modifiedBy?: null,
    modified?: string,
    errors?: any[],
    isValid?: boolean
}

export const getCompanyInformation = async (companyId: string): Promise<CompanyServiceData> => {
    const response =  await AxiosClient.client.get(`/Company/${companyId}`)
    return response.data.response.data
}