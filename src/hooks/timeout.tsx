
'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import ModalTimeout from '@/shared/components/dialog/timeout';
import { useAuth } from './auth';
import { signIn, useSession } from 'next-auth/react';

const TimeoutContext = createContext<any>({});

export const useTimeout = (): TTimeoutContext => {
    return useContext(TimeoutContext)
}

export default function Timeout ({ children }: { children: React.ReactNode }) {

    const auth = useAuth()

    const [ showModal, toggleShowModal ] = useState<boolean>(false);
    const [ minutes, setMinutes ] = useState<number>(Math.floor(auth.expires_in / 60));
    const [ seconds, setSeconds ] = useState<number>(Math.floor(auth.expires_in % 60));

    const updateTimeout = async () => {
        signIn('auth0')
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

    useEffect(() => {
        let timeoutInterval = setInterval(() => {
            checkTimeout()
        }, 1000);

        return () => {
            clearInterval(timeoutInterval);
        };
    }, [ seconds, minutes ]);

    return (
        <TimeoutContext.Provider value={{ updateTimeout, minutes, seconds }}>
            <ModalTimeout visible={showModal} setVisible={toggleShowModal} />
            {children}
        </TimeoutContext.Provider>
    )
}

