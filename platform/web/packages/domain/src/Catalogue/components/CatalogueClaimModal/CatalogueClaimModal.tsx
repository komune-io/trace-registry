import {Typography} from '@mui/material'
import {TmsPopUp} from 'components'
import {useTranslation} from 'react-i18next'
import {Catalogue} from "../../model";

interface CatalogueClaimModalProps {
    open: boolean
    onClose: () => void
    onValidate: () => Promise<any>
    catalogue: Catalogue
}

export const CatalogueClaimModal = (props: CatalogueClaimModalProps) => {
    const { open, onClose, onValidate, catalogue } = props
    const { t } = useTranslation()

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            onCancel={onClose}
            onSave={onValidate}
            saveText={t("catalogues.claim.validate")}
            title={t("catalogues.claim.title", { name: catalogue?.title ?? ""})}
        >
            <Typography
                variant='caption'
            >
                {t("catalogues.claim.description")}
            </Typography>
        </TmsPopUp>
    )
}
