import * as jose from 'jose';

const sessionName = Buffer.from('app.ldm.figroup', 'utf-8').toString('base64')

export const saveSession = (session: string) => {
    const bd: { [ key: string ]: string } = {}
    let user: any = {}

    const locSplit: string = session.split('#id_token=')[ 1 ]
    const sessionData: string[] = locSplit.split('&')

    for (const element of sessionData) {
        const splitEle: string[] = element.split('=')

        if (splitEle.length === 1) {
            user = jose.decodeJwt(splitEle[ 0 ]);
        } else {
            bd[ splitEle[ 0 ] ] = splitEle[ 1 ];
        }
    }

    const modal: userSession = {
        access_token: bd['access_token'],
        expires_in: Number.parseInt(bd['expires_in']),
        scope: bd['scope'],
        state: bd['state'],
        token_type: bd['token_type'],
        user: {
            exp: user.exp,
            auth_time: user.auth_time,
            name: user[ "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name" ],
            email: user.email,
            roles: user[ "http://schemas.microsoft.com/ws/2008/06/identity/claims/role" ],
            preferred_language: user.preferred_language,
            group: user.group,
            groupsAreas: user.groupsAreas,
            area: user.area,
            JobTitle: user.JobTitle,
            amr: user.mr
        },
    }

    document.cookie = sessionName + "=" + Buffer.from(JSON.stringify(modal), 'utf-8').toString('base64') + "; expires=" + bd['expires_in'] + '; Secure;';
    return modal;
}

export const loadSession = (): userSession | null => {
    try {
        const sessionValue = document.cookie.split("; ").find((row) => row.startsWith(sessionName + "="))?.split("=")[1];
        
        if (sessionValue === undefined) {
            return null
        } else {
            return JSON.parse(Buffer.from(sessionValue, 'base64').toString('utf-8'))
        }
    } catch (err: unknown) {
        return null
    }
}