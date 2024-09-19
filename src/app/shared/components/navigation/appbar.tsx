import { AppstoreAddOutlined, BellOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Divider, Typography } from "antd"
import { useEffect, useRef, useState } from "react";
import TimeoutAuth from "../timer";
import ModalConfidentialTerm from "../termsOfService";
import Link from "next/link";

export default function AppBar ({ hideNavigation }: { hideNavigation?: boolean }) {

    const [ viewProfile, setViewProfile ] = useState(false)
    const [ viewTerms, setViewTerms ] = useState(false)

    const cardRef = useRef<never>(null);
    const finalName = "Não Identificado"

    const [ notificatios, setNotifications ] = useState([ '', [] ])

    const Logout = () => {
        return
    }

    const redirectHelpDesk = () => {
        window.location.href = `https://br-helpdesk.fi-group.com/`
    }

    const redirectFiConnect = () => {
        window.location.href = `https://connect.fi-group.com/identity/`
    }

    const redirectControlPanel = () => {
        return
    }

    const getNotifications = () => {
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

    const CreateCardUser = () => {
        return (
            <div className={viewProfile ? 'visible-profile' : 'invisible-profile'} ref={cardRef} style={{
                margin: '15px',
                display: 'flex',
                position: 'absolute',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'white',
                borderRadius: '15px',
                width: '240px',
                inset: `${viewProfile ? '37px' : '-999px'} 0px auto auto`,
                transition: 'opacity 200ms ease-in-out'
            }}>
                <Link onClick={() => setViewProfile(false)} href={`/`} style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                    <img style={{ objectFit: 'fill', height: '150px', borderRadius: '150px', margin: '15px', width: '150px', border: '1px solid rgba(5, 5, 5, 0.06)' }} src={'thirdparty/avatar.png'} alt="logo" />
                    <Typography style={{ fontWeight: 'bolder', margin: '0px 0px 10px 0px' }}>{finalName}</Typography>
                </Link>
                <Divider style={{ margin: '0px 0px' }} />
                <Typography onClick={() => { setViewTerms(!viewTerms); setViewProfile(false) }} style={{ margin: '5px 0px', cursor: 'pointer' }}>Termos e Condições de Uso</Typography>
                <div style={{ width: '100%', height: '100%', textAlign: 'center', borderRadius: '0px 0px 15px 15px', backgroundColor: '#ff4d4f' }}>
                    <Typography onClick={() => Logout()} style={{ margin: '5px 0px 5px 0px', fontWeight: 'bolder', color: 'white', cursor: 'pointer' }}>Sair</Typography>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ModalConfidentialTerm show={viewTerms} toggleShow={() => setViewTerms(!viewTerms)} />

            <div style={{ height: '45px', width: '100%' }}>

                {CreateCardUser()}

                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', borderRadius: hideNavigation ? '0px' : '25px 0px 0px 0px', background: 'white' }}>

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

                    {/* <CreateBell /> */}

                    <Button onClick={(e) => { e.preventDefault(); setViewProfile(!viewProfile) }} icon={<UserOutlined />} style={{ marginRight: '15px' }} type="text" iconPosition={'start'}>
                        {finalName}
                    </Button>
                </div>
            </div>
        </div>
    )
}