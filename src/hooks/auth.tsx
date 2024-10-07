import { useAuth, User } from 'oidc-react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useApp } from './app';

const AuthContext = createContext<any>({});

export const useAppAuth = (): TAuthContext => {
    return useContext(AuthContext)
}

export default function Auth ({ children }: { children: React.ReactNode }) {

    const authData = useAuth();
    const { setLoading } = useApp()

    const [ user, setUser ] = useState<User | null>(null)
    const [ context, setContext ] = useState<TAuthContext>({
        email: '',
        job: '',
        area: '',
        language: '',
        name: '',
        permitted: [],
        token: '',
        expires_in: 0,
        signOut: function (): Promise<void> {
            throw new Error('Function not implemented.');
        },
        singOutSilent: function (): Promise<void> {
            throw new Error('Function not implemented.');
        }
    })

    const handleUser = async () => {
        setLoading(true)

        if (authData.userData === null && authData.isLoading === false) {
            await authData.signIn()
        } else if (authData.userData === null) {
            const userData = await authData.userManager.getUser();

            if (userData) {
                setUser(userData)
            } else {
                await authData.userManager.clearStaleState();
                await authData.signIn()
            }
        }

        setLoading(false)
    }

    useEffect(() => {
        handleUser()
    }, [])

    useEffect(() => {
        if (user) {
            setContext({
                email: user.profile.email!,
                job: user.profile.jobTitle,
                area: user.profile.area,
                language: user.profile.preferred_language,
                name: user.profile.given_name + user.profile.last_name,
                permitted: user.profile.amr!,
                token: user.id_token,
                expires_in: user.expires_in,
                signOut: authData.signOutRedirect,
                singOutSilent: authData.signOut
            })
        }
    }, [ user ])

    return (
        <AuthContext.Provider value={context}>
            {context.token ? children : null}
        </AuthContext.Provider>
    )
}
