import { useMemo } from 'react'
import { Catalogue, CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { Box, IconButton, Stack } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { useButtonMenu, useConfirmationPopUp, useToggleState, CustomButton, iconPack } from 'components'
import { DraftStatusChip } from '../DraftTable'
import { SubmitModal } from './SubmitModal'

interface CatalogueEditionHeaderProps {
    catalogue?: Catalogue
    draft?: CatalogueDraft
    onSave?: () => Promise<any>
    onValidate?: () => Promise<any>
    onDelete?: () => Promise<any>
    onSubmit?: (reason: string) => Promise<any>
    disabled?: boolean
}

export const CatalogueEditionHeader = (props: CatalogueEditionHeaderProps) => {
    const { catalogue, onSave, onSubmit, onDelete, onValidate, draft, disabled } = props
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const {
        popup,
        handleOpen
    } = useConfirmationPopUp({
        onSubmit: onDelete,
        variant: 'deletion',
        title: t("catalogues.draftDeleteTitle", { name: catalogue?.title, lang: t("lang." + draft?.language) }),
        description: t("catalogues.draftDeleteDescription"),
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
            icon: iconPack.trash,
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
            {draft && <DraftStatusChip status={draft?.status} />}
            <Box flex={1} />
            {onValidate && <CustomButton
            onClick={onValidate}
            disabled={disabled}
            >
                {t("validate")}
            </CustomButton>}
            {onSave && <CustomButton
                onClick={onSave}
                disabled={disabled}
            >
                {t("catalogues.saveTheDraft")}
            </CustomButton>}
            {draft?.status !== "SUBMITTED" && onSubmit && <CustomButton
            onClick={toggle}
            disabled={disabled}
            >
                {t("sendForValidation")}
            </CustomButton>}
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
