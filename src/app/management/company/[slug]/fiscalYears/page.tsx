
'use client'


import { useEffect, useState } from "react";
import { Button, Select, Table, TableColumnsType, TableProps, Typography } from "antd";
import { ArrowLeftOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { mockYearsCompany } from "./page.mock";
import EmptyResultWithRetry from "@/shared/components/empty/empty";
import { useRouter } from "next/navigation";
import AntDialog from "@/shared/components/dialog/dialog";
import { useApp } from "@/app/app";

import './page.css'

interface DataType {
    id: string
}

export default function ManageCompanyFiscalYears ({ params }: { params: { slug: string } }) {

    const { updateLayout, setLoading } = useApp()
    const router = useRouter()

    const [ loadingSearch, setLoadingSearch ] = useState<boolean>(false)
    const [ openModal, setOpenModal ] = useState<boolean>(false)

    useEffect(() => {
        updateLayout({
            footer: true,
            header: false,
            sider: false,
            navbar: true
        })

        setLoading(false)
    }, [])

    const onChange: TableProps<DataType>[ 'onChange' ] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Ano',
            dataIndex: 'year',
            showSorterTooltip: { target: 'full-header' },
            width: '75%',
        }
    ];

    const list = mockYearsCompany.data.items.map((e) => {
        let elem = e as any
        elem.actions = <PlusCircleOutlined className="button-add transition" onClick={() => router.push(`/management/company/${e.id}/fiscalYears`)} />
        return elem
    })

    return (
        <>
            <AntDialog open={openModal} setOpen={setOpenModal} >

                <AntDialog.Header>
                    <Typography className="bold dialog-title">Criar ano fiscal</Typography>
                </AntDialog.Header>

                <AntDialog.Body className="flex-cl w-fw">
                    <Typography className="flex dialog-select-title-year">Selecione o ano:&nbsp;<Typography className="red-marker">*</Typography></Typography>
                    <Select options={[ { label: '2000', value: '2000' } ]} />
                </AntDialog.Body>

                <AntDialog.Footer className="dialog-footer">
                    <Button className="dialog-buttons">Cancelar</Button>
                    <Button className="dialog-buttons dialog-confirm-button">Confirmar</Button>
                </AntDialog.Footer>

            </AntDialog>

            <div className="flex fw fh cover cmn-border-radius flex-cl cmn-padding">
                <Button onClick={() => { setLoading(true); router.push(`/management/company`) }} className="back-button" icon={<ArrowLeftOutlined />}>Voltar</Button>

                <div className="flex fw div2 cmn-margin-top">
                    <Typography className="title">Gestao de Empresas - {params.slug}</Typography>
                </div>

                <div className="flex-cl cmn-margin-lr">
                    <Button className="dialog-confirm-button cmn-margin-tb" onClick={() => setOpenModal(true)} icon={<PlusCircleOutlined />}>Criar Novo Ano Fiscal</Button>
                    <Table
                        columns={columns}
                        dataSource={list as unknown as DataType[]}
                        loading={loadingSearch}
                        pagination={{
                            total: mockYearsCompany.data.totalItems,
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
        </>
    )

}