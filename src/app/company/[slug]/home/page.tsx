
'use client'

import { useApp } from "@/hooks/app"
import { useEffect } from "react"


export default function Home () {

    const app = useApp();

    useEffect(() => {
        app.update({
            footer: true,
            header: true,
            sider: true,
            navbar: true
        })
    }, [])

    return (<>hello</>)
}