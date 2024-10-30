import React, { CSSProperties } from 'react';
import { Button, Empty, Typography } from 'antd';

export default function EmptyResultWithRetry ({ refresh, style }: { refresh: () => void, style?: CSSProperties }) {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 100 }}
            style={{
                height: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '15px',
                ...style
            }}
            description={
                <Typography.Text>
                    Não foi encontrado nenhum resultado
                </Typography.Text>
            }
        >
            <Button onClick={refresh} type="primary">Refresh</Button>
        </Empty>
    )
}