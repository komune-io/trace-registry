import { useCallback, useMemo } from 'react'
import { useCatalogueDeleteCommand } from '../../api'
import { Catalogue } from '../../model'
import { IconPack, TMSMenuItem, useButtonMenu, useConfirmationPopUp } from 'components'
import { useTranslation } from 'react-i18next'
import { EditRounded, MoreVert } from '@mui/icons-material'
import { IconButton } from '@mui/material'

interface SubCataloguePanelOptionsProps {
    catalogue?: Catalogue
    onEdit?: () => void
}

export const SubCataloguePanelOptions = (props: SubCataloguePanelOptionsProps) => {
    const { catalogue, onEdit } = props

    const { t } = useTranslation()

    const deleteCatalogue = useCatalogueDeleteCommand({})

    const onDeleteCatalogue = useCallback(
        async () => {
            const res = await deleteCatalogue.mutateAsync({
                id: catalogue?.id!
            })
            if (res) {
                // queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
            }
        },
        [catalogue],
    )

    const { handleOpen, popup } = useConfirmationPopUp({
        onSubmit: onDeleteCatalogue,
        variant: 'deletion',
        title: t("catalogues.subCatalogueDeleteTitle", { name: catalogue?.title }),
        description: t("catalogues.subCatalogueDeleteDescription"),
    })

    const options = useMemo((): TMSMenuItem[] => [{
        key: "edit",
        label: t("edit"),
        icon: <EditRounded />,
        onClick: onEdit
    }, {
        key: "delete",
        label: t("delete"),
        icon: <IconPack.trash />,
        color: "#B01717",
        onClick: handleOpen
    }], [t, onEdit, handleOpen])

    const { buttonProps, menu } = useButtonMenu({
        items: options
    })

    return (
        <>
            <IconButton
                {...buttonProps}
            >
                <MoreVert />
            </IconButton>
            {menu}
            {popup}
        </>
    )
}
