
'use client'

import { Button, Menu, Tooltip, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import {
    CalendarOutlined,
    CodeOutlined,
    FileSearchOutlined,
    FolderOutlined,
    FundProjectionScreenOutlined,
    ImportOutlined,
    MenuFoldOutlined,
    ProfileOutlined,
    TeamOutlined
} from '@ant-design/icons';
import manifest from '@/app/manifest';
import { appMenusMock } from '@/layouts/app.mock';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useApp } from '@/app/app';
import { getStorage, setStorage } from '@/utils/sessionStorage';

const sharedFixedButtonsExpandedStyle: CSSProperties = {
    background: '#FFFFFF',
    color: 'black',
    marginBottom: '6px'
}

const sharedButtonStyleShrunk: CSSProperties = {
    background: '#0000A4',
    color: 'white',
    width: '100%',
    marginBottom: '6px'
}

const sharedFixedButtonsStyle: CSSProperties = {
    background: '#FFFFFF',
    color: 'black',
    width: '100%',
    marginBottom: '6px'
}

const siderStyle: CSSProperties = {
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    left: 0,
    zIndex: 800,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    overflow: 'hidden',
    background: manifest().theme_color
};

export default function CustomSider () {

    const router = useRouter()
    const { layout } = useApp()

    const { preferences } = getStorage()

    const prefCollapsed = preferences?.sider_collapsed

    const [ collapsed, setCollapsed ] = useState<boolean>(prefCollapsed!);
    const [ autoCollapse, setAutoCollapse ] = useState<boolean>(prefCollapsed!);

    const setPrefAutoCollapse = (val: boolean) => {
        setStorage({ preferences: { sider_collapsed: val } })
        setAutoCollapse(val)
    }

    const navRef = useRef<HTMLElement>(null);

    const redirectBypass = () => {
        router.push(`/bypass`)
    }

    const redirectToFileManager = () => {
        router.push(`/fileManager/${'none'}`)
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
    }, [ autoCollapse, layout.sider ])

    const expandedMenu = (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

            <div style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                <Image width={25} height={30} alt='logo_fi' src='/figroup/logo_small.png' />
                <Typography style={{ color: 'white', marginLeft: '10px', minWidth: '121px' }}>Helping Ideas Grow</Typography>
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

            <div style={{ display: 'flex', flexDirection: 'column', margin: '9px' }}>
                <Button onClick={redirectBypass} style={sharedFixedButtonsExpandedStyle} icon={<ProfileOutlined />}>Seleção de Empresas</Button>
                <Button onClick={() => redirectToFileManager()} style={sharedFixedButtonsExpandedStyle} icon={<FolderOutlined />}>Gerenciamento de Documentos</Button>
                <Button style={sharedFixedButtonsExpandedStyle} icon={<CalendarOutlined />}>Cronograma</Button>
            </div>

            <div style={{
                width: '100%',
                color: 'white',
                margin: 'auto 0px 0px 0px',
                height: '42px',
                display: 'flex',
            }}>
                <Typography style={{
                    width: '100%',
                    borderTop: '1px solid',
                    padding: '0px 20px',
                    gap: '5px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    height: '41px',
                    textWrap: 'nowrap',
                    color: 'white',
                    cursor: 'pointer'
                }} onClick={() => { setCollapsed(true); setPrefAutoCollapse(true) }}><MenuFoldOutlined />&nbsp;Ocultar</Typography>
            </div>

        </div>
    )

    const SharedButtonShrunk = ({ name, IconNode }: { name: string, IconNode: ReactNode }) => {
        return (
            <Tooltip title={name} placement='right'>
                <div style={{ width: '100%', height: '50px' }}>
                    <Button onClick={() => setCollapsed(false)} style={{ ...sharedButtonStyleShrunk, width: '100%', height: '100%' }} type='text' icon={IconNode}></Button>
                </div>
            </Tooltip>
        )
    }

    const shrunkMenu = (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

            <div style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                <Image width={25} height={30} alt='logo_fi' src='/figroup/logo_small.png' />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px', flexDirection: 'column', height: '66vh' }}>
                {SharedButtonShrunk({ name: 'Análise Financeira', IconNode: <FileSearchOutlined /> })}
                {SharedButtonShrunk({ name: 'Mapeamento', IconNode: <FundProjectionScreenOutlined /> })}
                {SharedButtonShrunk({ name: 'Pleito de Solicitação', IconNode: <ImportOutlined /> })}
                {SharedButtonShrunk({ name: 'Contratação', IconNode: <TeamOutlined /> })}
                {SharedButtonShrunk({ name: 'Dossiês', IconNode: <CodeOutlined /> })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                <Tooltip title={'Seleção de Empresas'} placement='right'>
                    <Button onClick={redirectBypass} style={sharedFixedButtonsStyle} icon={<ProfileOutlined />}></Button>
                </Tooltip>
                <Tooltip title={'Gerenciamento de Documentos'} placement='right'>
                    <Button onClick={() => redirectToFileManager()} style={sharedFixedButtonsStyle} icon={<FolderOutlined />}></Button>
                </Tooltip>
                <Tooltip title={'Cronograma'} placement='right'>
                    <Button style={sharedFixedButtonsStyle} icon={<CalendarOutlined />}></Button>
                </Tooltip>
            </div>

            <div style={{
                width: '100%',
                color: 'white',
                margin: 'auto 0px 0px 0px',
                height: '42px',
                display: 'flex',
            }}>
                <MenuFoldOutlined style={{
                    justifyContent: 'center',
                    width: '100%',
                    height: '41px',
                    borderTop: '1px solid',
                    cursor: 'pointer'
                }} onClick={() => { setCollapsed(false); setPrefAutoCollapse(false) }} />
            </div>
        </div>
    )

    return (
        <Sider ref={navRef as never} className={layout.sider ? collapsed ? 'width-sider' : '' : 'hide-width'} style={siderStyle} width={'290px'} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            {collapsed ? shrunkMenu : expandedMenu}
        </Sider>
    )
}