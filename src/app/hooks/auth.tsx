
'use client'

import { AuthProvider } from "oidc-react";
import React from "react";

export default function CustomAuthProvider ({ children }: { children: React.ReactNode }): React.ReactNode {

    const oidcConfig = {
        onSignIn: () => {
            window.location.hash = '';
        },
        authority: process.env.REACT_APP_IDENTITY_SERVER_URL,
        clientId: process.env.REACT_APP_CLIENT_ID,
        responseType: 'id_token token',
        redirectUri: window.location.href,
        automaticSilentRenew: true,
    };

    return (
        <AuthProvider {...oidcConfig}>
            {children}
        </AuthProvider>
    )
}