
'use client'

import { useApp } from "@/app/app";
import { useAppToast } from "@/hooks/toast";
import { getStorage, setStorage } from "@/utils/storage";
import { Button, Typography } from "antd";
import { useEffect } from "react"

export default function Home ({ params }: { params: { slug: string } }) {

    const { setLoading, updateLayout } = useApp();
    const toast = useAppToast()

    useEffect(() => {
        updateLayout({
            footer: true,
            header: true,
            sider: true,
            navbar: true
        })

        setLoading(false)
    }, [])

    return (
        <div className="flex-cl flex-center" style={{ marginTop: '25px' }}>

            <div className="flex-center flex-cl">
                <Typography style={{ fontFamily: 'monospace' }}>Testar Notificações</Typography>

                <div style={{ display: 'flex' }}>
                    <Button onClick={() => toast.info({ title: 'hey', message: 'teste' })}>info</Button>
                    <Button onClick={() => toast.warn({ title: 'hey', message: 'teste' })}>warn</Button>
                    <Button onClick={() => toast.success({ title: 'hey', message: 'teste' })}>success</Button>
                    <Button onClick={() => toast.error({ title: 'hey', message: 'teste' })}>error</Button>
                </div>

                <Typography style={{ fontFamily: 'monospace' }}>Teste de Storage</Typography>

                <div style={{ display: 'flex' }}>
                    <Button onClick={() => setStorage({ preferences: { sider_collapsed: true } }, "Preferences")}>teste set storage</Button>
                    <Button onClick={() => console.log(getStorage("Preferences"))}>teste get storage</Button>
                </div>
            </div>

        </div>
    )
}