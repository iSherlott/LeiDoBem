import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from "oidc-react";
import { GetTimeoutSession } from '@/utils/localStorage';
import ModalTimeout from '@/shared/components/dialog/timeout';
import { useAppAuth } from './auth';

type TTimeoutContext = {
    updateTimeout: () => void,
    minutes: number,
    seconds: number
}

const TimeoutContext = createContext<any>({});

export const useTimeout = (): TTimeoutContext => {
    return useContext(TimeoutContext)
}

export default function Timeout ({ children }: { children: React.ReactNode }) {
    const auth = useAppAuth();

    const [ showModal, toggleShowModal ] = useState<boolean>(false);
    const [ minutes, setMinutes ] = useState<number>(20);
    const [ seconds, setSeconds ] = useState<number>(0);

    const updateTimeout = () => {
        setMinutes(20);
        setSeconds(0);
    }

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (minutes === 0 && seconds > 58) {
                toggleShowModal(!showModal);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    auth.signOut();
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    useEffect(() => {
        function checkTimeout () {
            const timeoutSession = GetTimeoutSession();

            if (timeoutSession !== "") {
                updateTimeout();
            }
        }

        window.addEventListener("storage", checkTimeout);

        return () => {
            window.removeEventListener("storage", checkTimeout);
        };
    }, []);

    return (
        <>
            <ModalTimeout />
            {auth &&
                <TimeoutContext.Provider value={{ updateTimeout, minutes, seconds }}>
                    {children}
                </TimeoutContext.Provider>
            }
        </>
    )
}

