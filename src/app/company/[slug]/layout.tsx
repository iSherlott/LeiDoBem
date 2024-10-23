
'use client'

import CompanyHeaderNormal from "@/shared/components/company/header/normal"
import CompanyHeaderSmall from "@/shared/components/company/header/small"
import { getStorage } from "@/utils/storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const Company = createContext<Company | {}>({})

export const useCompany = (): Company => {
    return useContext(Company) as Company
}

export default function CompanyLayout ({ children, params }: { children: ReactNode, params?: { slug: string } }) {

    const [ company, setCompany ] = useState<Company>(getStorage('Company'));

    useEffect(() => {
        console.log(params)

        setCompany({
            id: '6b634130-7ad5-4469-8a71-11d5282d79bb',
            cnpj: '12.345.678/0001-00',
            name: '2024',
            nickname: 'DHL EXPRESS TARRAGON',
            photoUrl: '',
            sectors: [ 'hey', 'hello' ],
            tenantId: 'tenantiddousuario'
        })

    }, [])

    return (
        <Company.Provider value={company}>
            <CompanyHeaderSmall />
            <CompanyHeaderNormal />
            {children}
        </Company.Provider>
    )
}