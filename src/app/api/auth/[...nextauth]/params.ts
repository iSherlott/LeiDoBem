import OAuthProvider from "next-auth/providers/auth0"

export const authOptions = {

    // Configure one or more authentication providers
    providers: [
        OAuthProvider({
            clientId: process.env.OAUTH2_CLIENTID,
            clientSecret: process.env.OAUTH2_SECRET,
            issuer: process.env.OAUTH2_ISSUER,
            idToken: true,
            wellKnown: "https://connect-staging.fi-group.com/identity/.well-known/openid-configuration",
            authorization: {
                params: {
                    response_type: process.env.OAUTH2_RESPONSE_TYPE,
                    scope: process.env.OAUTH2_SCOPE,
                    redirect_uri: process.env.OAUTH2_REDIRECT,
                    state: "838a90d42b134f67a4009c22c0913a45",
                    nonce: "9b543e4342f04a17ade4d931d0307c9f"
                }
            },
        }),
    ]
}