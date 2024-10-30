
'use client'

import { useApp } from "@/hooks/app";
import { Button, Tabs, TabsProps } from "antd";
import { useEffect } from "react";
import { useCompany } from "@/hooks/company";
import RegistryProject from './tabs/registryProject/registryProject'
import ProjectLegible from "./tabs/projectLegible/projectLegible";
import ComplementaryInformation from "./tabs/complementaryInformation/complementaryInformation";
import ProjectAttachments from "./tabs/projectAttachments/projectAttachments";

const items: TabsProps[ 'items' ] = [
    {
        key: '1',
        label: 'Cadastro do Projeto',
        children: <RegistryProject />,
    },
    {
        key: '2',
        label: 'Elegibilidade',
        children: <ProjectLegible />,
    },
    {
        key: '3',
        label: 'Informações Complementares',
        children: <ComplementaryInformation />,
    },
    {
        key: '4',
        label: 'Anexos',
        children: <ProjectAttachments />,
    },
];

export default function eligibilityAnalysis ({ params }: { params: { slug: string } }) {

    const { setLoading, updateLayout } = useApp();
    const { setPath } = useCompany();

    useEffect(() => {
        updateLayout({
            footer: true,
            header: true,
            sider: true,
            navbar: true
        })

        setPath([
            {
                path: `/company/${params.slug}/eligibilityAnalysis`,
                title: 'Análise de Elegibilidade'
            },
            {
                path: `/company/${params.slug}/eligibilityAnalysis/create`,
                title: 'Criação de Projeto'
            }
        ])

        setLoading(false)
    }, [])

    return (
        <div className="flex-cl" style={{ gap: '15px', background: 'white', height: 'fit-content', padding: '0px 16px 50px 16px', display: 'flex', flexDirection: 'column', borderRadius: '0px 0px 15px 15px' }}>
            <Tabs
                type="card"
                defaultActiveKey="1"
                items={items}
            />
            <Button style={{ marginLeft: 'auto', background: '#0000A4', height: '40px', color: 'white' }}>Salvar e Avançar</Button>
        </div>
    )
}