import { AppstoreAddOutlined, BellOutlined, LogoutOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons"
import { Button, Typography } from "antd"
import { useEffect, useState } from "react";
import TimeoutAuth from "../timer";
import manifest from "@/app/manifest";
import { useApp } from "@/hooks/app";
import { useAuth } from "@/hooks/auth";
import { useRouter } from "@/hooks/router";

export default function AppBar () {

    const { layout, updateLayout, setLoading } = useApp()
    const { user, signOut } = useAuth()
    const router = useRouter()

    const [ notificatios, setNotifications ] = useState([ '', [] ])

    const finalName = user.name ? user.name.split(' ').map((e) => e[ 0 ].toUpperCase() + e.slice(1).toLowerCase()).join(' ') : "Não Identificado"

    const redirectHelpDesk = () => {
        router.redirect(`https://br-helpdesk.fi-group.com/`)
    }

    const redirectFiConnect = () => {
        router.redirect(`https://connect.fi-group.com/identity/`)
    }

    const redirectControlPanel = () => {

        if (!new RegExp(/\/panel$/gm).test(location.href)) {
            setLoading(true)
        }

        router.push(`/panel`)
    }

    const getNotifications = () => {
        try {
            setNotifications([ "ERR", [] ])
        } catch (err: unknown) {
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
        <div style={{ height: '45px' }}>
            <div style={{ height: '45px', width: '100%', background: layout.sider ? manifest().theme_color : 'white' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', borderRadius: '25px 0px 0px 0px', background: 'white', gap: '15px' }}>

                    <Typography style={{ margin: '0px auto 0px 35px', color: '#00AEFF', fontSize: '23px', display: 'flex', fontWeight: 'bold' }}>
                        Lei<Typography style={{ color: '#00AEFF', fontSize: '23px', fontWeight: 'lighter' }}>do</Typography>Bem
                    </Typography>

                    <TimeoutAuth />

                    <Button onClick={() => redirectHelpDesk()} icon={<QuestionCircleOutlined />} type="text" iconPosition={'start'}>
                        Help Desk
                    </Button>

                    <Button onClick={() => redirectFiConnect()} icon={<AppstoreAddOutlined />} type="text" iconPosition={'start'}>
                        Apps FI Connect
                    </Button>

                    <Button onClick={() => redirectControlPanel()} icon={<SettingOutlined />} type="text" iconPosition={'start'}>
                        Painel de Controle
                    </Button>

                    <CreateBell />

                    <Typography style={{ marginRight: '15px', color: '#000000A6' }}>Olá, {finalName}</Typography>

                    <div onClick={() => 'user.signOut()'} style={{ boxShadow: 'rgba(0, 0, 0, 0.7) 1px 1px 11px 0px', padding: '0px 0px 0px 10px', width: '37px', background: 'red', height: '35px', borderRadius: '15px 0px 0px 15px', display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative' }}>
                        <LogoutOutlined style={{ color: 'white', fontSize: '20px' }} onClick={signOut} />
                    </div>
                </div>
            </div>
        </div>

    )
}