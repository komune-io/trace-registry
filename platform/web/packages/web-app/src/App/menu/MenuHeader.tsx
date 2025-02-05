import { AddCircleOutlineRounded, DoneRounded, FolderRounded } from '@mui/icons-material'
import { Divider, Stack } from '@mui/material'
import { CustomButton, GridIcon, Menu, TMSMenuItem, useButtonMenu, useRoutesDefinition } from 'components'
import { TFunction } from 'i18next'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getMenu, MenuItem} from '.'

export const usePersonnalMenu = (t: TFunction) => {
    const location = useLocation()

    const { cataloguesToVerify, cataloguesContributions } = useRoutesDefinition()


    const menu = useMemo((): MenuItem[] => {
        return [
            {
                key: "contributions",
                to: cataloguesToVerify(),
                label: t("myContributions"),
                icon: <FolderRounded />,
                isSelected:  location.pathname.includes(cataloguesContributions())
            },
            {
                key: "Secteur",
                to: cataloguesToVerify(),
                label: t("sheetsToValidate"),
                icon: <DoneRounded />,
                isSelected:  location.pathname.includes(cataloguesToVerify())
            }
        ]
    }, [location, t, cataloguesToVerify, cataloguesContributions])

    return useMemo(() => getMenu(location.pathname, menu), [location.pathname, menu])
}


export const MenuHeader = () => {

    const { cataloguesCreateSector, cataloguesCreateSolution, cataloguesCreateSystem } = useRoutesDefinition()

    const { t } = useTranslation()

    const personnalMenu = usePersonnalMenu(t)

    const items = useMemo((): TMSMenuItem[] => [{
        key: "newSystem",
        label: t("newSystem"),
        icon: <GridIcon />,
        to: cataloguesCreateSystem()
    }, {
        key: "newSolution",
        label: t("newSolution"),
        icon: <GridIcon />,
        to: cataloguesCreateSolution()
    }, {
        key: "newSector",
        label: t("newSector"),
        icon: <GridIcon />,
        to: cataloguesCreateSector()
    }], [t])

    const { buttonProps, menu } = useButtonMenu({
        items
    })
    return (
        <Stack
            gap={2}
            sx={{
                pl: 2,
                pr: 1
            }}
        >
            <CustomButton
                sx={{
                    width: "100%"
                }}
                startIcon={<AddCircleOutlineRounded />}
                {...buttonProps}
            >
                {t("newCatalogue")}
            </CustomButton>
            {menu}
            <Menu
                sx={{
                    width: "100%"
                }}
                menu={personnalMenu}
            />
            <Divider sx={{ my: 2 }} flexItem />
        </Stack>
    )
}
