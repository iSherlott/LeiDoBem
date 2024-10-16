import { useApp } from "@/hooks/app"
import { getSession, setSession } from "@/utils/sessionStorage"
import { ArrowUpOutlined, CalendarOutlined, EditOutlined, EyeInvisibleOutlined, EyeOutlined, ProfileOutlined } from "@ant-design/icons"
import { Button, Divider, Select, Typography } from "antd"
import Image from "next/image"
import { useState } from "react"


export default function CompanyCard () {

    const { layout, updateLayout, company } = useApp()

    const { preferences } = getSession()

    const [ hide, setHide ] = useState<boolean>(preferences?.header_collapsed ? preferences.header_collapsed : false)

    const setHideHeader = () => {
        setSession({ preferences: { header_collapsed: true } })
        updateLayout({ header: !layout.header })
    }

    return (
        <div className={layout.header && !preferences?.header_collapsed ? '' : 'hide-company-card'} style={{
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
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Companhia:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.nickname}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;CNPJ:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.cnpj}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Gestão:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.name}</Typography></Typography>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}><ProfileOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Apuração:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.name}</Typography></Typography>
                    </div>

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr', margin: 'auto 0px', height: '100%' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px', color: '#00000094' }}>
                            <CalendarOutlined style={{ fontSize: '20px', color: '#00000094' }} />&nbsp;Ano Base:&nbsp;
                            <Select options={[ { value: '2024', label: '2024' } ]} defaultValue={'2024'}></Select>
                        </Typography>
                        <div style={{ height: '100%', padding: '10px 0px 0px 50px' }}>
                            <Button style={{ width: '100%', height: '100%', color: '#000000A6' }} onClick={setHideHeader}>Minimizar Header <ArrowUpOutlined /></Button>
                        </div>
                    </div>

                </div>

                <div style={{ border: '1px solid #00000033', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center', maxWidth: '380px', minWidth: 'fit-content' }}>
                    {
                        hide
                            ? <EyeOutlined onClick={() => setHide(!hide)} style={{ alignSelf: 'end', cursor: 'pointer', height: '20px', width: 'auto' }} />
                            : <EyeInvisibleOutlined onClick={() => setHide(!hide)} style={{ alignSelf: 'end', cursor: 'pointer', height: '20px', width: 'auto' }} />
                    }
                    <Typography style={{ marginTop: 'auto', color: '#00000073', fontSize: '16px' }}>Total de Dispêndio</Typography>
                    <Typography style={{ marginBottom: 'auto', color: '#000000E0', fontSize: '32px', textWrap: 'nowrap', fontWeight: 'bold' }}>R$ {hide ? '●●●●●●●●' : '16.000.000'}</Typography>
                </div>

            </div>

        </div>
    )
}