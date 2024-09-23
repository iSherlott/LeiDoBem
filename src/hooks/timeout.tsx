
'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { GetTimeoutSession } from '../utils/localStorage';
import ModalTimeout from '@/shared/components/dialog/timeout';

interface ITimeoutProps {
    updateTimeout: () => void,
    minutes: number,
    seconds: number
}

export const TimeoutContext = createContext({} as ITimeoutProps);

export const useTimeout = () => {
    return useContext(TimeoutContext)
}

const TimeoutContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [ open, setOpen ] = useState<boolean>(false);

    const [ minutes, setMinutes ] = useState<number>(20);
    const [ seconds, setSeconds ] = useState<number>(0);

    const updateTimeout = () => {
        setMinutes(20);
        setSeconds(0);
    }

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (minutes === 0 && seconds > 58) {
                setOpen(true)
            }
            if (seconds === 0) {
                if (minutes === 0) {

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
            <ModalTimeout
                minutes={minutes}
                seconds={seconds}
                auth={''}
                updateTimeout={updateTimeout}
                show={open}
                toggleShow={() => setOpen(!open)}
            />
            <TimeoutContext.Provider value={{ updateTimeout, minutes, seconds }}>
                {children}
            </TimeoutContext.Provider>
        </>
    )
}

export default TimeoutContextProvider;