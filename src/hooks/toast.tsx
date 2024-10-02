
'use client'

import { CheckCircleFilled, CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { Typography } from "antd"
import { ArgsProps } from "antd/es/notification/interface"
import useNotification from "antd/es/notification/useNotification"
import React, { createContext, CSSProperties, useContext } from "react"

const sharedToastProps: ArgsProps = {
    duration: 3,
    placement: 'topRight',
    pauseOnHover: true,
    showProgress: true,
    message: '',
}

const sharedTextMessage: CSSProperties = {
    fontSize: '13px',
    lineHeight: '18px',
    fontFamily: 'Century Gothic',
    fontWeight: '400'
}

const sharedIcon: CSSProperties = {
    width: '10%',
    justifyContent: 'center',
    fontSize: '21px'
}

const sharedTextTitle: CSSProperties = {
    fontFamily: 'Century Gothic',
    fontSize: "17px",
    fontWeight: "700",
    lineHeight: "22px",
    textAlign: "left"
}

const sharedTextBox: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '85%'
}

const ToastContext = createContext<TToastContext>({
    error: () => null,
    warn: () => null,
    info: () => null,
    success: () => null
})

export const useAppToast = (): TToastContext => {
    return useContext(ToastContext)
}

export default function Toast ({ children }: { children: React.ReactNode }) {
    const [ api, contextHolder ] = useNotification()

    function toastError ({ message, title }: { message: string, title?: string, err?: unknown }) {
        api.error({
            ...sharedToastProps,
            message:
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CloseCircleOutlined style={{ ...sharedIcon, color: '#FF4D4F' }} />
                    <div style={sharedTextBox}>
                        <Typography style={sharedTextTitle}>{title ?? 'Um Erro Ocorreu'}</Typography>
                        <Typography style={sharedTextMessage}>{message}</Typography>
                    </div>
                </div>,
            icon: <></>,
            closable: false,
        });
    }

    function toastWarn ({ message, title }: { message: string, title?: string }) {
        api.warning({
            ...sharedToastProps,
            message:
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <InfoCircleOutlined style={{ ...sharedIcon, color: '#FAAD14' }} />
                    <div style={sharedTextBox}>
                        <Typography style={sharedTextTitle}>{title ?? 'Aviso'}</Typography>
                        <Typography style={sharedTextMessage}>{message}</Typography>
                    </div>
                </div>,
            icon: <></>,
            closable: false
        });
    }

    function toastInfo ({ message, title }: { message: string, title?: string }) {
        api.info({
            ...sharedToastProps,
            message:
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <InfoCircleOutlined style={{ ...sharedIcon, color: '#00AEFF' }} />
                    <div style={sharedTextBox}>
                        <Typography style={sharedTextTitle}>{title ?? 'Informativo'}</Typography>
                        <Typography style={sharedTextMessage}>{message}</Typography>
                    </div>
                </div>,
            icon: <></>,
            closable: false
        });
    }

    function toastSuccess ({ message, title }: { message: string, title?: string }) {
        api.success({
            ...sharedToastProps,
            message:
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CheckCircleFilled style={{ ...sharedIcon, color: '#52C41A' }} />
                    <div style={sharedTextBox}>
                        <Typography style={sharedTextTitle}>{title ?? 'Sucesso'}</Typography>
                        <Typography style={sharedTextMessage}>{message}</Typography>
                    </div>
                </div>,
            icon: <></>,
            closable: false
        });
    }

    const context: TToastContext = {
        error: (e) => {
            e.err ?? console.log(e.err)
            toastError(e)
        },
        warn: (e) => {
            e.err ?? console.log(e.err)
            toastWarn(e)
        },
        info: (e) => {
            toastInfo(e)
        },
        success: (e) => {
            toastSuccess(e)
        }
    }

    return (
        <ToastContext.Provider value={context}>
            <>{contextHolder}</>
            {children}
        </ToastContext.Provider>
    )
}