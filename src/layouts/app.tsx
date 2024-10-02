
'use client'

import { useApp } from "../hooks/app";
import { Button, Layout, Menu, Tooltip, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CalendarOutlined,
    CodeOutlined,
    FileSearchOutlined,
    FolderOutlined,
    FundProjectionScreenOutlined,
    ImportOutlined,
    ProfileOutlined,
    TeamOutlined
} from '@ant-design/icons';
import { redirect } from "next/navigation";
import AppBar from "@/shared/components/appbar/appbar";
import manifest from "@/app/manifest";
import FooterCustom from "@/shared/components/footer/footer";

import "@styles/reset.css";
import "@styles/variables.css";
import "@styles/animations.css";
import "@styles/globals.css";
import { appMenusMock } from "./app.mock";
import { konamiCode, konamiCodeAlt } from "@/shared/shared";
import Ldm from "@/shared/components/ldm/ldm";
import { useAppToast } from "@/hooks/toast";

const sharedButtonStyleExpanded: CSSProperties = {
    background: '#0000A4',
    color: 'white',
    marginBottom: '6px'
}

const sharedButtonStyleShrunk: CSSProperties = {
    background: '#0000A4',
    color: 'white',
    width: '100%',
    marginBottom: '6px'
}

const siderStyle: CSSProperties = {
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    left: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    background: manifest().theme_color
};

export default function AppLayout ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    let inputList: any[] = [];

    const { header, footer, sider, navbar } = useApp()
    const toast = useAppToast()

    const [ collapsed, setCollapsed ] = useState<boolean>(true);
    const [ autoCollapse, setAutoCollapse ] = useState<boolean>(true);
    const [ easter, setEaster ] = useState<boolean>(false)

    const navRef = useRef<HTMLElement>(null);

    const redirectRoute = () => {
        redirect(`/`)
    }

    const redirectHome = () => {
        redirect(`/home/${'none'}`)
    }

    const redirectToFileManager = () => {
        redirect(`/fileManager/${'none'}`)
    }

    const handleAsideOut = () => {
        if (autoCollapse) {
            setCollapsed(true)
        }
    }

    useEffect(() => {
        navRef.current?.addEventListener('mouseleave', handleAsideOut)

        return () => {
            navRef.current?.removeEventListener('mouseleave', handleAsideOut)
        }
    }, [ autoCollapse, sider ])

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

    const ExpandedMenu = () => {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div onClick={() => redirectHome()} style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                    <img alt='logo_fi' src='/figroup/logo_small.png' />
                    <Typography style={{ color: 'white', marginLeft: '10px', minWidth: '121px' }}>Helping Ideas Grow</Typography>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '9px' }}>
                    <Button onClick={() => redirectRoute()} style={sharedButtonStyleExpanded} icon={<ProfileOutlined />}>Seleção de Empresas</Button>
                    <Button onClick={() => redirectToFileManager()} style={sharedButtonStyleExpanded} icon={<FolderOutlined />}>Gerenciamento de Documentos</Button>
                    <Button style={sharedButtonStyleExpanded} icon={<CalendarOutlined />}>Cronograma</Button>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '25px', flexDirection: 'column', height: '66vh' }}>
                    <Menu
                        style={{ background: '#0000a4', height: '66vh', overflowX: 'hidden' }}
                        color='white'
                        defaultSelectedKeys={[ '1' ]}
                        defaultOpenKeys={[ 'sub1' ]}
                        mode="inline"
                        items={appMenusMock}
                    />
                </div>

                <div style={{
                    width: '100%',
                    color: 'white',
                    margin: 'auto 0px 38px 0px',
                    height: '35px',
                    display: 'flex',
                }}>
                    <Typography style={{
                        borderRadius: '5px',
                        border: '1px solid',
                        justifyContent: 'center',
                        width: '100%',
                        margin: '0px 5px',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        cursor: 'pointer'
                    }} onClick={() => { setCollapsed(true); setAutoCollapse(true) }}><ArrowLeftOutlined />&nbsp;Collapse</Typography>
                </div>
            </div>
        )
    }

    const SharedButtonShrunk = ({ name, IconNode }: { name: string, IconNode: ReactNode }) => {
        return (
            <Tooltip title={name} placement='right'>
                <div style={{ width: '100%', height: '50px' }}>
                    <Button onClick={() => setCollapsed(false)} style={{ ...sharedButtonStyleShrunk, width: '100%', height: '100%' }} type='text' icon={IconNode}></Button>
                </div>
            </Tooltip>
        )
    }

    const ShrunkMenu = () => {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div onClick={() => redirectHome()} style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                    <img alt='logo_fi' src='/figroup/logo_small.png' />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                    <Tooltip title={'Seleção de Empresas'} placement='right'>
                        <Button onClick={() => redirectRoute()} style={sharedButtonStyleShrunk} icon={<ProfileOutlined />}></Button>
                    </Tooltip>
                    <Tooltip title={'Gerenciamento de Documentos'} placement='right'>
                        <Button onClick={() => redirectToFileManager()} style={sharedButtonStyleShrunk} icon={<FolderOutlined />}></Button>
                    </Tooltip>
                    <Tooltip title={'Cronograma'} placement='right'>
                        <Button style={sharedButtonStyleShrunk} icon={<CalendarOutlined />}></Button>
                    </Tooltip>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px', flexDirection: 'column', height: '66vh' }}>
                    {SharedButtonShrunk({ name: 'Análise Financeira', IconNode: <FileSearchOutlined /> })}
                    {SharedButtonShrunk({ name: 'Mapeamento', IconNode: <FundProjectionScreenOutlined /> })}
                    {SharedButtonShrunk({ name: 'Pleito de Solicitação', IconNode: <ImportOutlined /> })}
                    {SharedButtonShrunk({ name: 'Contratação', IconNode: <TeamOutlined /> })}
                    {SharedButtonShrunk({ name: 'Dossiês', IconNode: <CodeOutlined /> })}
                </div>

                <div style={{
                    width: '100%',
                    color: 'white',
                    margin: 'auto 0px 38px 0px',
                    height: '35px',
                    display: 'flex',
                }}>
                    <ArrowRightOutlined style={{
                        borderRadius: '5px',
                        border: '1px solid',
                        justifyContent: 'center',
                        width: '100%',
                        margin: '0px 5px',
                        cursor: 'pointer'
                    }} onClick={() => { setCollapsed(false); setAutoCollapse(false) }} />
                </div>
            </div>
        )
    }


    return (
        <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>

            {
                sider && <Sider ref={navRef as any} style={siderStyle} width={'290px'} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    {collapsed ? <ShrunkMenu /> : <ExpandedMenu />}
                </Sider>
            }

            <Layout>
                {
                    navbar && <Layout.Header style={{ padding: '0px', background: '#0000A4', position: 'sticky', top: '0', left: '0', zIndex: '800', height: '45px' }}>
                        <AppBar />
                    </Layout.Header>
                }

                <div style={{ height: '100%', width: '100%', padding: header || footer || sider || navbar ? '16px' : '0px', background: '#ebebeb' }}>
                    {easter ? <Ldm /> : children}
                </div>

                {
                    footer && <Layout.Footer style={{ textAlign: 'end', padding: '8px 40px', width: '100%', position: 'sticky', left: '0', bottom: '0', zIndex: '800', background: manifest().theme_color, minWidth: '800px' }}>
                        <FooterCustom />
                    </Layout.Footer>
                }

            </Layout>

        </Layout>
    );
}
