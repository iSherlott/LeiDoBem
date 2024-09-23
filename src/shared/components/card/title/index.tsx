import { Typography } from "antd";


export default function CardTitleCustom ({ text }: { text: string }) {
    return (
        <div style={{ width: '100%', height: '125px', borderRadius: '15px', background: 'linear-gradient(90deg, rgba(10,146,240,1) 0%, rgba(10,4,168,1) 39%, rgba(10,4,168,1) 65%, rgba(10,146,240,1) 100%)' }}>
            <Typography style={{ fontSize: '32px', color: 'white', placeContent: 'center', textAlign: 'center', height: '100%' }}>{text}</Typography>
        </div>
    )
}