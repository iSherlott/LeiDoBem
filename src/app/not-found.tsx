
import { Button } from 'antd'
import Link from 'next/link'

export default function NotFound () {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>

            <div style={{ background: 'url("https://connect-staging.fi-group.com/identity/static/media/Desktop.041a26cf.jpg")', width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div style={{ minWidth: '400px', height: '100%', background: '#2397c524', position: 'absolute', left: '0px', top: '0px', color: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end', height: '100%' }}>
                    <h1 style={{ fontFamily: 'system-ui', fontSize: '60px', right: '-241.4px', position: 'relative' }}>404 - Not Found</h1>
                    <p style={{ right: '-240px', position: 'relative', fontFamily: 'monospace' }}>Não conseguimos encontrar os recursos que você esta procurando</p>
                    <Link href="/bypass">
                        <Button style={{ right: '-80px', position: 'relative', top: '15px' }}>Voltar para o Ínicio</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}