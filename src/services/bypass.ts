import { AxiosClient } from "@/config/axios"
import { getStorage, removeStorage, setStorage } from "@/utils/storage"

export const getCompanies = async () => {
    try {
        const data: any = getStorage('CompaniesList');

        if ( data.ttl > Date.now() ) {
            return data
        } else {
            removeStorage('CompaniesList')
        }

        const response =  await AxiosClient.client.get(`/Bypass/GetTenantsByUserAccess`)

        const cacheData = {
            ...response.data.response,
            ttl: new Date(Date.now() + (1000 * 60 * 15)).getTime()
        }

        setStorage(cacheData, 'CompaniesList')

        return response.data.response
    } catch (err) {
        console.log(err)
    }
}