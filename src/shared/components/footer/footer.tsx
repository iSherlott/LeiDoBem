import { useState } from "react";
import ModalConfidentialTerm from "../termsOfService";
import { Divider, Typography } from "antd";
import { useAppAuth } from "@/hooks/auth";

export default function FooterCustom () {

    const user = useAppAuth()

    const [ viewTerms, setViewTerms ] = useState<boolean>(false)

    const divider = <Divider type="vertical" style={{ background: 'white', height: '60%', placeSelf: 'center' }} />

    const termsOfUseButton = <Typography style={{ color: 'white', cursor: 'pointer', textDecorationLine: 'underline' }} onClick={() => setViewTerms(!viewTerms)}>Termos de Uso</Typography>

    return (
        <>
            <ModalConfidentialTerm show={viewTerms} toggleShow={() => setViewTerms(!viewTerms)} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <Typography style={{ color: 'white', display: 'flex' }}>Copyright {new Date().getFullYear()}, FI Group™ todos os direitos reservados. {divider}{termsOfUseButton}{divider}Política de Privacidade{divider}Política de Cookies{divider}{user.email}</Typography>
            </div>
        </>
    )
}