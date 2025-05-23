import { useCallback, useMemo } from 'react'
import { Catalogue, CatalogueDraft } from '../../model'
import { useTranslation } from 'react-i18next'
import { Box, IconButton, Stack } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { useButtonMenu, useConfirmationPopUp, useToggleState, CustomButton, IconPack } from 'components'
import { DraftStatusChip } from '../DraftTable'
import { SubmitModal } from './SubmitModal'

interface CatalogueEditionHeaderProps {
    catalogue?: Catalogue
    draft?: CatalogueDraft
    onValidate?: () => Promise<any>
    onDeleteDraft?: () => Promise<any>
    onDeleteCatalogue?: () => Promise<any>
    onSubmit?: (reason: string) => Promise<any>
    beforeSubmit?: () => Promise<boolean>
    disabled?: boolean
    isUpdating?: boolean
}

export const CatalogueEditionHeader = (props: CatalogueEditionHeaderProps) => {
    const { catalogue, onSubmit, beforeSubmit,  onDeleteDraft, onDeleteCatalogue, onValidate, draft, disabled, isUpdating } = props
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
        onSubmit: onDeleteDraft,
        variant: 'deletion',
        title: t("catalogues.draftDeleteTitle", { name: catalogue?.title, lang: t("lang." + draft?.language) }),
        description: t("catalogues.draftDeleteDescription"),
    })

    const catalogueDeletion = useConfirmationPopUp({
        onSubmit: onDeleteCatalogue,
        variant: 'deletion',
        title: t("catalogues.catalogueDeleteTitle", { name: catalogue?.title }),
        description: t("catalogues.catalogueDeleteDescription"),
    })

    const items = useMemo(() => [
        ...(onDeleteCatalogue ? [{
            key: "delete",
            label: t("deleteCatalogue"),
            color: "#B01717",
            icon: <IconPack.trash />,
            onClick: catalogueDeletion.handleOpen
        }] : []),
        ...(onDeleteDraft ? [{
            key: "delete",
            label: t("deleteDraft"),
            color: "#B01717",
            icon: <IconPack.trash />,
            onClick: handleOpen
        }] : [])
    ], [t, handleOpen, onDeleteDraft, catalogueDeletion.handleOpen])

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
            {catalogueDeletion.popup}
        </Stack>
    )
}
