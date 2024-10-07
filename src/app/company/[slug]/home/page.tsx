
'use client'

import { useApp } from "@/hooks/app"
import { useAppToast } from "@/hooks/toast";
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexDirection: 'column', marginTop: '25px' }}>
            <Typography style={{ fontFamily: 'monospace' }}>Conectado na empresa&nbsp;{params.slug}</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography style={{ fontFamily: 'monospace' }}>Testar Notificações</Typography>
                <div style={{ display: 'flex' }}>
                    <Button onClick={() => toast.info({ title: 'hey', message: 'teste' })}>info</Button>
                    <Button onClick={() => toast.warn({ title: 'hey', message: 'teste' })}>warn</Button>
                    <Button onClick={() => toast.success({ title: 'hey', message: 'teste' })}>success</Button>
                    <Button onClick={() => toast.error({ title: 'hey', message: 'teste' })}>error</Button>
                </div>
            </div>
        </div>
    )
}