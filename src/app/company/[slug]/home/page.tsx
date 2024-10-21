
'use client'

import { useApp } from "@/app/app";
import { useAppToast } from "@/hooks/toast";
import { getStorage, setStorage } from "@/utils/sessionStorage";
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
        <div className="flex-cl flex-center" style={{ gap: '15px', marginTop: '25px' }}>
            <Typography style={{ fontFamily: 'monospace' }}>Conectado na empresa&nbsp;{params.slug}</Typography>

            <div className="flex-center flex-cl">
                <Typography style={{ fontFamily: 'monospace' }}>Testar Notificações</Typography>

                <div className="flex">
                    <Button onClick={() => toast.info({ title: 'hey', message: 'teste' })}>info</Button>
                    <Button onClick={() => toast.warn({ title: 'hey', message: 'teste' })}>warn</Button>
                    <Button onClick={() => toast.success({ title: 'hey', message: 'teste' })}>success</Button>
                    <Button onClick={() => toast.error({ title: 'hey', message: 'teste' })}>error</Button>
                </div>

                <div className="flex">
                    <Button onClick={() => setStorage({ preferences: { sider_collapsed: true } })}>teste set storage</Button>
                    <Button onClick={() => console.log(getStorage())}>teste get storage</Button>
                </div>
            </div>

        </div>
    )
}