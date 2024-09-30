import { AppstoreAddOutlined, BellOutlined, CaretRightOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Typography } from "antd"
import { useEffect, useState } from "react";
import TimeoutAuth from "../timer";
import { useAppAuth } from "@/hooks/auth";
import { useApp } from "@/hooks/app";
import manifest from "@/app/manifest";

export default function AppBar () {

    const user = useAppAuth()
    const { sider } = useApp()

    const [ notificatios, setNotifications ] = useState([ '', [] ])

    const finalName = user ? user.name.split(' ').map((e) => e[ 0 ].toUpperCase() + e.slice(1).toLowerCase()).join(' ') : "Não Identificado"

    const redirectHelpDesk = () => {
        window.location.href = `https://br-helpdesk.fi-group.com/`
    }

    const redirectFiConnect = () => {
        window.location.href = `https://connect.fi-group.com/identity/`
    }

    const redirectControlPanel = () => {
        // FIXME - ADD NEW ROUTE
        return
    }

    const getNotifications = () => {
        // FIXME - NOT IMPLEMENTED
        try {
            throw { error: 'error' }
        } catch (err) {
            setNotifications([ "ERR", [] ])
        }
    }

    const handleEventClickOutside = (event: MouseEvent) => {
        return
    }

    useEffect(() => {
        getNotifications()

        document.addEventListener('click', handleEventClickOutside, true);

        return () => {
            document.removeEventListener('click', handleEventClickOutside, true);
        };
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

            <div style={{ height: '45px', width: '100%', minWidth: '800px', background: sider ? manifest().theme_color : 'white' }}>

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

                    <Button icon={<UserOutlined />} type="text" iconPosition={'start'}>
                        {finalName}
                    </Button>

                    <div onClick={() => user.signOut()} style={{ padding: '0px 0px 0px 10px', width: '65px', background: 'red', height: '100%', borderRadius: '15px 0px 0px 15px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', position: 'relative' }}>
                        <Typography style={{ fontWeight: 'bold', color: 'white' }}>Sair</Typography>
                        <CaretRightOutlined style={{ color: 'white', fontSize: '16px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}