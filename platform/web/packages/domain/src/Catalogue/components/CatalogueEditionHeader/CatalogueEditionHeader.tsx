import { useMemo } from 'react'
import { Catalogue } from '../../model'
import { useTranslation } from 'react-i18next'
import { Box, IconButton, Stack } from '@mui/material'
import { Button } from '@komune-io/g2'
import { DeleteRounded, MoreVert } from '@mui/icons-material'
import { useButtonMenu, useConfirmationPopUp, useToggleState } from 'components'
import { CatalogueStatusChip } from '../CatalogueTable'
import { SubmitModal } from './SubmitModal'

interface CatalogueEditionHeaderProps {
    catalogue?: Catalogue
    onSave?: () => Promise<any>
    onDelete?: () => Promise<any>
    onSubmit: (reason: string) => Promise<any>
}

export const CatalogueEditionHeader = (props: CatalogueEditionHeaderProps) => {
    const { catalogue, onSave, onSubmit, onDelete } = props
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const {
        popup,
        handleOpen
    } = useConfirmationPopUp({
        onSubmit: onDelete,
        variant: 'deletion',
        title: t("catalogues.deleteTitle", { name: catalogue?.title }),
        description: t("catalogues.deleteDescription"),
    })


    const items = useMemo(() => [
        // {
        //     key: "history",
        //     label: t("history"),
        //     icon: <HistoryRounded />
        // },
        ...(onDelete ? [{
            key: "delete",
            label: t("delete"),
            color: "#B01717",
            icon: <DeleteRounded />,
            onClick: handleOpen
        }] : [])
    ], [t, handleOpen, onDelete])

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
            {onSave && <Button
                onClick={onSave}
            >
                {t("save")}
            </Button>}
            <Button>
                {t("catalogues.createAdraft")}
            </Button>
            <Button
            onClick={toggle}
            >
                {t("sendForValidation")}
            </Button>
            <IconButton
                {...buttonProps}
                size={"small"}
            >
                <MoreVert />
            </IconButton>
            {menu}
            <SubmitModal open={open} onClose={toggle} onSubmit={onSubmit} />
            {popup}
        </Stack>
    )
}
