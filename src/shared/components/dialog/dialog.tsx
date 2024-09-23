import { Divider, DividerProps, Modal, ModalProps } from "antd"
import React, { Dispatch, SetStateAction } from "react"

export interface ModalPropsExtended extends ModalProps {
    upperDividerProps?: DividerProps
    bottomDividerProps?: DividerProps
}

/* REMINDER - CASO FOR MODIFICAR ESTE OBJETO, LEVAR EM CONTA QUE MULTIPLOS ELEMENTOS PODEM ESTAR O UTILIZANDO */
export default function AntDialog ({ children, open, setOpen, loading, modalProps }: { children?: any, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, loading?: boolean, modalProps?: ModalPropsExtended }) {

    let upperDividerProps = {}
    let bottomDividerProps = {}

    modalProps?.upperDividerProps ? upperDividerProps = modalProps?.upperDividerProps : upperDividerProps = {}
    modalProps?.bottomDividerProps ? bottomDividerProps = modalProps?.bottomDividerProps : bottomDividerProps = {}

    const getComponentByKey = (key: string): React.ReactNode => {

        let foundVal = undefined;

        React.Children.map(children, (child) => {
            if (child.type.displayName === key) {
                foundVal = child
            }
        })

        return foundVal
    }

    return (
        <Modal
            title={
                <div>
                    {getComponentByKey('Header')}
                    <Divider {...upperDividerProps} style={{ margin: '12px 0px' }} />
                </div>
            }
            footer={
                <div>
                    <Divider {...bottomDividerProps} />
                    {getComponentByKey('Footer')}
                </div>
            }
            loading={loading ? loading : false}
            open={open}
            style={{ padding: '10px 0px' }}
            onCancel={() => setOpen(false)}
            {...modalProps}
        >
            {
                getComponentByKey('Body')
            }
        </Modal>
    )
}


// A ORDEM DESTA DEFINIÇÃO IMPORTA
const Header = (props: { [ key: string ]: any }) => <div>{props.children}</div>;
Header.displayName = 'Header';
AntDialog.Header = Header;

const Body = (props: { [ key: string ]: any }) => <div>{props.children}</div>;
Body.displayName = 'Body';
AntDialog.Body = Body;

const Footer = (props: { [ key: string ]: any }) => <div>{props.children}</div>;
Footer.displayName = 'Footer';
AntDialog.Footer = Footer;