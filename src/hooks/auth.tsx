import { useAuth, User } from 'oidc-react';
import React, { createContext, useContext, useEffect, useState } from 'react';

type TAuthContext = {
    email: string,
    job: string,
    area: string,
    language: string,
    name: string,
    permitted: string[],
    token: string,
    signOut: () => void
}

const AuthContext = createContext<any>({});

export const useAppAuth = (): TAuthContext => {
    return useContext(AuthContext)
}

export default function Auth ({ children }: { children: React.ReactNode }) {

    const authData = useAuth();
    const [ user, setUser ] = useState<User | null>(null)
    const [ context, setContext ] = useState<TAuthContext>({
        email: '',
        job: '',
        area: '',
        language: '',
        name: '',
        permitted: [],
        token: '',
        signOut: function (): void {
            throw new Error('Function not implemented.');
        }
    })

    const signOut = () => {
        authData.signOut();
    }

    const handleUser = async () => {
        if (authData.userData === null && authData.isLoading === false) {
            authData.signIn()
        } else if (authData.userData === null) {
            authData.userManager.clearStaleState()

            const userData = await authData.userManager.getUser();

            if (userData) {
                setUser(userData)
            } else {
                authData.signIn()
            }
        } else {
            setUser(authData.userData!)
        }
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
                signOut,
            })
        }
    }, [ user ])

    return (
        <AuthContext.Provider value={context}>
            {context.token ? children : null}
        </AuthContext.Provider>
    )
}
