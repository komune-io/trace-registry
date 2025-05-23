import {Stack} from '@mui/material'
import { IconPack, Menu, useExtendedAuth, useRoutesDefinition} from 'components'
import {TFunction} from 'i18next'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useLocation} from 'react-router-dom'
import {getMenu, MenuItem} from '.'
import { useCatalogueDraftPageQuery} from 'domain-components'
import { CreateCatalogueButton } from './CreateCatalogueButton'

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
                icon: <IconPack.folder />,
                isVisible: policies.catalogue.canSeeMyOrganization(),
                isSelected: location.pathname.includes(cataloguesMyOrganization())
            },
            {
                key: "contributions",
                to: cataloguesContributions(),
                label: t("myContributions"),
                icon: <IconPack.contribution />,
                isVisible: policies.draft.canCreate(),
                isSelected: location.pathname.includes(cataloguesContributions())
            },
            {
                key: "sheetsToValidate",
                to: cataloguesToVerify(),
                label: t("sheetsToValidate"),
                icon: <IconPack.validate />,
                number: totalToVerify,
                isVisible: policies.draft.canAudit(),
                isSelected: location.pathname.includes(cataloguesToVerify())
            }
        ]
    }, [location, t, cataloguesToVerify, cataloguesContributions, cataloguesMyOrganization, totalToVerify, policies.draft.canAudit])

    return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}


export const MenuHeader = () => {

    const { t } = useTranslation()

    const personalMenu = usePersonalMenu(t)
    
    return (
        <Stack
            gap={2}
            sx={{
                pt:1,
            }}
        >
            <CreateCatalogueButton identifier='menu' />
            <Menu
                sx={{
                    width: "100%"
                }}
                menu={personalMenu}
            />
        </Stack>
    )
}
