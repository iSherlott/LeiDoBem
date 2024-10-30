
'use client'

import { AppRouterInstance, NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter as nextRouter } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";
import { useApp } from "./app";

export interface CustomRouter extends AppRouterInstance {
    redirect: (href: string, options?: NavigateOptions) => void
}

const RouterCTX = createContext<CustomRouter>(null as any)

export const useRouter = (): CustomRouter => {
    return useContext(RouterCTX)
}

export default function RouterContext ({ children }: { children: ReactNode }) {

    const { back, forward, prefetch, push, refresh, replace } = nextRouter()
    const { setLoading } = useApp()

    const redirect = (href: string, options?: NavigateOptions) => {

        if (!location.href.includes(href) || location.href.includes(href + '/')) {
            setLoading(true)
        }

        push(href, options)
    }

    return (
        <RouterCTX.Provider value={{
            back,
            forward,
            prefetch,
            push,
            refresh,
            replace,
            redirect
        }}>
            {children}
        </RouterCTX.Provider>
    )
}