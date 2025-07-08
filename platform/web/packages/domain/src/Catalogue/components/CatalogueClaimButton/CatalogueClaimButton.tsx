import { CustomButton, useExtendedAuth } from 'components'
import { useCallback, useState } from 'react'
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { useCatalogueClaimOwnershipCommand, useCatalogueListAllowedTypesQuery } from '../../api'
import { CatalogueClaimModal } from "../CatalogueClaimModal";

interface CatalogueClaimButtonProps {
    catalogue: Catalogue
}

export const CatalogueClaimButton = (props: CatalogueClaimButtonProps) => {
    const { catalogue } = props
    const { t, i18n } = useTranslation()
    const { keycloak } = useExtendedAuth()

    const [openModal, setOpenModal] = useState(false)

    const claimableTypes = useCatalogueListAllowedTypesQuery({
        query: {
            language: i18n.language,
            operation: "CLAIM_OWNERSHIP"
        }
    }).data?.items ?? []

    const claimCommand = useCatalogueClaimOwnershipCommand({})

    const handleOpenModal = useCallback(() => {
        setOpenModal(true)
    }, [])

    const handleCloseModal = useCallback(() => {
        setOpenModal(false)
    }, [])

    const handleValidateModal = useCallback(async () => {
        const res = await claimCommand.mutateAsync({
            id: catalogue.id,
        })
        if (res) {
            setOpenModal(false)
        }
    }, [claimCommand, catalogue, claimableTypes])

    if (!keycloak.isAuthenticated) {
        return (<CustomButton
            variant="contained"
            onClick={() => keycloak.login()}
        >
            {t("catalogues.claim.button")}
        </CustomButton>
        )
    }

    if (!claimableTypes.some(type => type.identifier == catalogue.type)) {
        return <></>
    }

    return (
        <>
            <CustomButton
                variant="contained"
                onClick={handleOpenModal}
            >
                {t("catalogues.claim.button")}
            </CustomButton>
            <CatalogueClaimModal open={openModal} onClose={handleCloseModal} onValidate={handleValidateModal} catalogue={catalogue} />
        </>
    )
}
