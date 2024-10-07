import { Typography } from "antd";


export default function CardTitleCustom ({ text }: { text: string }) {
    return (
        <div style={{ width: '100%', height: '125px', borderRadius: '15px', background: 'url("/figroup/background_office.jfif")' }}>
            <Typography style={{ fontSize: '32px', color: 'white', placeContent: 'center', textAlign: 'center', height: '100%' }}>{text}</Typography>
        </div>
    )
}