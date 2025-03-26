import { AddCircleOutlineRounded, EditRounded, MoreVert } from '@mui/icons-material'
import { CustomButton, iconPack, InfoTicket, TitleDivider, TMSMenuItem, useButtonMenu, useToggleState } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Paper } from '@mui/material'
import { AddIndicatorModal } from './AddIndicatorModal'
import { Dataset } from '../../../Dataset'
import { IndicatorTable } from '../IndicatorTable'
import { useDatasetDeleteCommand } from '../../api'
import { useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

export interface IndicatorBlockProps {
    dataset: Dataset
}

export const IndicatorBlock = (props: IndicatorBlockProps) => {
    const { dataset } = props
    const {draftId} = useParams()
    const queryClient = useQueryClient()
    const { t } = useTranslation()

    const [open, _, toggle] = useToggleState()

    const deleteDataset = useDatasetDeleteCommand({})

    const onDelete = useCallback(async () => {
        const res = await deleteDataset.mutateAsync({
            id: dataset.id
        })
        if (res) {
            queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
        }
    }, [dataset, draftId])


    const options = useMemo((): TMSMenuItem[] => [{
        key: "edit",
        label: t("edit"),
        icon: <EditRounded />
    }, {
        key: "delete",
        label: t("delete"),
        icon: iconPack.trash,
        color: "#B01717",
        onClick: onDelete
    }], [t, onDelete])

    const { buttonProps, menu } = useButtonMenu({
        items: options
    })

    const distribution = (dataset.distributions ?? [])[0]

    const indicators = distribution?.aggregators ?? []

    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                p: 4
            }}
        >
            <TitleDivider
                size='h6'
                title={dataset.title ?? ""}
                actions={
                    <>
                        <CustomButton
                            onClick={toggle}
                            startIcon={<AddCircleOutlineRounded />}
                        >
                            {t("catalogues.addIndicator")}
                        </CustomButton>
                        <IconButton
                            {...buttonProps}
                        >
                            <MoreVert />
                        </IconButton>
                        {menu}
                    </>
                }
            />
            {indicators ?
                <IndicatorTable dataset={dataset} data={indicators} />
                :
                <InfoTicket
                    title={t("catalogues.noIndicatorAssociated")}
                />}
            <AddIndicatorModal open={open} onClose={toggle} dataset={dataset} />
        </Paper>
    )
}
