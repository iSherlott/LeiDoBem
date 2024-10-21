
'use client'

import { loadSession, saveSession } from '@/utils/cookieStorage';
import { SessionProvider, signIn } from 'next-auth/react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const AuthContext = createContext<userSession | null>(null);

export const useAuth = () => {
    return useContext(AuthContext) as userSession
}

export default function Auth ({ children }: { children?: ReactNode }) {

    const [ session, setSession ] = useState<userSession | null>(null)

    useEffect(() => {
        const loadedSession = loadSession()

        if (loadedSession) {
            setSession(loadedSession)
        }

        if (location.href.includes('#id_token=') && session === null) {
            setSession(saveSession(location.href))
        } else {
            if (session === null) {
                signIn('auth0')
            }
        }
    }, [])

    return (
        <SessionProvider>
            <AuthContext.Provider value={session}>
                {session === null ? <></> : children}
            </AuthContext.Provider>
        </SessionProvider>
    )
}
