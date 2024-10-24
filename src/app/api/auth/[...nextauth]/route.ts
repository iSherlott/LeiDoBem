import NextAuth, { AuthOptions } from "next-auth"
import { authOptions } from "./params"

const handler = NextAuth({
    ...authOptions,
    callbacks: {
        redirect({}) {},
    },
} as AuthOptions)
export { handler as GET, handler as POST }
