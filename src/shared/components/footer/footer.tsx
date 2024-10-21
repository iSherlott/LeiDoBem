import { useState } from "react";
import ModalConfidentialTerm from "../termsOfService";
import { Divider, Typography } from "antd";
import { useAuth } from "@/hooks/auth";

export default function FooterCustom () {

    const [ viewTerms, setViewTerms ] = useState<boolean>(false)
    const { user } = useAuth()

    const divider = <Divider type="vertical" style={{ background: 'white', height: '60%', placeSelf: 'center' }} />

    const termsOfUseButton = <Typography style={{ color: 'white', cursor: 'pointer', textDecorationLine: 'underline' }} onClick={() => setViewTerms(!viewTerms)}>Termos de Uso</Typography>

    return (
        <>
            <ModalConfidentialTerm show={viewTerms} toggleShow={() => setViewTerms(!viewTerms)} />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: 'auto' }}>
                    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_394_6519)">
                            <path d="M13.4647 0.707275C14.955 0.707275 16.1585 1.88102 16.1585 3.40249C16.1585 4.89273 14.955 6.06647 13.4647 6.06647C11.9745 6.06647 10.7695 4.89273 10.7695 3.40249C10.7695 1.8796 11.9745 0.707275 13.4647 0.707275Z" fill="white" />
                            <path d="M7.78049 5.35393H9.3644V0.5H7.78049C3.49001 0.5 0 3.99001 0 8.28048V9.1065V9.86582V24.5H0.671319C2.98758 24.5 4.86529 22.6223 4.86529 20.306V13.5744H8.27439V9.0398H4.85393V8.28048C4.85251 6.66818 6.16677 5.35393 7.78049 5.35393Z" fill="white" />
                            <path d="M15.8674 18.248L15.8745 9.03125H11.0532L11.0461 17.9429C11.0461 20.4181 11.716 22.1809 13.0218 23.2311C14.0124 24.0955 15.6276 24.5 17.7991 24.4829C17.8019 24.4815 17.8033 24.4801 17.8047 24.4773V20.262C16.4678 20.174 15.8674 19.5836 15.8674 18.248Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_394_6519">
                                <rect width="17.8047" height="24" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Typography style={{ color: 'white' }}>{user.email}</Typography>
                </div>

                <Typography style={{ color: 'white', display: 'flex' }}>Copyright {new Date().getFullYear()}, FI Group™ todos os direitos reservados. {divider}{termsOfUseButton}{divider}Política de Privacidade{divider}Política de Cookies{divider}Canal de Reclamações e Compliance</Typography>
            </div>
        </>
    )
}