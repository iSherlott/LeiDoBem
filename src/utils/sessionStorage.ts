

const storageName = Buffer.from('app.ldm.figroup', 'utf-8').toString('base64')

export const setStorage = (data: UserStorage) => {
    try {
        if (window == undefined) {
            const storageData = localStorage.getItem(storageName)
    
            if (storageData) {
                const decoded = JSON.parse(Buffer.from(storageData, 'base64').toString('utf-8')) as UserStorage
    
                const { company, preferences, user } = decoded;
    
                const toSaveContent: UserStorage = {
                    user,
                    company: { ...company, ...data.company },
                    preferences: { ...preferences, ...data.preferences }
                }
        
                localStorage.setItem(storageName, Buffer.from(JSON.stringify(toSaveContent), 'utf-8').toString('base64'))
            } else {
                localStorage.setItem(storageName, Buffer.from(JSON.stringify(data), 'utf-8').toString('base64'))
            }
        }
    } catch(err) {}
}

export const getStorage = (): UserStorage => {
    try {
        if (window !== undefined) {
            const storageData = localStorage.getItem(storageName)
    
            if (storageData) {
                return JSON.parse(Buffer.from(storageData, 'base64').toString('utf-8'))
            } else {
                setStorage({
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
    } catch(err) {
        return {}
    }
}