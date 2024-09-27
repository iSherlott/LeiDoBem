
'use client'

import { AntdRegistry } from "@ant-design/nextjs-registry"
import Toast from "./toast"
import Auth from "./auth"
import { AuthProvider, AuthProviderProps } from "oidc-react"
import Timeout from "./timeout"
import { createContext, useContext, useState } from "react"
import AppLayout from "@/layouts/app"

type TAppContextUpdate = {
    header?: boolean
    sider?: boolean
    footer?: boolean
    navbar?: boolean
}

type TAppContext = {
    header: boolean
    sider: boolean
    footer: boolean
    navbar: boolean
    update: (data: TAppContextUpdate) => void
}

const appContext = createContext<any>({})

export const useApp = (): TAppContext => {
    return useContext(appContext)
}

export function App ({ children }: { children: React.ReactNode }) {

    const [ app, setApp ] = useState<TAppContext>({
        header: true,
        sider: true,
        footer: true,
        navbar: true,
        update: (data) => { setApp({ ...app, ...data }) }
    })

    const oidcConfig: AuthProviderProps = {
        onSignIn: () => {
            window.location.hash = '';
        },
        authority: process.env.NEXT_PUBLIC_OAUTH2_ROUTE,
        clientId: process.env.NEXT_PUBLIC_OAUTH2_CLIENTID,
        responseType: 'id_token token',
        redirectUri: 'https://localhost:44425/bypass',
        automaticSilentRenew: true,
    };

    return (
        <AntdRegistry>
            <Toast>
                <AuthProvider {...oidcConfig}>
                    <Auth>
                        <Timeout>
                            <appContext.Provider value={app}>
                                <AppLayout>
                                    {children}
                                </AppLayout>
                            </appContext.Provider>
                        </Timeout>
                    </Auth>
                </AuthProvider>
            </Toast>
        </AntdRegistry>
    )
}