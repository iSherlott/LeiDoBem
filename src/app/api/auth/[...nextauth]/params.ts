import OAuthProvider from "next-auth/providers/auth0"

export const authParams = {
    response_type: process.env.NEXT_PUBLIC_OAUTH2_RESPONSE_TYPE,
    scope: process.env.NEXT_PUBLIC_OAUTH2_SCOPE,
    redirect_uri: process.env.NEXT_PUBLIC_OAUTH2_REDIRECT,
    state: "838a90d42b134f67a4009c22c0913a45",
    nonce: "9b543e4342f04a17ade4d931d0307c9f"
}


export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        OAuthProvider({
            clientId: process.env.NEXT_PUBLIC_OAUTH2_CLIENTID,
            clientSecret: process.env.OAUTH2_SECRET,
            issuer: process.env.OAUTH2_ISSUER,
            idToken: true,
            wellKnown: process.env.NEXT_PUBLIC_CONNECT + '/.well-known/openid-configuration',
            authorization: {
                params: {
                    ...authParams
                }
            }
        }),
    ]
}