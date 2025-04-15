import { AddCircleOutlineRounded} from '@mui/icons-material'
import { Stack } from '@mui/material'
import { CustomButton, iconPack, Menu, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import { TFunction } from 'i18next'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getMenu, MenuItem } from '.'
import { CatalogueTypes, useCatalogueDraftPageQuery, useCatalogueListAllowedTypesQuery } from 'domain-components'

export const usePersonalMenu = (t: TFunction) => {
    const location = useLocation()

    const { cataloguesToVerify, cataloguesContributions, cataloguesMyOrganization } = useRoutesDefinition()
    const {policies} = useExtendedAuth()

    const totalToVerify = useCatalogueDraftPageQuery({
        query: {
            limit: 0,
            status: ["SUBMITTED"]
        }
    }).data?.total

    const menu = useMemo((): MenuItem[] => {
        return [
            {
                key: "mySheets",
                to: cataloguesMyOrganization(),
                label: t("mySheets"),
                icon: iconPack.folder,
                isSelected: location.pathname.includes(cataloguesMyOrganization())
            },
            {
                key: "contributions",
                to: cataloguesContributions(),
                label: t("myContributions"),
                icon: iconPack.contribution,
                isVisible: policies.draft.canCreate(),
                isSelected: location.pathname.includes(cataloguesContributions())
            },
            {
                key: "sheetsToValidate",
                to: cataloguesToVerify(),
                label: t("sheetsToValidate"),
                icon: iconPack.validate,
                number: totalToVerify,
                isVisible: policies.draft.canAudit(),
                isSelected: location.pathname.includes(cataloguesToVerify())
            }
        ]
    }, [location, t, cataloguesToVerify, cataloguesContributions, cataloguesMyOrganization, totalToVerify, policies.draft.canAudit])

    return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}


export const MenuHeader = () => {

    const { cataloguesCreateSector, cataloguesCreateSolution, cataloguesCreateSystem, cataloguesCreateProject } = useRoutesDefinition()
    const {policies} = useExtendedAuth()

    const { t } = useTranslation()

    const personalMenu = usePersonalMenu(t)
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
        <Stack
            gap={2}
            sx={{
                pt:1,
            }}
        >
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
            <Menu
                sx={{
                    width: "100%"
                }}
                menu={personalMenu}
            />
        </Stack>
    )
}
