import { AddCircleOutlineRounded } from '@mui/icons-material'
import { Divider, Stack } from '@mui/material'
import { CustomButton, GridIcon, Menu, TMSMenuItem, useButtonMenu, useRoutesDefinition } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const MenuHeader = () => {

    const { cataloguesCreateSector, cataloguesCreateSolution, cataloguesCreateSystem } = useRoutesDefinition()

    const { t } = useTranslation()

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
            <Divider sx={{ my: 2 }} flexItem />
        </Stack>
    )
}
