
'use client'

import { useApp } from "@/app/app";
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
    const { header_collapsed } = getStorage<PreferencesStorage>('Preferences')

    const updateHeaderVar = () => {
        setStorage({ header_collapsed: false }, "Preferences")
        updateLayout({ header: !layout.header })
    }

    return (
        <div className={company.id && !location.href.includes('/bypass') && (layout.header === false || header_collapsed) ? 'show-card' : 'hide-card'} style={{
            background: 'white',
            height: '80px',
            padding: '0px 15px',
            maxWidth: '460px',
            minWidth: '325px',
            width: 'max-content',
            margin: '-40px',
            gap: '15px',
            position: 'relative',
            top: '-25px',
            left: '180px',
            borderRadius: '0px 0px 15px 15px',
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 500ms ease-in-out',
            boxShadow: '0px 10px 17px -10px rgba(0,0,0,0.55)'
        }}>
            {
                company.photoUrl !== ''
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img alt="company_logo" width={60} height={60} src={company.photoUrl!} style={{ borderRadius: '5px' }} />
                    : <div className="cmn-border-radius" style={{ width: '60px', height: '60px', background: 'var(--pl-fi-gradient)' }}></div>
            }
            <div className="flex" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">CNPJ:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.cnpj}</Typography></div>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">Companhia:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.nickname}</Typography></div>
                <div className="flex" style={{ height: '18px' }}><Typography className="font bold">Gestão:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.name}</Typography></div>
            </div>
            <Button style={{ position: 'absolute', right: '12px', bottom: '8px', width: '110px', height: '22px', color: 'var(--pl-fade)', border: '2px solid #0000002b', fontSize: '10px' }} onClick={updateHeaderVar} icon={<ArrowDownOutlined style={{ fontSize: '10px' }} />}>Expandir Header</Button>
        </div>
    )
}