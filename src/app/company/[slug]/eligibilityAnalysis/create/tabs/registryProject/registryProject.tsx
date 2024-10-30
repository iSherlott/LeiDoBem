
'use client'

import { DatePicker, Form, Input, Select, Typography } from "antd";

import './registryProject.css'

export default function RegistryProject () {
    return (
        <div className="ea-tabs-rp-spacer">
            <Form
                name="layout-multiple-horizontal"
                layout="vertical"
            >
                <div className="ea-tabs-rp-grid">
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'a', width: '100%' }} label="Nome do Projeto:" name="horizontal" rules={[ { required: true } ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'b', width: '100%' }} label="ID/Código do Projeto:" name="horizontal">
                        <Input />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'c', width: '100%' }} label="Responsável:" name="horizontal">
                        <Input />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'd', width: '100%' }} label="Data de inicio do projeto:" name="horizontal">
                        <DatePicker style={{ width: '100%' }} placeholder="Selecione a data" />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'e', width: '100%' }} label="Data prevista de conclusão:" name="horizontal">
                        <DatePicker style={{ width: '100%' }} placeholder="Selecione a data" />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'f', width: '100%' }} label="Atribuir projeto para um ou mais técnico limitado:" name="horizontal">
                        <Select />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'g', width: '100%' }} label="Natureza do Projeto:" name="horizontal" rules={[ { required: true } ]}>
                        <Select />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'h', width: '100%' }} label="Áreas:" name="horizontal" rules={[ { required: true } ]}>
                        <Select />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'i', width: '100%' }} label="Tipologias:" name="horizontal" rules={[ { required: true } ]}>
                        <Select />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'j', width: '100%' }} label="Outros:" name="horizontal">
                        <Input />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'k', width: '100%' }} label="Objetivo Meta (diretamente ligado ao Projeto)" name="horizontal" rules={[ { required: true } ]}>
                        <Typography className="greyed" style={{ fontSize: '16px', marginBottom: '16px' }}>
                            O que o projeto pretende mudar na empresa em sua área de aplicação? Quais resultados são esperados? Um novo produto? Um novo processo produtivo? Um novo serviço? Se tiver informações, diga se já existem projetos semelhantes em outras empresas, ou se é uma novidade para o país ou para o mundo.
                        </Typography>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item className="ea-tabs-rp-grid-text" style={{ gridArea: 'l', width: '100%' }} label="Porque(Motivação AS/IS)" name="horizontal" rules={[ { required: true } ]}>
                        <Typography className="greyed" style={{ fontSize: '16px', marginBottom: '16px' }}>
                            Qual foi a motivação para iniciação do Projeto? Depois, diga como o projeto vai mudar a situação atual da empresa. Descreva qual a situação da empresa antes da solução na área de aplicação do projeto (quais os produtos eram oferecidos ou como era o processo/serviço).Por fim, busque especificar se o projeto visa atingir um novo nicho de mercado, preencher alguma lacuna ou expandir a atuação da empresa com custo competitivo, produtos inovadores, nacionalização, etc.
                        </Typography>
                        <Input.TextArea />
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}