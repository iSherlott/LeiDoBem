
'use client'

import { AntdRegistry } from "@ant-design/nextjs-registry"
import Toast from "./toast"
import Auth from "./auth"
import { AuthProvider, AuthProviderProps } from "oidc-react"
import Timeout from "./timeout"
import React, { createContext, useContext, useEffect, useState } from "react"
import AppLayout from "@/layouts/app"
import { useRouter } from "next/navigation"
import { Spin } from "antd"

const appContext = createContext<any>({})

export const useApp = (): TAppContext => {
    return useContext(appContext)
}

export function App ({ children }: { children: React.ReactNode }) {

    const router = useRouter()

    const [ company, setCompany ] = useState<TCompanyContext>({
        name: '',
        cnpj: '',
        id: '',
        nickname: '',
        photoUrl: '',
        sectors: [ '' ],
        tenantId: ''
    })

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
        setCompany({
            name: '',
            cnpj: '',
            id: '',
            nickname: '',
            photoUrl: '',
            sectors: [ '' ],
            tenantId: ''
        })
        router.push('/bypass')
    }

    const context = {
        layout,
        company,
        loading: spinning,
        updateLayout: (data: TLayoutContextUpdate) => setLayout({ ...layout, ...data }),
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
                                    <div style={{ background: '#0000004a', top: '0', left: '0', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '15px', position: 'absolute', zIndex: '999', visibility: spinning ? 'visible' : 'hidden' }}>
                                        <img src="/figroup/logo_small.png" alt="imagem_logo"></img>
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