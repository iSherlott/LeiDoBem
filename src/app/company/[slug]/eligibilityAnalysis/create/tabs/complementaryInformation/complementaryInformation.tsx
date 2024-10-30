
'use client'

import { Collapse, CollapseProps, Form, Input, Typography } from "antd";

import './complementaryInformation.css'
import { TextAreaProps } from "antd/es/input";

const textAreaProps: TextAreaProps = {
    style: { margin: '10px 0px' },
    count: { max: 32600, show: true },
    autoSize: { minRows: 3 }
}

const collapsedProps: CollapseProps = {
    expandIconPosition: "end"
}


const items: CollapseProps[ 'items' ] = [
    {
        key: '1',
        label: 'Rastreabilidade Atrelada ao Projeto',
        children: <div>
            <Typography className="greyed">Especificar se o projeto é controlado por centro de custo, elemento PEP, SKU, Ordens de Investimento ou conta contabil. Trazer o número/código para rastrabilidade junto com o financeiro/contabilidade.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>
    },
    {
        key: '2',
        label: 'Como (Método)',
        children: <div>
            <Typography className="greyed">Descrever, brevemente, qual a metodologia aplicada no desenvolvimento do projeto. Se foi baseada em metodologia ágil, alguma metodologia conhecida de desenvolvimento de produtos e/ou processos, ou se a empresa possui uma metodologia própria para mapeamento das oportunidades e etapas.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '3',
        label: 'Aqulsicões de Tecnologla ou Know How',
        children: <div>
            <Typography className="greyed">Descrever, brevemente, se houve a necessidade de aquisição de tecnologias (sistemas, softwares, equipamentos, dispositivos) ou know-how específico (normas, patentes, livros e periódicos, etc) para execução das atividades de pesquisa e desenvolvimento no projeto</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '4',
        label: 'Onde (Unidade)',
        children: <div>
            <Typography className="greyed">Citar em quais unidades da empresa o projeto foi ou está sendo executado. Podem ser plantas e/ou unidades distintas, filiais, etc.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '5',
        label: 'Barreira ou Desafio Tecnológico e Inovação',
        children: <div>
            <Typography className="greyed">Descrever as possíveis e eventuais dificuldades tecnológicas enfrentadas no decorrer do projeto. Podem estar relacionadas com o manuseio de uma nova tecnologia ou com falta de conhecimento técnico/científico da equipe.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>
    },
    {
        key: '6',
        label: 'Avanços Técnicos, Tecnológicos e Inovação',
        children: <div>
            <Typography className="greyed">O projeto traz novas funcionalidades para os produtos ou processo da empresa? Se o projeto trouxer novas funcionalidades para os produtos ou processo da empresa, descrevê-las do ponto de vista de quem faz uso dele (produto ou processo). O projeto traz melhoria de qualidade percebida por quem faz uso do produto/processo? Se o projeto trouxer melhoria de qualidade de produto ou processo, descrevê-las do ponto de vista de quem faz uso dele. Se possível, quantificar essas melhorias (exemplo: redução de 20% nos defeitos). O projeto traz melhoria de produtividade para a empresa? Se o projeto trouxer melhoria de produtividade para empresa (ou seja, se a empresa poderá fornecer mais produtos através de um mesmo recurso, ou se economizará recursos), descrever essas melhorias do ponto de vista da empresa. Se possível, quantificar essas melhorias (exemplo: redução de 5% do OPEX destinado à manutenção). O projeto traz aumento de competitividade para a empresa? Comente como as novas funcionalidades, melhorias de qualidade e/ou aumento de produtividade tornam a empresa mais competitiva frente aos concorrentes? Existem outros fatores do projeto que tornam a empresa mais competitiva?</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '7',
        label: 'Tecnólogas Utilizadas (Linguagem, BD, plataforma, metodologia, design pattern)',
        children: <div>
            <Typography className="greyed">Cite as tecnologias envolvidas no projeto. O projeto precisa de tecnologia para ser desenvolvido ou se trata apenas de mudanças no processo, sem envolvimento de tecnologia?</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '8',
        label: 'Integração',
        children: <div>
            <Typography className="greyed">Possui Integração? Quais Sistemas internos, Órgãos governamentais ou plataformas de terceiros serão integradas a solução e quais suas funcionalidades?</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '9',
        label: 'Status do Projeto ao Final do Ano-Base',
        children: <div>
            <Typography className="greyed">Citar qual é a etapa da metodologia em que se encontrava o projeto no final do ano-base).Por exemplo, se o projeto está concluído, se está em andamento e na etapa de testes, ou se está na etapa de levantamento de requisitos, entre outras.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '10',
        label: 'Observações Gerais/Atualização de Status',
        children: <div>
            <Typography className="greyed">Utilize esse campo para trazer informações adicionais que julgue importantes para a análise da equipe do FI Group. Utilize esse campo, também, para trazer atualizações de status do projeto conforme ocorrer evolução durante o ano-base que está sendo trabalhado. Por exemplo, informar se e quando o projeto foi concluído, ou se foi interrompido por alguma dificuldade técnica/Mercadológica</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
    {
        key: '11',
        label: 'Esclarecimentos FI',
        children: <div>
            <Typography className="greyed">Campo exclusivo do consultor para trazer detalhamentos, ou questionamentos referentes ao projeto.</Typography>
            <Input.TextArea {...textAreaProps} />
        </div>,
    },
];


export default function ComplementaryInformation () {

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <div className="ea-tabs-ci-spacer">
            <Form
                name="layout-multiple-horizontal"
                layout="vertical"
            >
                <div className="ea-tabs-ci-grid">
                    <Collapse {...collapsedProps} onChange={onChange} items={items} />
                </div>
            </Form>
        </div>
    )
}