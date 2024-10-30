
'use client'

import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import AppBar from "@/shared/components/appbar/appbar";
import manifest from "@/app/manifest";
import FooterCustom from "@/shared/components/footer/footer";
import { konamiCode, konamiCodeAlt } from "@/shared/shared";
import Ldm from "@/shared/components/ldm/ldm";
import { useToast } from "@/hooks/toast";
import CustomSider from "@/shared/components/sider/sider";
import { useApp } from '@/hooks/app';

export default function AppLayout ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    let inputList: any[] = [];

    const { layout } = useApp()
    const toast = useToast()

    const [ easter, setEaster ] = useState<boolean>(false)

    const handleKeyDown = (keyEvent: KeyboardEvent) => {
        inputList.unshift(keyEvent.key)
        inputList = inputList.slice(0, 10)

        if (inputList.join(' ') === konamiCode.join(' ') || inputList.join(' ') === konamiCodeAlt.join(' ')) {
            toast.info({ title: 'Ainda não está pronto.', message: 'hehehe, no futuro...' })
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    return (
        <Layout style={{ height: '100vh', width: '100vw' }}>

            <CustomSider />

            <Layout style={{ minWidth: '1530px', overflow: 'hidden', position: 'relative' }}>

                <Layout.Header className={layout.navbar ? '' : 'hide-header'} style={{ padding: '0px', background: '#0000A4', top: '0', left: '0', height: '45px', transition: 'transform 500ms ease-in-out' }}>
                    <AppBar />
                </Layout.Header>

                <Layout.Content>
                    <div style={{ height: '100%', width: '100%', padding: layout.header || layout.footer || layout.sider || layout.navbar ? '16px' : '0px', background: '#F5F5F5', overflowY: 'scroll' }}>
                        {easter ? <Ldm /> : children}
                    </div>
                </Layout.Content>

                <Layout.Footer style={{ textAlign: 'end', padding: '8px 20px', background: manifest().theme_color }}>
                    <FooterCustom />
                </Layout.Footer>

            </Layout>

        </Layout>
    );
}
