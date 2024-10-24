import { STORAGES } from "@/models/storages"


export const setStorage = <T>(data: T, storage: Storages) => {
    try {
        const storageData = localStorage.getItem(STORAGES[storage])

        if (storageData) {
            const decoded = parseStorage<T>(storageData)

            const toSaveContent: T = {
                ...decoded,
                ...data
            }

            stringifyStorage(STORAGES[storage], toSaveContent)
        } else {
            stringifyStorage(STORAGES[storage], data)
        }
    } catch(err) {
        console.log(err)
    }
}

export const getStorage = <T>(storage: Storages): T => {
    try {
        const storageData = localStorage.getItem(STORAGES[storage])

        if (storageData) {
            return parseStorage<T>(storageData)
        } else {
            return {} as T
        }
    } catch(err) {
        console.log(err)
        return {} as T
    }
}

export const removeStorage = (storage: Storages) => {
    localStorage.removeItem(STORAGES[storage])
}

export const clearStorage = () => {
    localStorage.clear()
}

export const stringifyStorage = <T>(name: string, content: T) => {
    localStorage.setItem(name, Buffer.from(JSON.stringify(content), 'utf-8').toString('base64'))
}

export const parseStorage = <T>(data: string): T => {
    return JSON.parse(Buffer.from(data, 'base64').toString('utf-8'))
}