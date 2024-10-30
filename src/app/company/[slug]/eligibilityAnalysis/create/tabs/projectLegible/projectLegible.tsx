
'use client'

import { DatePicker, Form, Input, Select, Typography } from "antd";

import './projectLegible.css'
import { TextAreaProps } from "antd/es/input";

const textAreaProps: TextAreaProps = {
    style: { margin: '10px 0px' },
    count: { max: 32600, show: true },
    autoSize: { minRows: 3 }
}

export default function ProjectLegible () {
    return (
        <div className="ea-tabs-pl-spacer">
            <Form
                name="layout-multiple-horizontal"
                layout="vertical"
            >
                <div className="ea-tabs-pl-grid">
                    <Form.Item className="ea-tabs-pl-grid-text" style={{ gridArea: 'a', width: '100%' }} label="O projeto é elegivel?" name="horizontal" rules={[ { required: true } ]}>
                        <Select />
                    </Form.Item>
                    <Form.Item className="ea-tabs-pl-grid-text" style={{ gridArea: 'b', width: '100%' }} label="Posicionamento FI Group:" name="horizontal">
                        <Input.TextArea {...textAreaProps} />
                    </Form.Item>
                    <Form.Item className="ea-tabs-pl-grid-text" style={{ gridArea: 'c', width: '100%' }} label="Esclarecimentos FI:" name="horizontal">
                        <Typography className="greyed" style={{ fontSize: '16px', marginBottom: '16px' }}>
                            Campo exclusivo do consultor para trazer detalhamentos, ou questionamentos referentes ao projeto.
                        </Typography>
                        <Input.TextArea {...textAreaProps} />
                    </Form.Item>
                    <Form.Item className="ea-tabs-pl-grid-text" style={{ gridArea: 'd', width: '100%' }} label="Retorno do Cliente:" name="horizontal">
                        <Typography className="greyed" style={{ fontSize: '16px', marginBottom: '16px' }}>
                            Campo exclusivo para cliente, utilize este campo para comentários ou resposta ao campo acima (Esclarecimentos FI).
                        </Typography>
                        <Input.TextArea count={{ max: 3000, show: true }} autoSize={{ minRows: 3 }} />
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}