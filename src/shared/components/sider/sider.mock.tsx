import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

const getCompanyRegExp = new RegExp(/(\/company\/)([^\/]*)/);

const getIdPath = () => getCompanyRegExp.test(location.href) ? getCompanyRegExp.exec(location.href)![ 2 ] : null;

export const appMenusMock = (): { key: string, label: any, icon: ReactNode, path: string, children?: any }[] => {
    return [
        {
            key: 'sidermenu_1',
            label: 'Homepage',
            icon: <HomeOutlined />,
            path: `/company/${getIdPath()}/home`
        },
        {
            key: 'sidermenu_2',
            label: 'Análise de Elegibilidade',
            icon: <UnorderedListOutlined />,
            path: `/company/${getIdPath()}/eligibilityAnalysis`
        }
    ]
};