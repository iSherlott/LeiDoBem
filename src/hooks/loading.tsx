import { Spin } from "antd";
import { createContext, ReactNode, useContext, useState } from "react";

const loaderContext = createContext<TloaderContext>({
    loading: false,
    setLoading: () => { },
    setPercent: () => { }
})

export const useAppLoading = () => {
    return useContext(loaderContext)
}

export default function LoadingScreen ({ children }: { children: ReactNode }) {

    const [ spinning, setSpinning ] = useState(true);
    const [ percent, setPercent ] = useState(0);

    const handleSetPercent = (value: number) => {
        setPercent(value);
    };

    const handleSetLoading = (value: boolean) => {
        if (value === true) {
            setPercent(0)
            setSpinning(true)
        } else {
            setSpinning(false)
        }
    }

    const context: TloaderContext = {
        loading: spinning,
        setLoading: handleSetLoading,
        setPercent: handleSetPercent
    }

    return (
        <loaderContext.Provider value={context}>
            <div style={{ background: '#0000004a', top: '0', left: '0', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '15px', position: 'absolute', zIndex: '999', visibility: spinning ? 'visible' : 'hidden' }}>
                <img src="/figroup/logo_small.png" alt="imagem_logo"></img>
                <Spin style={{ color: 'white' }} percent={percent} />
            </div>
            {children}
        </loaderContext.Provider>
    )
}