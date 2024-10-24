
'use client'

import React, { useEffect, useState } from 'react';
import { AutoComplete, Input, Select, Table, TableColumnsType, TableProps, Typography } from 'antd';
import CardTitleCustom from '@/shared/components/card/title';
import EmptyResultWithRetry from '@/shared/components/empty/empty';
import { useAppToast } from '@/hooks/toast';
import { useRouter } from 'next/navigation';
import { useApp } from '../app';
import { getCompanies } from '@/services/bypass';

interface DataType {
    id: string;
    title: string;
    taxNumber: number;
    key: number;
}

export default function ByPass () {

    const { setLoading, updateLayout } = useApp();
    const toast = useAppToast();
    const router = useRouter()

    const [ loadingSearch, setLoadingSearch ] = useState<boolean>(false);
    const [ update, setUpdate ] = useState<number>(0);
    const [ searchText, setSearchText ] = useState<string>("");
    const [ tenants, setTenants ] = useState<DataType[]>([]);
    const [ totalPages, setTotalPages ] = useState<number>(0);
    const [ fiscalYear, setFiscalYear ] = useState<string>('Todos');

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    const getCompaniesAvailable = async () => {
        if (!loadingSearch) {
            setLoadingSearch(true)

            try {
                const data = await getCompanies()
                const tenantsArray: any[] = data.data.tenants

                setTenants(tenantsArray.filter((dtenant) => {
                    return dtenant.title.toLowerCase().includes(searchText.toLowerCase())
                }))

                setTotalPages(data.data.count / 8);

            } catch (err: any) {
                toast.error(err);
            }

            setLoadingSearch(false)
        }
    }

    const goToCompany = async (id: string) => {
        setLoading(true)

        router.push(`/company/${id}/home`)
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Nome da empresa',
            dataIndex: 'title',
            showSorterTooltip: { target: 'full-header' },
            width: '80%',
            sorter: (a, b) => a.title.localeCompare(b.title),
            onCell: (record, rowIndex) => {
                return {
                    style: { cursor: 'pointer' },
                    onClick: (ev) => {
                        goToCompany(record.id)
                    },
                };
            },
        },
        {
            title: 'CNPJ',
            dataIndex: 'taxNumber',
            width: '20%',
            render (value: string, record, index) {
                return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
            },
            onCell: (record, rowIndex) => {
                return {
                    style: { cursor: 'pointer' },
                    onClick: (ev) => {
                        goToCompany(record.id)
                    },
                };
            },
        }
    ];

    useEffect(() => {
        updateLayout({
            sider: false,
            header: false,
            navbar: true,
            footer: true
        })

        setLoading(false)
    }, [])

    useEffect(() => {
        getCompaniesAvailable();
    }, [ update, searchText, fiscalYear ])

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ display: 'grid', gridTemplateRows: '0.6fr 5fr', rowGap: '16px' }}>
                <div style={{ position: 'relative', zIndex: '1', width: '100%' }}>
                    {CardTitleCustom({ text: 'Bem-Vindo a Seleção de Empresas' })}
                </div>

                <div style={{ background: 'white', borderRadius: '16px', display: 'grid', gridTemplateRows: '0.7fr 6fr', padding: '30px', rowGap: '16px' }}>

                    <div style={{ display: 'grid', gridTemplate: '"a b c" auto / 1.3fr 3fr 1fr', alignContent: 'center' }}>
                        <Typography style={{ fontSize: '20px', fontFamily: 'Century Gothic', textWrap: 'nowrap' }}>Selecione a empresa que deseja trabalhar</Typography>
                        <AutoComplete
                            popupMatchSelectWidth={true}
                            style={{ width: '100%', paddingRight: '0px' }}
                            onSelect={onSelect}
                            onSearch={(val) => { setSearchText(val) }}
                        >
                            <Input.Search style={{ padding: '0px 15px' }} showCount={false} color='#0000A4' loading={loadingSearch} placeholder="Procurar" enterButton />
                        </AutoComplete>
                        <div style={{ display: 'flex', gap: '15px', margin: '0px auto' }}>
                            <Typography style={{ fontSize: '22px' }}>Ano fiscal:</Typography>
                            <Select onChange={(y) => setFiscalYear(y)} options={[ { value: '2024', label: '2024' }, { value: '', label: 'Todos' } ]} defaultValue={''}></Select>
                        </div>
                    </div>

                    <div style={{ width: '99%' }}>
                        <Table
                            columns={columns}
                            dataSource={tenants}
                            loading={loadingSearch}
                            pagination={{
                                pageSizeOptions: [ 7, 10, 20, 30 ],
                                defaultPageSize: 7
                            }}
                            locale={{
                                emptyText: <EmptyResultWithRetry refresh={() => { setUpdate(update + 1); }} />
                            }}
                            scroll={{ y: '47vh' }}
                            showSorterTooltip={{ target: 'sorter-icon' }}
                        />
                    </div>

                </div>
            </div>
        </div >
    )
}