
'use client'

import { useApp } from "../hooks/app";
import { Button, Layout, Menu, MenuProps, Tooltip, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { CSSProperties, ReactNode, useState } from 'react';
import {
    ApartmentOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    BuildOutlined,
    CalendarOutlined,
    CodeOutlined,
    FileSearchOutlined,
    FolderOutlined,
    FundProjectionScreenOutlined,
    FundViewOutlined,
    GroupOutlined,
    ImportOutlined,
    InfoCircleOutlined,
    MoneyCollectOutlined,
    ProfileOutlined,
    RadarChartOutlined,
    TeamOutlined
} from '@ant-design/icons';
import Link from "next/link";
import { redirect } from "next/navigation";
import AppBar from "@/shared/components/navigation/appbar";

import "@styles/reset.css";
import "@styles/variables.css";
import "@styles/animations.css";
import "@styles/globals.css";
import manifest from "@/app/manifest";

type MenuItem = Required<MenuProps>[ 'items' ][ number ];

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

    const [ collapsed, setCollapsed ] = useState(true);
    const { header, footer, sider, navbar } = useApp()

    const redirectRoute = () => {
        redirect(`/`)
    }

    const redirectHome = () => {
        redirect(`/home/${'none'}`)
    }

    const redirectToFileManager = () => {
        redirect(`/fileManager/${'none'}`)
    }

    const items: MenuItem[] = [
        {
            key: 'menu1',
            label: <Link href={`/financialAnalysis/${'none'}`}>Análise Financeira</Link>,
            icon: <FileSearchOutlined />,
        },
        {
            key: 'menu2',
            label: 'Mapeamento',
            icon: <FundProjectionScreenOutlined />,
            children: [
                {
                    key: 'menu21',
                    label: <Link href={`/grantsSearcher/${'none'}`}>Buscador de Linhas</Link>,
                    icon: <BuildOutlined />
                },
                {
                    key: 'menu22',
                    label: <Link href={`/projectInformation/${'none'}`}>Identificação de Projeto</Link>,
                    icon: <InfoCircleOutlined />
                },
                {
                    key: 'menu23',
                    label: <Link href={`/projectGrouping/${'none'}`}>Agrupamento de Projetos</Link>,
                    icon: <GroupOutlined />
                },
                {
                    key: 'menu24',
                    label: <Link href={`/recommendations/${'none'}`}>Recomendação (Match)</Link>,
                    icon: <ApartmentOutlined />
                },
                {
                    key: 'menu25',
                    label: <Link href={`/opportunitiesPanels/${'none'}`}>Painel de Oportunidades</Link>,
                    icon: <FundViewOutlined />,
                },
            ],
        },
        {
            key: 'menu3',
            label: 'Pleito de Solicitação',
            icon: <ImportOutlined />,
            children: [
                {
                    key: 'menu31',
                    label: <Link href={`/plea/financial/list/${'none'}`}>Pleito técnico e Financeiro</Link>,
                    icon: <FileSearchOutlined />
                },
            ],
        },
        {
            key: 'menu4',
            label: 'Contratação',
            icon: <TeamOutlined />,
            children: [
                {
                    key: 'menu41',
                    label: 'Prestação de Contas',
                    disabled: true,
                    icon: <MoneyCollectOutlined />
                },
            ],
        },
        {
            key: 'menu5',
            label: 'Dossiês',
            icon: <CodeOutlined />,
            children: [
                {
                    key: 'menu51',
                    label: 'Dossiê Digital',
                    disabled: true,
                    icon: <RadarChartOutlined />
                },
            ],
        },
    ];

    const ExpandedMenu = () => {
        return (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                <div onClick={() => redirectHome()} style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                    <img alt='logo_fi' src='figroup/logos_small.png' />
                    <Typography style={{ color: 'white', marginLeft: '10px' }}>Helping Ideas Grow</Typography>
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
                        items={items}
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
                    }} onClick={() => setCollapsed(!collapsed)}><ArrowLeftOutlined />&nbsp;Collapse</Typography>
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
                    <img alt='logo_fi' src='figroup/logos_small.png' />
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
                    }} onClick={() => setCollapsed(!collapsed)} />
                </div>
            </div>
        )
    }


    return (
        <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>

            {
                sider && <Sider style={siderStyle} width={'290px'} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    {collapsed ? <ShrunkMenu /> : <ExpandedMenu />}
                </Sider>
            }

            <Layout>
                {
                    navbar && <Layout.Header style={{ padding: '0px', background: '#0000A4', position: 'sticky', top: '0', left: '0', zIndex: '999', height: '45px' }}>
                        <AppBar />
                    </Layout.Header>
                }

                <div style={{ height: '100%', width: 'calc(100% - 32px)', margin: '16px' }}>
                    {children}
                </div>

                {
                    footer && <Layout.Footer style={{ textAlign: 'end', padding: '8px 40px', width: '100%', position: 'sticky', left: '0', bottom: '0', zIndex: '999', background: manifest().theme_color, minWidth: '800px' }}>
                        <Typography style={{ color: 'white' }}>Copyright {new Date().getFullYear()} FI Group all rights reserved. - Term of Use - Privacy - Cookie Policy - Compliance FI Group</Typography>
                    </Layout.Footer>
                }

            </Layout>

        </Layout>
    );
}
