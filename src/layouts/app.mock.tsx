import { ApartmentOutlined, BuildOutlined, CodeOutlined, FileSearchOutlined, FundProjectionScreenOutlined, FundViewOutlined, GroupOutlined, ImportOutlined, InfoCircleOutlined, MoneyCollectOutlined, RadarChartOutlined, TeamOutlined } from "@ant-design/icons";
import Link from "next/link";

export const appMenusMock: MenuItem[] = [
    {
        key: 'menu1',
        label: <Link href={`/financialAnalysis/${'none'}`}>Análise Financeira</Link>,
        icon: <FileSearchOutlined />,
    },
    {
        key: 'menu2',
        label: 'Mapeamento',
        icon: <FundProjectionScreenOutlined />,
        children: [
            {
                key: 'menu21',
                label: <Link href={`/grantsSearcher/${'none'}`}>Buscador de Linhas</Link>,
                icon: <BuildOutlined />
            },
            {
                key: 'menu22',
                label: <Link href={`/projectInformation/${'none'}`}>Identificação de Projeto</Link>,
                icon: <InfoCircleOutlined />
            },
            {
                key: 'menu23',
                label: <Link href={`/projectGrouping/${'none'}`}>Agrupamento de Projetos</Link>,
                icon: <GroupOutlined />
            },
            {
                key: 'menu24',
                label: <Link href={`/recommendations/${'none'}`}>Recomendação (Match)</Link>,
                icon: <ApartmentOutlined />
            },
            {
                key: 'menu25',
                label: <Link href={`/opportunitiesPanels/${'none'}`}>Painel de Oportunidades</Link>,
                icon: <FundViewOutlined />,
            },
        ],
    },
    {
        key: 'menu3',
        label: 'Pleito de Solicitação',
        icon: <ImportOutlined />,
        children: [
            {
                key: 'menu31',
                label: <Link href={`/plea/financial/list/${'none'}`}>Pleito técnico e Financeiro</Link>,
                icon: <FileSearchOutlined />
            },
        ],
    },
    {
        key: 'menu4',
        label: 'Contratação',
        icon: <TeamOutlined />,
        children: [
            {
                key: 'menu41',
                label: 'Prestação de Contas',
                disabled: true,
                icon: <MoneyCollectOutlined />
            },
        ],
    },
    {
        key: 'menu5',
        label: 'Dossiês',
        icon: <CodeOutlined />,
        children: [
            {
                key: 'menu51',
                label: 'Dossiê Digital',
                disabled: true,
                icon: <RadarChartOutlined />
            },
        ],
    },
];