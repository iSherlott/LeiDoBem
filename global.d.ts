

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number
            ENV: string
            NEXT_PUBLIC_OAUTH2_ROUTE: string
            NEXT_PUBLIC_OAUTH2_CLIENTID: string
            NEXT_PUBLIC_OAUTH2_SCOPE: string
            NEXT_PUBLIC_OAUTH2_SECRET: string
        }
    }
}



export {}