
import { useApp } from "@/app/app"
import { useEffect } from "react"

export default function Ldm () {

    const app = useApp()

    useEffect(() => {
        app.updateLayout({
            footer: false,
            header: false,
            navbar: true,
            sider: false
        })
    }, [])

    return (
        <>lei do mal</>
    )
}