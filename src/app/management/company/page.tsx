
'use client'

import { useApp } from "@/hooks/app";
import { useEffect, useState } from "react";
import { AutoComplete, Button, Input, Table, TableColumnsType, TableProps, Typography } from "antd";
import { ArrowLeftOutlined, PlusCircleOutlined, UploadOutlined } from "@ant-design/icons";

import './page.css'
import { mockManagementCompanies } from "./page.mock";
import EmptyResultWithRetry from "@/shared/components/empty/empty";
import { useRouter } from "next/navigation";

interface DataType {
    id: string
}

export default function CompaniesManagement () {

    const { updateLayout, setLoading } = useApp()
    const router = useRouter()

    const [ search, setSearch ] = useState<string>('')
    const [ loadingSearch, setLoadingSearch ] = useState<boolean>(false)

    useEffect(() => {
        updateLayout({
            footer: true,
            header: false,
            sider: false,
            navbar: true
        })

        setLoading(false);
    }, [])

    const onChange: TableProps<DataType>[ 'onChange' ] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Nome da empresa',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            width: '75%',
        },
        {
            title: 'CNPJ',
            dataIndex: 'cnpj',
            width: '15%',
        },
        {
            title: 'Ações',
            dataIndex: 'actions',
            align: 'center',
            width: '10%',
        }
    ];

    const list = mockManagementCompanies.data.items.map((e) => {
        let elem = e as any
        elem.actions = <PlusCircleOutlined className="button-add transition" onClick={() => { setLoading(true); router.push(`/management/company/${e.id}/fiscalYears`) }} />
        return elem
    })

    return (
        <div className="flex fw fh cover cmn-border-radius flex-cl cmn-padding">
            <Button onClick={() => { setLoading(true); router.push(`/panel`) }} className="back-button" icon={<ArrowLeftOutlined />}>Voltar</Button>

            <div className="flex fw div1 cmn-margin-top">
                <Typography className="title">Gestão de Empresas</Typography>
                <AutoComplete
                    className="autocomplete"
                    popupMatchSelectWidth={true}
                    onSelect={() => { }}
                    onSearch={(val) => { setSearch(val === '' ? 'all' : val) }}
                >
                    <Input.Search showCount={false} loading={loadingSearch} placeholder="Procurar empresa..." enterButton />
                </AutoComplete>
            </div>

            <div className="flex-cl cmn-margin-lr">
                <Button className="button-upload cmn-margin-tb" icon={<UploadOutlined />}>Upload Massivo YoPro</Button>
                <Table
                    columns={columns}
                    dataSource={list as unknown as DataType[]}
                    loading={loadingSearch}
                    pagination={{
                        total: mockManagementCompanies.data.totalItems,
                        showSizeChanger: false
                    }}
                    locale={{
                        emptyText: <EmptyResultWithRetry refresh={() => { }} />
                    }}
                    scroll={{ y: '55vh' }}
                    onChange={onChange}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                />
            </div>
        </div>
    )

}