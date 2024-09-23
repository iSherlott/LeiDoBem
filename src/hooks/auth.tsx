
'use client'

import { authOptions } from "@/app/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

export async function getServerSideProps (context: any) {
    const session = await getServerSession(context.req, context.res, authOptions)

    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
        },
    }
}

export default function Auth ({ children }: { children: React.ReactNode }): React.ReactNode {

    return (
        <>{children}</>
    )
}