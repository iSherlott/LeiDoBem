
'use client'

import { useApp } from "@/hooks/app";
import { useCompany } from "@/hooks/company";
import { getStorage, setStorage } from "@/utils/storage";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { CSSProperties } from "react";

const sharedNoWrappableText: CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    width: '200px',
    display: 'block',
}

export default function CompanyHeaderSmall () {

    const company = useCompany()
    const { layout, updateLayout } = useApp()
    const { header_collapsed, sider_collapsed } = getStorage<PreferencesStorage>('Preferences')

    const updateHeaderVar = () => {
        setStorage({ header_collapsed: false }, "Preferences")
        updateLayout({ header: !layout.header })
    }

    const photo = company ? company.photoUrl !== null ? company.photoUrl : '/company/logo_placeholder.png' : '/company/logo_placeholder.png'

    return (
        <div className={company && !location.href.includes('/bypass') && (layout.header === false || header_collapsed) ? 'show-card' : 'hide-card'} style={{
            background: 'white',
            height: '80px',
            padding: '0px 15px',
            maxWidth: '460px',
            minWidth: '325px',
            width: 'max-content',
            margin: '-40px',
            gap: '15px',
            position: 'absolute',
            zIndex: '300',
            top: '35px',
            left: '210px',
            borderRadius: '0px 0px 15px 15px',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 500ms ease-in-out',
            boxShadow: '0px 10px 17px -10px #0000004f'
        }}>
            <img alt="company_logo" width={70} height={60} src={photo} style={{ borderRadius: '5px' }} />
            <div className="flex" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">CNPJ:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company?.cnpj}</Typography></div>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">Companhia:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company?.nickName}</Typography></div>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">Gestão:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{'nope'}</Typography></div>
            </div>
            <Button style={{ position: 'absolute', right: '5px', bottom: '5px', width: '110px', height: '22px', color: 'var(--pl-fade)', border: '1px solid #0000002b', fontSize: '10px', borderRadius: '6px 6px 12px 6px' }} onClick={updateHeaderVar} icon={<ArrowDownOutlined style={{ fontSize: '10px' }} />}>Expandir Header</Button>
        </div>
    )
}