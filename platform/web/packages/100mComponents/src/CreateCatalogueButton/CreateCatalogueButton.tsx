import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, iconPack, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import { CatalogueTypes, useCatalogueListAllowedTypesQuery } from 'domain-components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const CreateCatalogueButton = () => {
    const { policies } = useExtendedAuth()
    const { cataloguesCreateSector, cataloguesCreateSolution, cataloguesCreateSystem, cataloguesCreateProject } = useRoutesDefinition()

    const { t } = useTranslation()

    const allowedCreationTypes = useCatalogueListAllowedTypesQuery({
        query: {

        }
    }).data?.items

    const items = useMemo(() => allowedCreationTypes?.map((type): TMSMenuItem | undefined => {
        const catalogueType = type as CatalogueTypes
        if (catalogueType === "100m-system") {
            return {
                key: "newSystem",
                label: t("newSystem"),
                icon: iconPack.system,
                to: cataloguesCreateSystem()
            }
        } else if (catalogueType === "100m-solution") {
            return {
                key: "newSolution",
                label: t("newSolution"),
                icon: iconPack.solution,
                to: cataloguesCreateSolution()
            }
        } else if (catalogueType === "100m-sector") {
            return {
                key: "newSector",
                label: t("newSector"),
                icon: iconPack.sector,
                to: cataloguesCreateSector()
            }
        } else if (catalogueType === "100m-project") {
            return {
                key: "newProject",
                label: t("newProject"),
                icon: iconPack.project,
                to: cataloguesCreateProject()
            }
        }
        return
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
