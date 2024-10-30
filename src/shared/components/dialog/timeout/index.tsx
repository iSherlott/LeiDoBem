import React from 'react';
import AntDialog from '../dialog';
import { Button, Divider, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useTimeout } from '@/hooks/timeout';

export default function ModalTimeout ({ visible, setVisible }: { visible: boolean, setVisible: (value: boolean) => void }) {

    const { seconds, minutes, updateTimeout } = useTimeout()

    const handleClose = () => {
        updateTimeout();
        setVisible(!visible);
    }

    const expirado = (seconds === 0 && minutes === 0);

    return (
        <AntDialog open={visible} setOpen={setVisible as any}>
            <AntDialog.Header>
                <Divider style={{ borderColor: expirado ? 'red' : '#007cff' }}>{expirado ? 'Token Expirado' : 'Token Vencendo'}</Divider>
            </AntDialog.Header>
            <AntDialog.Body>
                {
                    expirado
                        ? <Typography style={{ textAlign: 'center' }}><Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>Você foi deslogado!</Typography><br />por favor, faça seu login novamente!</Typography>
                        : <Typography style={{ textAlign: 'center' }}><Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>Eiii! Tem alguém aí?!</Typography><br />Você está a muito tempo sem interagir, sem nenhuma ação em breve você será deslogado.</Typography>
                }

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 0px 0px 0px' }}>
                    <Typography>{minutes}:</Typography>
                    <Typography>{seconds < 10 ? '0' + seconds : seconds}&nbsp;</Typography>
                    <ClockCircleOutlined size={30} className='me-1' />
                </div>
            </AntDialog.Body>
            <AntDialog.Footer>
                <Button className='btn btn-primary w-100' onClick={handleClose} style={{ width: '100%', background: expirado ? 'red' : '#007cff', color: 'white' }}>
                    {expirado ? 'Realizar Login!' : 'Estou Aqui!'}
                </Button>
            </AntDialog.Footer>
        </AntDialog>
    )
}