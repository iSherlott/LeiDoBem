import React from 'react';
import { Button, Empty, Typography } from 'antd';

export default function EmptyResultWithRetry ({ refresh }: { refresh: () => void }) {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={
                <Typography.Text>
                    Não foi encontrado nenhuma empresa
                </Typography.Text>
            }
        >
            <Button onClick={() => refresh} type="primary">Refresh</Button>
        </Empty>
    )
}