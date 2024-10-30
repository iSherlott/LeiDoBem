import { Typography } from "antd";


const opacity = '0.2'

export default function CardTitleCustom ({ text }: { text: string }) {
    return (
        <div style={{ width: '100%', overflow: 'hidden', height: '150px', transition: 'none', borderRadius: '15px', background: `linear-gradient(90deg, rgba(10,146,240,${opacity}) 0%, rgba(10,4,168,${opacity}) 39%, rgba(10,4,168,${opacity}) 65%, rgba(10,146,240,${opacity}) 100%)` }}>
            <div style={{ background: 'url("/figroup/background_office.jfif") center center / 100% no-repeat', height: '100%', width: '100%', position: 'relative', zIndex: '-1' }}></div>
            <Typography style={{ fontSize: '32px', color: 'white', placeContent: 'center', textAlign: 'center', height: '100%', position: 'relative', top: '-100%' }}>{text}</Typography>
        </div>
    )
}