import { AddCircleOutlineRounded} from '@mui/icons-material'
import { Stack } from '@mui/material'
import { CustomButton, iconPack, Menu, TMSMenuItem, useButtonMenu, useExtendedAuth, useRoutesDefinition } from 'components'
import { TFunction } from 'i18next'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getMenu, MenuItem } from '.'
import { useCatalogueDraftPageQuery } from 'domain-components'

export const usePersonnalMenu = (t: TFunction) => {
    const location = useLocation()

    const { cataloguesToVerify, cataloguesContributions } = useRoutesDefinition()
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
                key: "contributions",
                to: cataloguesContributions(),
                label: t("myContributions"),
                icon: iconPack.contribution,
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
    }, [location, t, cataloguesToVerify, cataloguesContributions, totalToVerify, policies.draft.canAudit])

    return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}


export const MenuHeader = () => {

    const { cataloguesCreateSector, cataloguesCreateSolution, cataloguesCreateSystem, cataloguesCreateProject } = useRoutesDefinition()
    const {policies} = useExtendedAuth()

    const { t } = useTranslation()

    const personnalMenu = usePersonnalMenu(t)

    const items = useMemo((): TMSMenuItem[] => [{
        key: "newSystem",
        label: t("newSystem"),
        icon: iconPack.system,
        to: cataloguesCreateSystem()
    }, {
        key: "newSolution",
        label: t("newSolution"),
        icon: iconPack.solution,
        to: cataloguesCreateSolution()
    }, {
        key: "newSector",
        label: t("newSector"),
        icon: iconPack.sector,
        to: cataloguesCreateSector()
    }, {
        key: "newProject",
        label: t("newProject"),
        icon: iconPack.project,
        to: cataloguesCreateProject()
    }], [t])

    const { buttonProps, menu } = useButtonMenu({
        items
    })
    return (
        <Stack
            gap={2}
        >
            {policies.audit.canCreate() && <CustomButton
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
                menu={personnalMenu}
            />
        </Stack>
    )
}
