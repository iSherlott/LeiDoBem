import { useApp } from "@/hooks/app"
import { ArrowUpOutlined, CalendarOutlined, EyeOutlined, ProfileOutlined } from "@ant-design/icons"
import { Button, Divider, Typography } from "antd"


export default function CompanyCard () {

    const { layout, updateLayout, company } = useApp()

    return (
        <div className={layout.header ? '' : 'hide-company-card'} style={{
            height: '240px',
            background: 'white',
            borderRadius: '8px',
            transition: 'height 250ms ease-in-out, width 250ms ease-in-out, transform 250ms ease-in-out',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', gap: '30px', padding: '20px', width: '100%', height: '100%' }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', minWidth: '250px', maxWidth: '250px' }}>

                    <div style={{ height: '160px', background: 'red', borderRadius: '8px' }}></div>
                    <Button style={{ height: '24px' }}>Editar Empresa</Button>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', width: '-webkit-fill-available' }}>
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px' }}><ProfileOutlined style={{ fontSize: '20px' }} />&nbsp;Companhia:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.name}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />
                    <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px' }}><ProfileOutlined style={{ fontSize: '20px' }} />&nbsp;CNPJ:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.cnpj}</Typography></Typography>
                    <Divider style={{ margin: '12px 0px' }} />

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px' }}><ProfileOutlined style={{ fontSize: '20px' }} />&nbsp;Gestão:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.name}</Typography></Typography>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px' }}><ProfileOutlined style={{ fontSize: '20px' }} />&nbsp;Apuração:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.name}</Typography></Typography>
                    </div>

                    <div style={{ display: 'grid', gridTemplate: ' "a b" auto / 1fr 1fr', margin: 'auto 0px', height: '100%' }}>
                        <Typography style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '15px' }}><CalendarOutlined style={{ fontSize: '20px' }} />&nbsp;Ano Base:&nbsp;<Typography style={{ fontSize: '18px' }}>{company.cnpj}</Typography></Typography>
                        <div style={{ height: '100%', padding: '10px 0px 0px 50px' }}>
                            <Button style={{ width: '100%', height: '100%' }} onClick={() => updateLayout({ header: !layout.header })}>Minimizar Header <ArrowUpOutlined /></Button>
                        </div>
                    </div>

                </div>

                <div style={{ border: '1px solid #00000033', borderRadius: '8px', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center', maxWidth: '380px', minWidth: 'fit-content' }}>
                    <EyeOutlined style={{ alignSelf: 'end' }} />
                    <Typography style={{ marginTop: 'auto', color: '#00000073', fontSize: '16px' }}>Total de Dispêndio</Typography>
                    <Typography style={{ marginBottom: 'auto', color: '#000000E0', fontSize: '32px', textWrap: 'nowrap' }}>R$ 0</Typography>
                </div>

            </div>

        </div>
    )
}