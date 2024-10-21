
'use client'

import React, { createContext, useContext, useState } from "react"
import Timeout from "@/hooks/timeout"
import AppLayout from "@/layouts/app"
import { getStorage, setStorage } from "@/utils/sessionStorage"
import Image from "next/image"
import { Spin } from "antd"

const appContext = createContext<TAppContext>({} as never)

export const useApp = (): TAppContext => {
    return useContext(appContext)
}

export function App ({ children }: { children: React.ReactNode }) {

    const localStorage = getStorage();

    const [ spinning, setSpinning ] = useState(true);
    const [ percent, setPercent ] = useState(0);

    const [ company, setCompany ] = useState<TCompanyContext>(localStorage.company ? localStorage.company : {})
    const [ layout, setLayout ] = useState<TLayoutContext>({
        header: false,
        sider: false,
        footer: false,
        navbar: false,
    })

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
        setStorage({ company: {} })
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

    return (
        <appContext.Provider value={context}>
            <Timeout>
                <AppLayout>
                    <div className={`loading-global ${!spinning ? 'loading-global-off' : ''}`}>
                        <Image width={25} height={30} src="/figroup/logo_small.png" alt="imagem_logo"></Image>
                        <Spin style={{ color: 'white' }} percent={percent} />
                    </div>
                    {children}
                </AppLayout>
            </Timeout>
        </appContext.Provider>
    )
}