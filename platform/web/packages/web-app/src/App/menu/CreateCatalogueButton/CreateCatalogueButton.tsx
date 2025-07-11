import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import { useCatalogueRefGetTreeQuery } from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { BackEndIcon } from '../useCatalogueMenu'

interface CreateCatalogueButtonProps {
    identifier: string
}

export const CreateCatalogueButton = (props: CreateCatalogueButtonProps) => {
    const { identifier } = props
    const { policies, keycloak } = useExtendedAuth()
    const { cataloguesCreateType } = useRoutesDefinition()

    const { t, i18n } = useTranslation()

    const createButtonStruture = useCatalogueRefGetTreeQuery({
        query: {
            identifier: identifier,
            language: i18n.language
        }
    }).data?.item?.structure?.createButton

    const items = useMemo(() => createButtonStruture?.types?.map((type): TMSMenuItem => {
        return {
            key: type.identifier,
            label: type.name,
            icon: <BackEndIcon url={type.icon} />,
            to: cataloguesCreateType(type.identifier)
        }
    }), [t, createButtonStruture])

    const { buttonProps, menu } = useButtonMenu({
        items
    })

    if (!keycloak.isAuthenticated) {
        return (<CustomButton
            sx={{
                width: "100%"
            }}
            startIcon={<AddCircleOutlineRounded />}
            onClick={() => keycloak.login()}
        >
            {t("newSheet")}
        </CustomButton>
        )
    }
    if (!createButtonStruture || !policies.catalogue.canCreate()) return null
    return (
        <>
            <CustomButton
                sx={{
                    width: "100%"
                }}
                startIcon={<AddCircleOutlineRounded />}
                {...buttonProps}
            >
                {createButtonStruture.label}
            </CustomButton>
            {menu}
        </>
    )
}
