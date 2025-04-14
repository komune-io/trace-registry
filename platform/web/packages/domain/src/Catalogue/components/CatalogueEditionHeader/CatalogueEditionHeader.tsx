import { useCallback, useMemo } from 'react'
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
    onValidate?: () => Promise<any>
    onDelete?: () => Promise<any>
    onSubmit?: (reason: string) => Promise<any>
    beforeSubmit?: () => Promise<boolean>
    disabled?: boolean
    isUpdating?: boolean
}

export const CatalogueEditionHeader = (props: CatalogueEditionHeaderProps) => {
    const { catalogue, onSubmit, beforeSubmit,  onDelete, onValidate, draft, disabled, isUpdating } = props
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const onOpenSubmitModal = useCallback(
      async () => {
        if (beforeSubmit) {
            const res = await beforeSubmit()
            if (res) {
                toggle()
            }
        } else {
            toggle()
        }
      },
      [toggle, beforeSubmit],
    )
    

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
            isLoading={isUpdating}
            >
                {t("validate")}
            </CustomButton>}
            {draft?.status !== "SUBMITTED" && onSubmit && <CustomButton
            onClick={onOpenSubmitModal}
            disabled={disabled}
            isLoading={isUpdating}
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
