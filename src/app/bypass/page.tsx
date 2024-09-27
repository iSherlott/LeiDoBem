
'use client'

import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteProps, Input, Table, TableColumnsType, TableProps, Typography } from 'antd';
import { useParams } from 'next/navigation';
import CardTitleCustom from '@/shared/components/card/title';
import EmptyResultWithRetry from '@/shared/components/empty/empty';
import { useApp } from '@/hooks/app';

interface DataType {
    name: string;
    action: React.ReactNode
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Nome da empresa',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        width: '90%',
    },
    {
        title: 'Entrar',
        dataIndex: 'action',
        width: '10%',
        align: 'center',
    }
];

export default function ByPass () {

    const { isChange } = useParams();

    const app = useApp();

    const [ options, setOptions ] = useState<AutoCompleteProps[ 'options' ]>([]);
    const [ loadingSearch, setLoadingSearch ] = useState<boolean>(false);
    const [ searchText, setSearchText ] = useState<string>("all");
    const [ tenants, setTenants ] = useState<DataType[]>([]);
    const [ token, setToken ] = useState<string>("");
    const [ totalPages, setTotalPages ] = useState<number>(0);

    useEffect(() => {
        getCompaniesAvailable(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChange: TableProps<DataType>[ 'onChange' ] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    const getCompaniesAvailable = async (page: number) => {
        return
    }

    const setUser = async (tenantId: string) => {
        return
    }

    const goToCompany = async (id: string) => {

    }

    useEffect(() => {
        app.update({
            sider: false,
            header: false,
            navbar: true,
            footer: true
        })
    }, [])

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ display: 'grid', gridTemplateRows: '0.6fr 5fr', rowGap: '16px' }}>
                {CardTitleCustom({ text: 'Bem Vindo a Seleção de Empresas do Lei do Bem' })}

                <div style={{ background: 'white', borderRadius: '16px', display: 'grid', gridTemplateRows: '0.7fr 6fr', padding: '30px', rowGap: '16px' }}>

                    <div style={{ display: 'grid', gridTemplate: '"a b" auto / 1fr 1fr', alignContent: 'center' }}>
                        <Typography style={{ fontSize: '20px' }}>Selecione a empresa que deseja trabalhar</Typography>
                        <AutoComplete
                            popupMatchSelectWidth={true}
                            style={{ width: '100%', paddingRight: '0px' }}
                            options={options}
                            onSelect={onSelect}
                            onSearch={(val) => { setSearchText(val === '' ? 'all' : val) }}
                        >
                            <Input.Search showCount={false} color='#0000A4' loading={loadingSearch} placeholder="Procurar" enterButton />
                        </AutoComplete>
                    </div>

                    <div style={{ width: '99%' }}>
                        <Table
                            columns={columns}
                            dataSource={tenants}
                            loading={loadingSearch}

                            pagination={{
                                total: totalPages, onChange (page) {
                                    getCompaniesAvailable(page)
                                },
                                showSizeChanger: false
                            }}
                            locale={{
                                emptyText: <EmptyResultWithRetry refresh={() => { }} />
                            }}
                            scroll={{ y: '40vh' }}
                            onChange={onChange}
                            showSorterTooltip={{ target: 'sorter-icon' }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}