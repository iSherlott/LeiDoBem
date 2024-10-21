
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number
            ENV: string
            DEBUG_ENABLED: boolean
            OAUTH2_ISSUER: string
            OAUTH2_CLIENTID: string
            OAUTH2_RESPONSE_TYPE: string
            OAUTH2_SCOPE: string
            OAUTH2_SECRET: string
            OAUTH2_REDIRECT: string
        }
    }

    type MenuItem = Required<MenuProps>[ 'items' ][ number ];

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
        id?: string
        name?: string
        nickname?: string
        cnpj?: string
        photoUrl?: string
        sectors?: string[]
        tenantId?: string
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

    // GLOBAL LOADER

    type TloaderContext = {
        loading: boolean
        setLoading: (value: boolean) => void
        setPercent: (value: number) => void
    }

    // TIMEOUT

    type TTimeoutContext = {
        updateTimeout: () => void,
        minutes: number,
        seconds: number
    }

    // TOAST

    type TToastContext = {
        error: ({ message, title }: { message: string, title?: string, err?: unknown }) => void
        warn: ({ message, title }: { message: string, title?: string, err?: unknown }) => void
        info: ({ message, title }: { message: string, title?: string }) => void
        success: ({ message, title }: { message: string, title?: string }) => void
    }

    // STORAGE

    type UserPreferences = {
        sider_collapsed?: boolean
        header_collapsed?: boolean
    }
    
    type UserStorage = {
        user?: oAuthSession
        preferences?: UserPreferences
        company?: TCompanyContext
    }

    // SESSION

    type User = {
        exp: number,
        auth_time: number,
        name: string,
        email: string,
        roles: string[],
        preferred_language: string,
        group: string[],
        groupsAreas: string[],
        area: string,
        JobTitle: string,
        amr: string[]
    }

    type userSession = {
        access_token: string
        expires_in: number
        scope: string
        state: string
        token_type: string
        user: User
    }

}

export {}