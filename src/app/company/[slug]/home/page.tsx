
'use client'

import { useApp } from "@/app/app";
import { getStorage, setStorage } from "@/utils/storage";
import { Button, Typography } from "antd";
import { useEffect } from "react"

export default function Home ({ params }: { params: { slug: string } }) {

    const { setLoading, updateLayout } = useApp();

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
            <div style={{ display: 'flex' }}>
                <Button onClick={() => console.log(getStorage("Preferences"))}>teste get storage</Button>
            </div>
        </div>
    )
}