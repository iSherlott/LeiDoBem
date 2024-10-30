import { CloseOutlined } from "@ant-design/icons";
import { Modal, ModalProps } from "antd";

export default function modalDelete ({ open, setOpen }: { open: boolean, setOpen: () => void }) {

    const modalProps: ModalProps = {
        closeIcon: <CloseOutlined color="red" />,
        open,
        onClose: setOpen,
    }

    return (
        <Modal {...modalProps}>
            hey
        </Modal>
    )
}