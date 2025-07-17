import { CustomButton, useExtendedAuth } from 'components'
import { useCallback, useState } from 'react'
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { useCatalogueClaimOwnershipCommand, useCatalogueGetBlueprintsQuery } from '../../api'
import { CatalogueClaimModal } from "../CatalogueClaimModal";

interface CatalogueClaimButtonProps {
    catalogue: Catalogue
}

export const CatalogueClaimButton = (props: CatalogueClaimButtonProps) => {
    const { catalogue } = props
    const { t, i18n } = useTranslation()
    const { keycloak } = useExtendedAuth()

    const [openModal, setOpenModal] = useState(false)

    const claimableTypes = useCatalogueGetBlueprintsQuery({
        query: {
            language: i18n.language,
        }
    }).data?.item?.claimableTypes ?? []

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


    if (!claimableTypes.some(type => type === catalogue.type)) {
        return <></>
    }

    if (!keycloak.isAuthenticated) {
        return (<CustomButton
            variant="contained"
            onClick={() => keycloak.login()}
        >
            {t("catalogues.claim.button")}
        </CustomButton>
        )
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
