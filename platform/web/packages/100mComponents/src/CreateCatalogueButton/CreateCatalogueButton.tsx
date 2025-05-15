import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, IconPack, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import { useCatalogueListAllowedTypesQuery } from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const CreateCatalogueButton = () => {
    const { policies } = useExtendedAuth()
    const { cataloguesCreateType } = useRoutesDefinition()

    const { t } = useTranslation()

    const allowedCreationTypes = useCatalogueListAllowedTypesQuery({
        query: {

        }
    }).data?.items

    const items = useMemo(() => allowedCreationTypes?.map((type): TMSMenuItem | undefined => {
        return {
                key: type,
                label: type,
                icon: <IconPack.system />,
                to: cataloguesCreateType(type)
            }
    }).filter(Boolean) as TMSMenuItem[], [t, allowedCreationTypes])

    const { buttonProps, menu } = useButtonMenu({
        items
    })
    return (
        <>
            {policies.catalogue.canCreate() && <CustomButton
                sx={{
                    width: "100%"
                }}
                startIcon={<AddCircleOutlineRounded />}
                {...buttonProps}
            >
                {t("newCatalogue")}
            </CustomButton>}
            {menu}
        </>
    )
}
