
'use client'

import { useApp } from "@/hooks/app";
import { useAppLoading } from "@/hooks/loading";
import { FileAddOutlined, QuestionOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect } from "react";

const sharedIcons: CSSProperties = {
    fontSize: '50px',
    border: '6px solid',
    padding: '10px',
    borderRadius: '50px',
    color: '#0000A4'
}

const sharedCard: CSSProperties = {
    border: '3px solid',
    borderColor: '#0000A4',
    width: '100%',
    height: '300px',
    display: 'flex',
    padding: '20px',
    boxShadow: '0px 4px 4px 0px #00000040',
    cursor: 'pointer',
    maxWidth: '400px'
}

const sharedTitles: CSSProperties = {
    color: '#0000A4',
    fontSize: '22px',
    fontWeight: 'bolder',
    textAlign: 'center',
    marginBottom: '15px'
}

const sharedSubtitles: CSSProperties = {
    color: '#000000A6',
    fontSize: '14px'
}

export default function ControlPanel () {

    const router = useRouter()
    const app = useApp()
    const { setLoading } = useAppLoading()

    const redirectBypass = () => {
        setLoading(true)
        router.push(`/bypass`)
    }

    const redirectFinancialLines = () => {
        router.push(`/finance/financialLines`)
    }

    useEffect(() => {
        app.update({
            sider: false,
            footer: true,
            header: false,
            navbar: true
        })
    }, [])

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '50vh', background: 'white', justifyContent: 'center', borderRadius: '10px' }}>
            <div style={{ display: 'grid', width: '75%', columnGap: '16px', gridAutoFlow: 'column', justifyContent: 'center' }}>

                <Card onClick={redirectBypass} className="anim-pop-up-03" style={sharedCard}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 0px 10px 0px' }}>
                        <UnorderedListOutlined style={sharedIcons} />
                    </div>
                    <Typography style={sharedTitles}>Seleção de empresa</Typography>
                    <Typography style={sharedSubtitles}>Aqui te leva de volta para a tela de seleção de empresa</Typography>
                </Card>

            </div>
        </div>
    )
}

