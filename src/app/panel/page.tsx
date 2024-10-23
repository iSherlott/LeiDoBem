
'use client'

import CardTitleCustom from "@/shared/components/card/title";
import { SolutionOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "../app";

import './page.css'

export default function ControlPanel () {

    const router = useRouter()
    const { setLoading, updateLayout } = useApp()

    const redirectBypass = () => {
        setLoading(true)
        router.push(`/bypass`)
    }

    const redirectManagement = () => {
        setLoading(true)
        router.push(`/management/company`)
    }

    useEffect(() => {
        updateLayout({
            sider: false,
            footer: true,
            header: false,
            navbar: true
        })

        setLoading(false)
    }, [])

    return (
        <div className="scrollable" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', justifyContent: 'center', borderRadius: '10px', height: '100%' }}>

            <div className="title-div">
                {CardTitleCustom({ text: 'Bem-Vindo ao Painel de Controle' })}
            </div>

            <div className="list cmn-padding cmn-border-radius">

                <div onClick={redirectBypass} className="anim-pop-forward card-layout flex-center flex-cl transition">
                    <UsergroupAddOutlined className="card-image-cst" />
                    <Typography className="card-title">Seleção de empresa</Typography>
                    <Typography className="card-subtitle">Clique para voltar</Typography>
                </div>

                <div onClick={redirectManagement} className="anim-pop-forward card-layout flex-center flex-cl transition">
                    <SolutionOutlined className="card-image-cst" />
                    <Typography className="card-title">Gestão de Empresas</Typography>
                    <Typography className="card-subtitle">Clique para visualizar</Typography>
                </div>

            </div>
        </div>
    )
}

