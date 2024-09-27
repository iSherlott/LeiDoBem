import { AuthContextProps } from 'oidc-react';
import React, { useState } from 'react';
import AntDialog from '../dialog';
import { Button, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useAppAuth } from '@/hooks/auth';
import { useTimeout } from '@/hooks/timeout';

export default function ModalTimeout () {

    const [ visible, setVisible ] = useState<boolean>(false);
    const auth = useAppAuth();
    const { seconds, minutes, updateTimeout } = useTimeout()

    const handleClose = () => {
        updateTimeout();
        setVisible(!visible);
    }

    const loginHandleClose = () => {
        auth.signOut();
        setVisible(!visible);
    }

    return (
        <AntDialog open={visible} setOpen={setVisible}>
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