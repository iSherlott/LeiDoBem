
'use client'

import { useApp } from "@/hooks/app";
import { CloudUploadOutlined, DeleteOutlined, DropboxOutlined, PlusOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Input, Select, Table, TableColumnsType, Typography } from "antd";
import { useEffect } from "react";

import './page.css'
import EmptyResultWithRetry from "@/shared/components/empty/empty";
import { useCompany } from "@/hooks/company";
import { useRouter } from "@/hooks/router";

const columns: TableColumnsType<any> = [
    {
        title: 'Nome',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        width: '15%',
        sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
        title: 'Código de Projeto',
        dataIndex: 'project_code',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Natureza do Projeto',
        dataIndex: 'project_code',
        width: '15%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Área',
        dataIndex: 'area',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Tipologia',
        dataIndex: 'typo',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Data Inicial',
        dataIndex: 'date_init',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Data Final',
        dataIndex: 'date_end',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Elegível',
        dataIndex: 'elegible',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        width: '10%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    }
];

export default function eligibilityAnalysis ({ params }: { params: { slug: string } }) {

    const { setLoading, updateLayout } = useApp();
    const { setPath } = useCompany()

    const router = useRouter()

    useEffect(() => {
        updateLayout({
            footer: true,
            header: true,
            sider: true,
            navbar: true
        })

        setPath([ {
            path: '/eligibilityAnalysis',
            title: 'Análise de Elegibilidade'
        } ])

        setLoading(false)
    }, [])

    return (
        <div className="flex-cl" style={{ gap: '15px', background: 'white', height: 'fit-content', padding: '0px 16px 50px 16px', borderRadius: '0px 0px 15px 15px' }}>
            <div style={{ width: '100%', display: 'flex' }}>
                <Select className="ea-custom-select" placeholder="Consolidados" />
                <Button className="ea-custom-select-text" icon={<DropboxOutlined />}>Importar Projetos do ano anterior</Button>
                <Button style={{ minWidth: '331px', height: '40px', marginLeft: 'auto', marginRight: '15px' }} icon={<CloudUploadOutlined />}>Download Modelo</Button>
                <Button style={{ minWidth: '331px', height: '40px' }} icon={<CloudUploadOutlined />}>Upload Modelo</Button>
            </div>

            <div style={{ display: 'flex', gap: '15px', margin: '25px 0px' }}>
                <div className="ea-card-qty" style={{ background: '#F6FFED' }}><Typography>Elegíveis</Typography> <Typography style={{ fontWeight: 'bold' }}>112,893</Typography></div>
                <div className="ea-card-qty" style={{ background: '#FFF1F0' }}><Typography>Não Elegíveis</Typography> <Typography style={{ fontWeight: 'bold' }}>112,893</Typography></div>
                <div className="ea-card-qty" style={{ background: '#FEFFE6' }}><Typography>Talvez</Typography> <Typography style={{ fontWeight: 'bold' }}>112,893</Typography></div>
                <div className="ea-card-qty" style={{ background: '#E6F7FF' }}><Typography>Pendente</Typography> <Typography style={{ fontWeight: 'bold' }}>112,893</Typography></div>

                <AutoComplete popupMatchSelectWidth={true} className="ea-auto-complete" >
                    <Input.Search style={{ padding: '0px 15px', height: '40px' }} showCount={false} color='#0000A4' placeholder="Pesquisar..." enterButton />
                </AutoComplete>

                <Button onClick={() => router.redirect(`eligibilityAnalysis/create`)} className="ea-insert-project-button" icon={<PlusOutlined />}>Inserir Projeto</Button>
                <Button className="ea-delete-button" icon={<DeleteOutlined />}></Button>
            </div>

            <Table
                columns={columns}
                dataSource={[]}
                loading={false}
                pagination={{
                    pageSizeOptions: [ 7, 10, 20, 30 ],
                    defaultPageSize: 7
                }}
                locale={{
                    emptyText: <EmptyResultWithRetry style={{ height: '300px' }} refresh={() => { }} />
                }}
                scroll={{ y: '400px' }}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </div>
    )
}