import { toast } from "react-toastify";
import { UpdateCompanyInfoAPI, UpdateImageCompanyAPI } from "../../../API/CompaniesAPI";
import { CompanyModel } from "../../../Models/CompanyModel";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { IResponseProps } from "../../../Interfaces/IResponseProps";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import useCan from "../../../../hooks/useCan";
import { ISelectProps } from "../../../Interfaces/ISelectProps";
import { AllPotentialMapping } from "../../../../utils/AllPotentialMapping";
import Select from "react-select";
import AntDialog from "../../dialogs/dialog";
import { Typography, Button } from "antd";
import { CompassOutlined } from "@ant-design/icons";

interface IModalEditCompanyProps {
    showModal: boolean,
    toggleShowModal: () => void,
    loading: boolean,
    toggleLoading: (data: boolean) => void,
    company: CompanyModel,
    userEmail: string,
    getCompany: (id: string) => Promise<void>
}

interface FormSubmitProps {
    cnpj: string;
    city: string;
    postalCode: string;
    address: string;
    file: File;
}

export default function ModalEditCompany ({ showModal, toggleShowModal, loading, toggleLoading, company, userEmail, getCompany }: IModalEditCompanyProps) {

    const canView = useCan({ rolesCan: [] });

    const formRef = useRef<HTMLFormElement>();

    const [ showFile, setShowFile ] = useState<boolean>(company.photoURL !== undefined || company.photoURL != null);
    const [ potential, setPotential ] = useState<ISelectProps>({ value: "defaultPotential", label: "Baixo volume de Projetos" });

    const schema = yup.object().shape({
        cnpj: yup.string().max(100, "Limite de caracteres excedido! Limite: 100 Caracteres").required("Por favor, insira um CNPJ válido!").default(company.cnpj),
        city: yup.string().max(500, "Limite de caracteres excedido! Limite: 500 Caracteres").required("Por favor, insira uma cidade para a empresa!").default(company.city),
        postalCode: yup.string().max(10, "Limite de caracteres excedido! Limite: 500 Caracteres").required("Por favor, insira um cep para a empresa!").default(company.postalCode),
        address: yup.string().max(500, "Limite de caracteres excedido! Limite: 500 Caracteres").required("Por favor, insira um endereço para a empresa!").default(company.address),
        file: yup.mixed<File>()
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormSubmitProps>({
        resolver: yupResolver(schema)
    });

    const sendInfos = async (data: FormSubmitProps) => {
        try {
            toggleLoading(true);

            if (data.file && !showFile) {
                await UpdateImageCompanyAPI(data.file, company.id, userEmail);
            }

            await UpdateCompanyInfoAPI(userEmail, company.id, data.cnpj, data.city, data.postalCode, data.address, potential.value).then((resp: IResponseProps) => {
                if (resp.statusCode === 200) {
                    getCompany(company.id);
                    toggleShowModal();
                    toast.success(`Empresa ${company.name} atualizada com sucesso!`);
                }
            }).finally(() => toggleLoading(false));

        } catch (error: any) {
            toast.error(error);
            toggleLoading(false);
        }
    }

    return (
        <AntDialog open={showModal} setOpen={toggleShowModal} modalProps={{ style: { minWidth: '78vw' } }}>

            <AntDialog.Header closeButton>
                <div style={{ display: 'flex', width: '100%' }}>
                    <CompassOutlined style={{ fontSize: '22px', margin: '0px 10px 0px 0px' }} />
                    <Typography style={{ fontSize: '18px' }}>Editar empresa</Typography>
                </div>
            </AntDialog.Header>

            <AntDialog.Body>
                <form ref={formRef as any} onSubmit={handleSubmit(data => sendInfos(data))} autoComplete='false'>

                    <div style={{ display: 'grid', gridTemplate: '100% / 300px 1fr' }}>

                        <div style={{ height: '100%', margin: '16px 0px' }}>

                            <div style={{ width: '100%', textAlign: 'center', height: '9%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0px 5px 0px' }}>
                                {canView &&
                                    <Button style={{ margin: '0px 14px 0px auto' }} onClick={() => setShowFile(!showFile)}><IoClose /></Button>
                                }
                            </div>

                            {showFile ?
                                <div style={{ height: '90%', width: '100%' }}>
                                    <img style={{ width: '95%', height: '89%', borderRadius: '5px' }} src={company.photoURL} alt="logo-empresa" />
                                </div>
                                : <input disabled={!canView} className='form-control' accept="image/*" type="file" {...register("file")} />
                            }
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="d-flex align-items-center mb-1">
                                <div className="w-100 me-1">
                                    <Typography style={{ paddingLeft: '5px' }} className="required">CNPJ</Typography>
                                    <input disabled={!canView} defaultValue={company.cnpj} {...register("cnpj")} className='form-control w-100' type="text" />
                                    <p className='error-message'>{errors.cnpj?.message}</p>
                                </div>
                                <div className="w-100 ms-1">
                                    <Typography style={{ paddingLeft: '5px' }} className="required">CEP </Typography>
                                    <input disabled={!canView} defaultValue={company.postalCode} {...register("postalCode")} className='form-control w-100' type="text" />
                                    <p className='error-message'>{errors.postalCode?.message}</p>
                                </div>
                            </div>
                            <div>
                                <Typography style={{ paddingLeft: '5px' }} className="required">Cidade </Typography>
                                <input disabled={!canView} defaultValue={company.city} {...register("city")} className='form-control' type="text" />
                                <p className='error-message'>{errors.city?.message}</p>
                            </div>
                            <div>
                                <Typography style={{ paddingLeft: '5px' }} className="required">Endereço </Typography>
                                <input disabled={!canView} defaultValue={company.address} {...register("address")} className='form-control' type="text" />
                                <p className='error-message'>{errors.address?.message}</p>
                            </div>
                            <div>
                                <Typography style={{ paddingLeft: '5px' }} className="required">Volume de Projetos</Typography>
                                <Select
                                    value={potential}
                                    className="w-100 ms-1"
                                    options={AllPotentialMapping}
                                    onChange={(e: ISelectProps | null) => {
                                        if (e) {
                                            setPotential(e);
                                        }
                                    }}
                                    classNamePrefix="select"
                                    placeholder="Selecione o volume de projetos"
                                />

                            </div>
                        </div>
                    </div>

                </form>
            </AntDialog.Body>

            <AntDialog.Footer>
                {canView &&
                    <Button onClick={() => formRef.current?.requestSubmit()} type="primary" color="#0000A2">
                        Salvar Informações
                    </Button>
                }
            </AntDialog.Footer>

        </AntDialog>
    )
}