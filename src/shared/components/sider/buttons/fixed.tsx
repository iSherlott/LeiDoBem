import { useRouter } from "@/hooks/router"
import { CalendarOutlined, FolderOutlined, ProfileOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"
import { CSSProperties } from "react"

const sharedFixedButtonsExpandedStyle: CSSProperties = {
    background: '#FFFFFF',
    color: 'black',
    marginBottom: '6px'
}

const sharedFixedButtonsStyle: CSSProperties = {
    background: '#FFFFFF',
    color: 'black',
    width: '100%',
    marginBottom: '6px'
}

export default function SiderFixedButtons ({ collapsed }: { collapsed: boolean }) {

    const router = useRouter()

    const redirectBypass = () => {
        router.redirect(`/bypass`)
    }

    const redirectToFileManager = () => {
        router.redirect(`/fileManager/${'none'}`)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '9px' }}>
            {
                collapsed
                    ? <>
                        <Tooltip title={'Seleção de Empresas'} placement='right'>
                            <Button onClick={redirectBypass} style={sharedFixedButtonsStyle} icon={<ProfileOutlined />}></Button>
                        </Tooltip>
                        <Tooltip title={'Gerenciamento de Documentos'} placement='right'>
                            <Button onClick={() => redirectToFileManager()} style={sharedFixedButtonsStyle} icon={<FolderOutlined />}></Button>
                        </Tooltip>
                        <Tooltip title={'Cronograma'} placement='right'>
                            <Button style={sharedFixedButtonsStyle} icon={<CalendarOutlined />}></Button>
                        </Tooltip>
                    </>
                    : <>
                        <Button onClick={redirectBypass} style={sharedFixedButtonsExpandedStyle} icon={<ProfileOutlined />}>Seleção de Empresas</Button>
                        <Button onClick={() => redirectToFileManager()} style={sharedFixedButtonsExpandedStyle} icon={<FolderOutlined />}>Gerenciamento de Documentos</Button>
                        <Button style={sharedFixedButtonsExpandedStyle} icon={<CalendarOutlined />}>Cronograma</Button>
                    </>
            }
        </div>

    )
}