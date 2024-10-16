
'use client'

import { AntdRegistry } from "@ant-design/nextjs-registry"
import Toast from "./toast"
import Auth from "./auth"
import { AuthProvider, AuthProviderProps } from "oidc-react"
import Timeout from "./timeout"
import React, { createContext, useContext, useState } from "react"
import AppLayout from "@/layouts/app"
import { Spin } from "antd"
import { getSession, setSession } from "@/utils/sessionStorage"
import Image from "next/image"

const appContext = createContext<TAppContext>({} as never)

export const useApp = (): TAppContext => {
    return useContext(appContext)
}

export function App ({ children }: { children: React.ReactNode }) {

    const sessionStorage = getSession();

    const [ company, setCompany ] = useState<TCompanyContext>(sessionStorage.company ? sessionStorage.company : {})

    const [ layout, setLayout ] = useState<TLayoutContext>({
        header: false,
        sider: false,
        footer: false,
        navbar: false,
    })

    const [ spinning, setSpinning ] = useState(true);
    const [ percent, setPercent ] = useState(0);

    const handleSetPercent = (value: number) => {
        setPercent(value);
    };

    const handleSetLoading = (value: boolean) => {
        if (value === true) {
            setPercent(0)
            setSpinning(true)
        } else {
            setSpinning(false)
        }
    }

    const clearCompany = () => {
        setSession({ company: {} })
        setCompany({})
    }

    const updateLayout = (data: TLayoutContextUpdate) => {
        setLayout({ ...layout, ...data })
    }

    const context = {
        layout,
        company,
        loading: spinning,
        updateLayout,
        updateCompany: (data: TCompanyContextUpdate) => setCompany({ ...company, ...data }),
        clearCompany,
        setLoading: handleSetLoading,
        setLoadingPercent: handleSetPercent
    }

    const oidcConfig: AuthProviderProps = {
        onSignIn: () => {
            window.location.href = '/bypass'
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
                <appContext.Provider value={context}>
                    <AuthProvider {...oidcConfig}>
                        <Auth>
                            <Timeout>

                                <AppLayout>

                                    <div className={`loading-global ${!spinning ? 'loading-global-off' : ''}`}>
                                        <Image width={25} height={30} src="/figroup/logo_small.png" alt="imagem_logo"></Image>
                                        <Spin style={{ color: 'white' }} percent={percent} />
                                    </div>

                                    {children}
                                </AppLayout>

                            </Timeout>
                        </Auth>
                    </AuthProvider>
                </appContext.Provider>
            </Toast>
        </AntdRegistry>
    )
}