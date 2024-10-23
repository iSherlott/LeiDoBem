
'use client'

import CompanyContext from "@/hooks/company";
import CompanyHeaderNormal from "@/shared/components/company/header/normal"
import CompanyHeaderSmall from "@/shared/components/company/header/small"
import { ReactNode } from "react";

export default function CompanyLayout ({ children, params }: { children: ReactNode, params?: { slug: string } }) {

    return (
        <CompanyContext params={params!}>
            <CompanyHeaderSmall />
            <CompanyHeaderNormal />
            {children}
        </CompanyContext>
    )
}