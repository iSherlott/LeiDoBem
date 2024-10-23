
'use client'

import React, { createContext, useContext, useState } from "react"
import Image from "next/image"
import { Spin } from "antd"

const appContext = createContext<TAppContext>({} as never)

export const useApp = (): TAppContext => {
    return useContext(appContext)
}

export function App ({ children }: { children: React.ReactNode }) {

    const [ spinning, setSpinning ] = useState(true);
    const [ percent, setPercent ] = useState(0);

    const [ layout, setLayout ] = useState<Layout>({
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

    const updateLayout = (data: TLayoutContextUpdate) => {
        setLayout({ ...layout, ...data })
    }

    return (
        <appContext.Provider value={{
            layout,
            loading: spinning,
            updateLayout,
            setLoading: handleSetLoading,
            setLoadingPercent: handleSetPercent,
        }}>
            <div className={`loading-global ${!spinning ? 'loading-global-off' : ''}`}>
                <Image width={25} height={30} src="/figroup/logo_small.png" alt="imagem_logo"></Image>
                <Spin style={{ color: 'white' }} percent={percent} />
            </div>
            {children}
        </appContext.Provider>
    )
}