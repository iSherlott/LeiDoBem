import NextAuth from "next-auth"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        {
            id: 'FICustomProvider',
            name: 'FI Group Provider',
            type: 'oauth',
            wellKnown: "https://connect.fi-group.com/identity/.well-known/openid-configuration",
            idToken: true,
            authorization: { params: { scope: "openid email profile", client_id: process.env.NEXT_PUBLIC_OAUTH2_CLIENTID, } },
        }
    ],
}

export default NextAuth(authOptions)