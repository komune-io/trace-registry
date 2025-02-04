import { useMemo } from 'react'
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { Box, IconButton, Stack } from '@mui/material'
import { Button } from '@komune-io/g2'
import { DeleteRounded, HistoryRounded, MoreVert } from '@mui/icons-material'
import { useButtonMenu } from 'components'
import { CatalogueStatusChip } from '../CatalogueTable'

interface CatalogueEditionHeaderProps {
    catalogue?: Catalogue
    onSave?: () => Promise<any>
}

export const CatalogueEditionHeader = (props: CatalogueEditionHeaderProps) => {
    const { catalogue, onSave } = props
    const { t } = useTranslation()

    const items = useMemo(() => [
        {
            key: "history",
            label: t("history"),
            icon: <HistoryRounded />
        },
        {
            key: "delete",
            label: t("delete"),
            color: "#B01717",
            icon: <DeleteRounded />
        }
    ], [t])

    const { buttonProps, menu } = useButtonMenu({
        items
    })

    return (
        <Stack
            gap={1.5}
            direction="row"
            alignItems="center"

        >
            {catalogue && <CatalogueStatusChip status={catalogue.status} />}
            <Box flex={1} />
            <Button
                onClick={onSave}
            >
                {t("save")}
            </Button>
            <Button>
                {t("catalogues.createAdraft")}
            </Button>
            <Button>
                {t("sendForValidation")}
            </Button>
            <IconButton
                {...buttonProps}
                size={"small"}
            >
                <MoreVert />
            </IconButton>
            {menu}
        </Stack>
    )
}
