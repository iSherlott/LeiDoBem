
'use client'

import './projectAttachments.css'
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { Table, TableColumnsType, Typography, UploadProps } from 'antd';
import { useToast } from '@/hooks/toast';

import './projectAttachments.css'
import EmptyResultWithRetry from '@/shared/components/empty/empty';
import { useEffect, useState } from 'react';
import { dataTable1, dataTable2 } from './projectAttachments.mock';

const columnsTable1: TableColumnsType<any> = [
    {
        title: 'Nome',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        width: '40%',
        sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
        title: 'Tamanho',
        dataIndex: 'size',
        width: '20%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Data do Upload',
        dataIndex: 'upload_date',
        width: '30%',
        sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
        title: 'Ações',
        dataIndex: 'actions',
        width: '10%',
    }
];

const columnsTable2: TableColumnsType<any> = [
    {
        title: 'Nome',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        width: '80%',
        sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
        title: 'Ações',
        dataIndex: 'actions',
        width: '10%',
    }
];

export default function ProjectAttachments () {

    const toast = useToast()

    const [ data1, setData1 ] = useState([])
    const [ data2, setData2 ] = useState([])

    const [ loading, setLoading ] = useState<boolean>(false)

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange (info) {
            const { status } = info.file;

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }

            if (status === 'done') {
                toast.success({ message: `${info.file.name} upload de arquivo foi um sucesso.` });
            } else if (status === 'error') {
                toast.error({ message: `${info.file.name} upload de arquivo falhou.` });
            }

        },
        onDrop (e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    useEffect(() => {
        setData1(dataTable1 as any)
        setData2(dataTable2 as any)
    }, [])

    return (
        <div className="flex-cl">
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p style={{ fontWeight: '800' }} className="ant-upload-text">Clique ou arraste o arquivo para esta área para fazer upload</p>
                <p className="ant-upload-hint greyed">Suporte para upload único ou em massa.</p>
            </Dragger>

            <div className='ea-tabs-pa-grid'>
                <div className='flex-cl'>
                    <Typography style={{ textAlign: 'center', fontSize: '20px', margin: '0px 0px 15px 0px' }}>Arquivos</Typography>
                    <Table
                        columns={columnsTable1}
                        dataSource={data1}
                        loading={loading}
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
                <div className='flex-cl'>
                    <Typography style={{ textAlign: 'center', fontSize: '20px', margin: '0px 0px 15px 0px' }}>Pastas</Typography>
                    <Table
                        columns={columnsTable2}
                        dataSource={data2}
                        loading={loading}
                        pagination={{
                            pageSizeOptions: [ 7, 10, 20, 30 ],
                            defaultPageSize: 7
                        }}
                        locale={{
                            emptyText: <EmptyResultWithRetry style={{ height: '300px', width: 'auto' }} refresh={() => { }} />
                        }}
                        scroll={{ y: '400px' }}
                        showSorterTooltip={{ target: 'sorter-icon' }}
                    />
                </div>
            </div>

        </div>
    )
}