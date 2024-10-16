

const storageName = Buffer.from('app.ldm.figroup', 'utf-8').toString('base64')

export const setSession = (data: UserSession) => {
    if (localStorage) {
        const storageData = localStorage.getItem(storageName)

        if (storageData) {
            const decoded = JSON.parse(Buffer.from(storageData, 'base64').toString('utf-8')) as UserSession

            const { company, preferences } = decoded;

            const toSaveContent: UserSession = {
                company: { ...company, ...data.company },
                preferences: { ...preferences, ...data.preferences }
            }
    
            localStorage.setItem(storageName, Buffer.from(JSON.stringify(toSaveContent), 'utf-8').toString('base64'))
        } else {
            localStorage.setItem(storageName, Buffer.from(JSON.stringify(data), 'utf-8').toString('base64'))
        }
    }
}

export const getSession = (): UserSession => {
    if (localStorage) {
        const storageData = localStorage.getItem(storageName)

        if (storageData) {
            return JSON.parse(Buffer.from(storageData, 'base64').toString('utf-8'))
        } else {
            setSession({
                preferences: {
                    sider_collapsed: true,
                    header_collapsed: true
                }
            })
            return {}
        }
    } else {
        return {}
    }
}