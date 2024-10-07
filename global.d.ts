
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number
            ENV: string
            NEXT_PUBLIC_OAUTH2_ROUTE: string
            NEXT_PUBLIC_OAUTH2_CLIENTID: string
            NEXT_PUBLIC_OAUTH2_SCOPE: string
            NEXT_PUBLIC_OAUTH2_SECRET: string
        }
    }

    type MenuItem = Required<MenuProps>[ 'items' ][ number ];

    type TAuthContext = {
        email: string,
        job: string,
        area: string,
        language: string,
        name: string,
        permitted: string[],
        token: string,
        expires_in: number,
        signOut: () => Promise<void>
        singOutSilent: () => Promise<void>
    }

    type TCompanyContextUpdate = {
        id?: string
        name?: string
        nickname?: string
        cnpj?: string
        photoUrl?: string
        sectors?: string[]
        tenantId?: string
    }

    type TCompanyContext = {
        id: string
        name: string
        nickname: string
        cnpj: string
        photoUrl: string
        sectors: string[]
        tenantId: string
    }

    type TLayoutContext = {
        header: boolean
        sider: boolean
        footer: boolean
        navbar: boolean
    }

    type TLayoutContextUpdate = {
        header?: boolean
        sider?: boolean
        footer?: boolean
        navbar?: boolean
    }
    
    type TAppContext = {
        layout: TLayoutContext
        company: TCompanyContext
        loading: boolean
        updateLayout: (data: TLayoutContextUpdate) => void
        updateCompany: (data: TCompanyContextUpdate) => void
        clearCompany: () => void
        setLoading: (value: boolean) => void
        setLoadingPercent: (value: number) => void
    }

    type IResponseProps = {
        data: any,
        errors: any[],
        statusCode: number
    }

    type TenantModel = {
        name: string,
        crmAccountId: string,
        id: string,
        companyId: number,
        number: string,
        areaName: string,
        areaId: string
    }

    type TloaderContext = {
        loading: boolean
        setLoading: (value: boolean) => void
        setPercent: (value: number) => void
    }

    type TTimeoutContext = {
        updateTimeout: () => void,
        minutes: number,
        seconds: number
    }

    type TToastContext = {
        error: ({ message, title }: { message: string, title?: string, err?: unknown }) => void
        warn: ({ message, title }: { message: string, title?: string, err?: unknown }) => void
        info: ({ message, title }: { message: string, title?: string }) => void
        success: ({ message, title }: { message: string, title?: string }) => void
    }

}

export {}