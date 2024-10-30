
'use client'

import CompanyContext from "@/hooks/company";
import { ReactNode } from "react";

export default function CompanyLayout ({ children, params }: { children: ReactNode, params?: { slug: string } }) {
    return (
        <CompanyContext params={params!}>
            {children}
        </CompanyContext>
    )
}