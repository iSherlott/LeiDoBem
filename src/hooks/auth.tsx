
'use client'

import { AxiosClient } from '@/config/axios';
import { loadSession, removeSession, saveSession } from '@/utils/cookies';
import { signIn } from 'next-auth/react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from './router';

const AuthContext = createContext<authContext | null>(null);

export const useAuth = () => {
    return useContext(AuthContext) as authContext
}

export default function Auth ({ children }: { children?: ReactNode }) {

    const router = useRouter()

    const [ session, setSession ] = useState<userSession | null>(null)

    const updateSession = async () => {
        removeSession()
        signIn('auth0')
    }

    const signOutUser = async () => {
        removeSession()
        router.redirect(process.env.NEXT_PUBLIC_CONNECT + "/identity/connect/endsession")
    }

    useEffect(() => {
        const loadedSession = loadSession()

        if (loadedSession !== null) {
            setSession(loadedSession)
            AxiosClient.setToken(loadedSession.access_token)
        } else {
            if (location.href.includes('#id_token=') && session === null) {
                setSession(saveSession(location.href))
                AxiosClient.setToken(loadSession()!.access_token)
                router.redirect(location.href.replace(/#id_token=.*/gm, ''))
            } else {
                if (session === null) {
                    signIn('auth0')
                }
            }
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            ...session!,
            signOut: signOutUser,
            updateSession
        }}>
            {session === null ? <></> : children}
        </AuthContext.Provider>
    )
}
