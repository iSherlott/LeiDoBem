
'use client'

import { useApp } from "@/hooks/app"
import { useCompany } from "@/hooks/company"
import { getStorage, setStorage } from "@/utils/storage"
import { ArrowUpOutlined, CalendarOutlined, EditOutlined, EyeInvisibleOutlined, EyeOutlined, ProfileOutlined } from "@ant-design/icons"
import { Button, Divider, Select, Typography } from "antd"
import Image from "next/image"
import { useState } from "react"


export default function CompanyHeaderNormal () {

    const { layout, updateLayout } = useApp()
    const company = useCompany()

    const { header_collapsed: _header_collapsed, expenses_hide: _expenses_hide } = getStorage<PreferencesStorage>('Preferences')

    let header_collapsed = _header_collapsed;
    let expenses_hide = _expenses_hide;

    if (header_collapsed === undefined) {
        setStorage<PreferencesStorage>({ header_collapsed: false }, 'Preferences')
        header_collapsed = false;
    }

    if (expenses_hide === undefined) {
        setStorage<PreferencesStorage>({ expenses_hide: false }, 'Preferences')
        expenses_hide = false;
    }

    const [ hide, setHide ] = useState<boolean>(expenses_hide)

    const setHideHeader = () => {
        setStorage({ header_collapsed: true }, "Preferences")
        updateLayout({ header: !layout.header })
    }

    const setHideExpenses = () => {
        setStorage({ expenses_hide: !hide }, "Preferences")
        setHide(!hide)
    }

    return (
        <div className={layout.header && header_collapsed === false ? '' : 'hide-company-card'} style={{
            height: '240px',
            background: 'white',
            borderRadius: '8px',
            transition: 'height 250ms ease-in-out, width 250ms ease-in-out, transform 250ms ease-in-out',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', gap: '30px', padding: '20px', width: '100%', height: '100%' }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', minWidth: '250px', maxWidth: '250px' }}>

                    <Image alt="company_logo" width={250} height={160} src={'/company/logo_placeholder.png'} style={{ borderRadius: '5px' }} />
                    <Button style={{ height: '24px', color: '#0000A4', border: '1px solid #0000A4' }} icon={<EditOutlined />}>Editar Empresa</Button>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '-webkit-fill-available' }}>
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Companhia:&nbsp;<Typography style={{ fontSize: '18px' }}>{company?.nickName}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;CNPJ:&nbsp;<Typography style={{ fontSize: '18px' }}>{company?.cnpj}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Gestão:&nbsp;<Typography style={{ fontSize: '18px' }}>{'nope'}</Typography></Typography>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Apuração:&nbsp;<Typography style={{ fontSize: '18px' }}>{'nope'}</Typography></Typography>
                    </div>

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr', margin: 'auto 0px', height: '100%' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}>
                            <CalendarOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Ano Base:&nbsp;
                            <Select options={[ { value: '2024', label: '2024' } ]} defaultValue={'2024'}></Select>
                        </Typography>
                        <div style={{ height: '100%', width: '100%', display: 'flex' }}>
                            <Button style={{ width: '200px', height: '45px', color: '#000000A6', margin: 'auto 0px 0px auto' }} onClick={setHideHeader}>Minimizar Header <ArrowUpOutlined /></Button>
                        </div>
                    </div>

                </div>

                <div style={{ border: '1px solid #00000033', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center', maxWidth: '380px', minWidth: 'fit-content' }}>
                    {
                        hide
                            ? <EyeOutlined onClick={setHideExpenses} style={{ alignSelf: 'end', cursor: 'pointer', height: '20px', width: 'auto' }} />
                            : <EyeInvisibleOutlined onClick={setHideExpenses} style={{ alignSelf: 'end', cursor: 'pointer', height: '20px', width: 'auto' }} />
                    }
                    <Typography className="greyed" style={{ marginTop: 'auto', fontSize: '16px' }}>Total de Dispêndio</Typography>
                    <Typography style={{ marginBottom: 'auto', color: '#000000E0', fontSize: '32px', textWrap: 'nowrap', fontWeight: 'bold' }}>R$ {hide ? '●●●●●●●●' : '16.000.000'}</Typography>
                </div>

            </div>

        </div>
    )
}