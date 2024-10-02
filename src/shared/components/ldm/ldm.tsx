import { useApp } from "@/hooks/app"
import { useEffect } from "react"


export default function Ldm () {

    const app = useApp()

    useEffect(() => {
        app.update({
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