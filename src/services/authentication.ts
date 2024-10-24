import { authParams } from "@/app/api/auth/[...nextauth]/params"
import { AxiosClient } from "@/config/axios"

// NOT FUNCTIONAL, NEED REFRESH TOKEN, SERVER DOESNT ALLOW
export const getUpdateSession = async () => {
    const response = await AxiosClient.client.get(process.env.NEXT_PUBLIC_CONNECT + '/connect/authorize', {
        params: {
            ...authParams,
            client_id: process.env.NEXT_PUBLIC_OAUTH2_CLIENTID
        }
    })

    console.log(response.headers)
}