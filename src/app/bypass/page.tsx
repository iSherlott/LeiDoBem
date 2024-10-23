
'use client'

import React, { useEffect, useState } from 'react';
import { AutoComplete, Input, Select, Table, TableColumnsType, TableProps, Typography } from 'antd';
import CardTitleCustom from '@/shared/components/card/title';
import EmptyResultWithRetry from '@/shared/components/empty/empty';
import { mockBypassCompanies } from './page.mock';
import { useAppToast } from '@/hooks/toast';
import { useRouter } from 'next/navigation';
import { useApp } from '../app';

interface DataType {
    id: string;
    name: string;
    key: number;
    action: React.ReactNode;
}

export default function ByPass () {

    const { setLoading, updateLayout } = useApp();
    const toast = useAppToast();
    const router = useRouter()

    const [ loadingSearch, setLoadingSearch ] = useState<boolean>(false);
    const [ searchText, setSearchText ] = useState<string>("all");
    const [ tenants, setTenants ] = useState<DataType[]>([]);
    const [ totalPages, setTotalPages ] = useState<number>(0);

    const onChange: TableProps<DataType>[ 'onChange' ] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    const getCompaniesAvailable = async () => {
        setLoadingSearch(true)

        try {
            const { data }: IResponseProps = mockBypassCompanies

            const mappedTenants = data.items.map((d: TenantModel, i: number) => {
                return {
                    key: i,
                    id: d.id,
                    name: <Typography style={{ color: '#0000A4', textDecoration: 'underline', fontFamily: 'Century Gothic' }}>{d.name}</Typography>,
                    cnpj: <Typography>12.345.678/0001-00</Typography>
                }
            })

            setTenants(mappedTenants);
            var total = data.totalItems;
            const pages = total / 10;
            const ceilPages = Math.ceil(pages);
            setTotalPages(ceilPages);
        } catch (err: any) {
            toast.error(err);
        }

        setLoadingSearch(false)
    }

    const goToCompany = async (id: string) => {
        setLoading(true)

        router.push(`/company/${id}/home`)
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Nome da empresa',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            width: '80%',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        goToCompany(record.id)
                    },
                };
            },
        },
        {
            title: 'CNPJ',
            dataIndex: 'cnpj',
            width: '20%',
            onCell: (record, rowIndex) => {
                return {
                    onClick: (ev) => {
                        goToCompany(record.id)
                    },
                };
            },
        }
    ];

    useEffect(() => {
        getCompaniesAvailable();

        updateLayout({
            sider: false,
            header: false,
            navbar: true,
            footer: true
        })

        setLoading(false)
    }, [])

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
                            onSearch={(val) => { setSearchText(val === '' ? 'all' : val) }}
                        >
                            <Input.Search style={{ padding: '0px 15px' }} showCount={false} color='#0000A4' loading={loadingSearch} placeholder="Procurar" enterButton />
                        </AutoComplete>
                        <div style={{ display: 'flex', gap: '15px', margin: '0px auto' }}>
                            <Typography style={{ fontSize: '22px' }}>Ano fiscal:</Typography>
                            <Select options={[ { value: '2024', label: '2024' } ]} defaultValue={'2024'}></Select>
                        </div>
                    </div>

                    <div style={{ width: '99%' }}>
                        <Table
                            columns={columns}
                            dataSource={tenants}
                            loading={loadingSearch}
                            pagination={{
                                total: totalPages, onChange (page) {
                                    getCompaniesAvailable()
                                },
                                showSizeChanger: false
                            }}
                            locale={{
                                emptyText: <EmptyResultWithRetry refresh={() => { }} />
                            }}
                            scroll={{ y: '43vh' }}
                            onChange={onChange}
                            showSorterTooltip={{ target: 'sorter-icon' }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}