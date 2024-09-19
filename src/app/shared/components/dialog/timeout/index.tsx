import { AuthContextProps } from 'oidc-react';
import React from 'react';
import AntDialog from '../dialog';
import { Button, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

interface ShowModalTimeoutProps {
    show: boolean,
    toggleShow: () => void,
    minutes: number,
    seconds: number,
    updateTimeout: (situation: boolean) => void,
    auth: AuthContextProps
}

const ModalTimeout = ({ show, toggleShow, minutes, seconds, updateTimeout, auth }: ShowModalTimeoutProps) => {
    const handleClose = () => {
        updateTimeout(true);
        toggleShow();
    }

    const loginHandleClose = () => {
        auth.signOutRedirect();
        window.location.href = process.env.REACT_APP_PROVIDER ?? "";
        toggleShow();
    }

    return (
        <AntDialog open={show} setOpen={toggleShow}>
            <AntDialog.Header>
                <Typography>Timeout</Typography>
            </AntDialog.Header>
            <AntDialog.Body>
                {seconds == 0 && minutes == 0 ?
                    <span>Você foi deslogado! por favor, faça seu login novamente!</span>
                    :
                    <span>Eiii!! Tem alguém aí?! O tempo está acabando! se não fizer alguma ação, será deslogado!</span>
                }
                <div className='mt-3 d-flex align-items-center justify-content-center countdown-time-red'>
                    <ClockCircleOutlined size={30} className='me-1' />
                    <span id="minute">{minutes < 10 ? "0" + minutes : minutes}:</span>
                    <span id="second">{seconds < 10 ? "0" + seconds : seconds}</span>
                </div>
            </AntDialog.Body>
            <AntDialog.Footer>
                {seconds == 0 && minutes == 0 ?
                    <Button className='btn btn-primary w-100' onClick={loginHandleClose}>
                        Fazer Login
                    </Button>
                    :
                    <Button className='btn btn-primary w-100' onClick={handleClose}>
                        Estou Aqui!
                    </Button>
                }
            </AntDialog.Footer>
        </AntDialog>
    )
}

export default ModalTimeout;