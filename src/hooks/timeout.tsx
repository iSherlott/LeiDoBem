
'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import ModalTimeout from '@/shared/components/dialog/timeout';
import { useAuth } from './auth';
import * as jose from 'jose'

const TimeoutContext = createContext<TTimeoutContext | null>(null);

export const useTimeout = (): TTimeoutContext => {
    return useContext(TimeoutContext) as TTimeoutContext
}

export default function Timeout ({ children }: { children: React.ReactNode }) {

    const { access_token, updateSession } = useAuth()
    const decodedToken = jose.decodeJwt(access_token)

    const expirationDate = new Date(decodedToken.exp! * 1000)
    const currentDate = new Date(Date.now())

    if (currentDate > expirationDate) {
        updateSession()
    }

    const ttl = decodedToken.exp! * 1000 - currentDate.getTime()

    const time = (ttl / 1000 / 60).toString().split('.');

    const [ showModal, toggleShowModal ] = useState<boolean>(false);
    const [ minutes, setMinutes ] = useState<number>(Number.parseInt(time[ 0 ]));
    const [ seconds, setSeconds ] = useState<number>(Number.parseInt(time[ 1 ][ 0 ] + time[ 1 ][ 1 ]));

    const updateTimeout = async () => {
        updateSession()
    }

    const checkTimeout = async () => {

        if (seconds > 0) {
            setSeconds(seconds - 1);
        }

        if (minutes === 0 && seconds > 58) {
            toggleShowModal(!showModal);
        }

        if (seconds === 0) {
            if (minutes === 0) {
                // SIGN OUT
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }
    }

    const handleKeyDown = () => {
        if (minutes < 5) {
            updateSession()
        }
    }

    useEffect(() => {
        const timeoutInterval = setInterval(() => {
            checkTimeout()
        }, 1000);

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleKeyDown)

        return () => {
            clearInterval(timeoutInterval);
            document.removeEventListener('click', handleKeyDown)
            document.removeEventListener('keydown', handleKeyDown)
        };
    }, [ seconds, minutes ]);

    return (
        <TimeoutContext.Provider value={{ updateTimeout, minutes, seconds }}>
            <ModalTimeout visible={showModal} setVisible={toggleShowModal} />
            {children}
        </TimeoutContext.Provider>
    )
}

