
'use client'

import { Button, Menu, Tooltip, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import {
    MenuFoldOutlined,
} from '@ant-design/icons';
import manifest from '@/app/manifest';
import Image from 'next/image';
import { useApp } from '@/hooks/app';
import { getStorage, setStorage } from '@/utils/storage';
import { appMenusMock } from './sider.mock';
import SiderFixedButtons from './buttons/fixed';
import { useRouter } from '@/hooks/router';

const sharedButtonStyleShrunk: CSSProperties = {
    background: '#0000A4',
    color: 'white',
    width: '100%',
    marginBottom: '6px'
}

const siderStyle: CSSProperties = {
    height: '100vh',
    position: 'sticky',
    zIndex: 300,
    insetInlineStart: 0,
    top: 0,
    left: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
    overflow: 'hidden',
    background: manifest().theme_color
};

export default function CustomSider () {

    const { layout } = useApp()
    const router = useRouter()

    const { sider_collapsed } = getStorage<PreferencesStorage>('Preferences')

    let sider_auto_collapsed = sider_collapsed;

    if (sider_auto_collapsed === undefined) {
        setStorage<PreferencesStorage>({ sider_collapsed: true }, 'Preferences')
        sider_auto_collapsed = true;
    }

    const [ collapsed, setCollapsed ] = useState<boolean>(sider_auto_collapsed);
    const [ autoCollapse, setAutoCollapse ] = useState<boolean>(sider_auto_collapsed);

    const setPrefAutoCollapse = (val: boolean) => {
        setStorage<PreferencesStorage>({ sider_collapsed: val }, 'Preferences')
        setAutoCollapse(val)
    }

    const navRef = useRef<HTMLElement>(null);

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

    const SharedButtonShrunk = ({ name, IconNode, path }: { name: string, IconNode: ReactNode, path: string }) => {
        return (
            <Tooltip title={name} placement='right'>
                <Button onClick={() => setCollapsed(false)} style={{ ...sharedButtonStyleShrunk, width: '100%', height: '50px', background: location.href.includes(path) ? '#0c3cc0' : '#0000A4', borderRadius: '0px' }} type='text' icon={IconNode}></Button>
            </Tooltip>
        )
    }

    const SharedButton = () => {
        return (
            appMenusMock().map((e) => {
                return {
                    key: e.key,
                    label: <Typography onClick={() => router.redirect(e.path)} style={{ color: 'white' }}>{e.label}</Typography>,
                    icon: e.icon,
                    style: { background: location.href.includes(e.path) ? '#0c3cc0' : '#0000A4' }
                }
            })
        )
    }

    return (
        <Sider ref={navRef as never} className={layout.sider ? collapsed ? 'width-sider' : '' : 'hide-width'} style={siderStyle} width={'290px'} trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>

                {
                    collapsed
                        ? <div style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                            <Image width={25} height={30} alt='logo_fi' src='/figroup/logo_small.png' />
                        </div>
                        : <div style={{ height: '75px', justifyContent: 'center', alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                            <Image width={25} height={30} alt='logo_fi' src='/figroup/logo_small.png' />
                            <Typography style={{ color: 'white', marginLeft: '10px', minWidth: '121px' }}>Helping Ideas Grow</Typography>
                        </div>
                }

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px', flexDirection: 'column', height: '66vh' }}>
                    {
                        collapsed
                            ? appMenusMock().map((e) => {
                                return SharedButtonShrunk({ name: e.label, IconNode: e.icon, path: e.path })
                            })
                            : <Menu
                                style={{ background: '#0000a4', height: '66vh', overflowX: 'hidden' }}
                                color='white'
                                mode="inline"
                                items={SharedButton()}
                            />
                    }
                </div>

                <SiderFixedButtons collapsed={collapsed} />

                {
                    collapsed
                        ? <div style={{
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
                        : <div style={{
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
                }
            </div>
        </Sider>
    )
}