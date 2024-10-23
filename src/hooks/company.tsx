
'use client'

import { getStorage } from '@/utils/storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const CompanyCTX = createContext<Company | null>(null)

export const useCompany = (): Company => {
    return useContext(CompanyCTX) as Company
}

export default function CompanyContext ({ children, params }: { children?: ReactNode, params: { [ key: string ]: any } }) {

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
        <CompanyCTX.Provider value={company}>
            {children}
        </CompanyCTX.Provider>
    )
}
