import { UserModel } from "../../../Models/UserModel";
import ConfidentialTerm from "../../../Pages/ConfidentialTerm";
import ByPass from "../../pages/byPass";


interface ShowConfidentialorByPassProps {
    user: UserModel,
}

export default function ShowConfidentialorByPass ({ user }: ShowConfidentialorByPassProps) {

    const canSeeConfidentialTerm = !user.email?.includes("@fi-group") ?? false;

    return (
        <>
            {
                canSeeConfidentialTerm ? (user.confidentialTerm !== 0 ? <ByPass /> : <ConfidentialTerm />) : <ByPass />
            }
        </>
    )
}