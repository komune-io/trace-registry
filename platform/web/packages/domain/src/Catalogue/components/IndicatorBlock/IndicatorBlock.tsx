import { AddCircleOutlineRounded, EditRounded, MoreVert } from '@mui/icons-material'
import { CustomButton, iconPack, InfoTicket, TitleDivider, TMSMenuItem, useButtonMenu, useToggleState } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Paper } from '@mui/material'
import { AddIndicatorModal } from './AddIndicatorModal'
import { Dataset } from '../../../Dataset'
import { IndicatorTable } from '../IndicatorTable'
import { useDatasetDeleteCommand } from '../../api'
import { useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { CreateIndicatorBlockModal } from './CreateIndicatorBlockModal'
import { CatalogueDraft } from '../../model'
import { IndicatorVisualization } from '../IndicatorVisualization'

export interface IndicatorBlockProps {
    dataset: Dataset
    draft?: CatalogueDraft
}

export const IndicatorBlock = (props: IndicatorBlockProps) => {
    const { dataset, draft } = props
    const { draftId } = useParams()
    const queryClient = useQueryClient()
    const { t } = useTranslation()
    const [editDataset, seteditDataset] = useState(false)

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
        icon: <EditRounded />,
        onClick: () => seteditDataset(true)
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
            {indicators && indicators.length > 0 ?
                <>
                    <IndicatorTable dataset={dataset} data={indicators} />
                    <IndicatorVisualization indicators={indicators} />
                </>
                :
                <InfoTicket
                    title={t("catalogues.noIndicatorAssociated")}
                />}
            {open && <AddIndicatorModal open onClose={toggle} dataset={dataset} />}
            {editDataset && <CreateIndicatorBlockModal
                open
                onClose={() => seteditDataset(false)}
                editDataset={dataset}
                draft={draft}
            />}
        </Paper>
    )
}
