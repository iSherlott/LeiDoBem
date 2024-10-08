import { AppstoreAddOutlined, ArrowDownOutlined, BellOutlined, CaretRightOutlined, DownOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Button, Divider, Typography } from "antd"
import { CSSProperties, useEffect, useState } from "react";
import TimeoutAuth from "../timer";
import { useAppAuth } from "@/hooks/auth";
import { useApp } from "@/hooks/app";
import manifest from "@/app/manifest";
import { useRouter } from "next/navigation";

const sharedNoWrappableText: CSSProperties = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textWrap: 'nowrap',
    width: '270px',
    display: 'block',
}

export default function AppBar () {

    const user = useAppAuth()
    const { layout, company, updateLayout } = useApp()
    const router = useRouter()

    const [ notificatios, setNotifications ] = useState([ '', [] ])

    const finalName = user ? user.name.split(' ').map((e) => e[ 0 ].toUpperCase() + e.slice(1).toLowerCase()).join(' ') : "Não Identificado"

    const redirectHelpDesk = () => {
        router.push(`https://br-helpdesk.fi-group.com/`)
    }

    const redirectFiConnect = () => {
        router.push(`https://connect.fi-group.com/identity/`)
    }

    const redirectControlPanel = () => {
        router.push(`/panel`)
    }

    const getNotifications = () => {
        // FIXME - NOT IMPLEMENTED
        try {
            throw { error: 'error' }
        } catch (err) {
            setNotifications([ "ERR", [] ])
        }
    }

    useEffect(() => {
        getNotifications()
    }, [])

    const CreateBell = () => {
        return (
            <div style={{ width: '50px', margin: '0px 0px 0px 18px', display: 'flex' }}>
                {notificatios[ 0 ] === '' ? <></> : <BellOutlined style={{ fontSize: '20px' }} />}
                <div style={{
                    background: '#ff4d4f',
                    borderRadius: '15px',
                    position: 'relative',
                    left: '-13px',
                    top: '-5px',
                    height: '19px',
                    border: '1px solid',
                    borderColor: 'white',
                    width: '27px'
                }}>
                    <Typography style={{ fontSize: '10px', color: 'white', textAlign: 'center' }}>{notificatios[ 0 ]}</Typography>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div style={{ height: '45px', width: '100%', background: layout.sider ? manifest().theme_color : 'white' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', borderRadius: '25px 0px 0px 0px', background: 'white', gap: '15px' }}>

                    <TimeoutAuth />

                    <Button onClick={() => redirectHelpDesk()} icon={<QuestionCircleOutlined />} type="text" iconPosition={'start'}>
                        Help Desk
                    </Button>

                    <Button onClick={() => redirectFiConnect()} icon={<AppstoreAddOutlined />} type="text" iconPosition={'start'}>
                        FI Connect
                    </Button>

                    <Button onClick={() => redirectControlPanel()} icon={<SettingOutlined />} type="text" iconPosition={'start'}>
                        Painel de Controle
                    </Button>

                    <CreateBell />

                    <Typography style={{ marginRight: '15px' }}>Olá, {finalName}</Typography>

                    <div onClick={() => user.signOut()} style={{ padding: '0px 0px 0px 10px', width: '65px', background: 'red', height: '55px', borderRadius: '15px 0px 0px 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', position: 'relative' }}>
                        <Typography style={{ fontWeight: 'bold', color: 'white' }}>Sair</Typography>
                        <CaretRightOutlined style={{ color: 'white', fontSize: '16px' }} />
                    </div>
                </div>
            </div>

            <div className={company.id && layout.header === false ? 'show-card' : 'hide-card'} style={{
                background: 'white',
                height: '70px',
                padding: '0px 25px',
                maxWidth: '500px',
                minWidth: '325px',
                width: 'max-content',
                gap: '15px',
                position: 'relative',
                top: '-50px',
                left: '120px',
                borderRadius: '0px 0px 15px 15px',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 500ms ease-in-out',
                boxShadow: '0px 10px 17px -10px rgba(0,0,0,0.55)'
            }}>
                <img src={company.photoUrl !== '' ? company.photoUrl : '/company/logo_placeholder.png'} style={{ width: '40px', height: '40px', borderRadius: '5px' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}><Typography style={{ fontSize: '11px', fontWeight: 'bold' }}>Ano:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.name}</Typography></div>
                    <div style={{ display: 'flex' }}><Typography style={{ fontSize: '11px', fontWeight: 'bold' }}>CNPJ:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.cnpj}</Typography></div>
                    <div style={{ display: 'flex' }}><Typography style={{ fontSize: '11px', fontWeight: 'bold' }}>Nome:&nbsp;</Typography><Typography style={{ fontSize: '11px', ...sharedNoWrappableText }}>{company.nickname}</Typography></div>
                </div>
                <Divider type="vertical" />
                <Button onClick={() => updateLayout({ header: !layout.header })} icon={<DownOutlined style={{ fontSize: '11px' }} />}></Button>
            </div>
        </div>

    )
}