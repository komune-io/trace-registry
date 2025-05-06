import { AddCircleOutlineRounded, EditRounded, MoreVert } from '@mui/icons-material'
import { CustomButton, IconPack, InfoTicket, TitleDivider, TMSMenuItem, useButtonMenu, useToggleState } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Paper } from '@mui/material'
import { AddIndicatorModal } from './AddIndicatorModal'
import { Dataset } from '../../../Dataset'
import { IndicatorTable } from '../IndicatorTable'
import { useDatasetDeleteCommand } from '../../api'
import { useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { CreateIndicatorBlockModal } from '100m-components'
import { CatalogueDraft } from '../../model'
import { IndicatorVisualization } from '../IndicatorVisualization'
import { successHandler } from '@komune-io/g2'

export interface IndicatorBlockProps {
    dataset: Dataset
    draft?: CatalogueDraft
    readOnly?: boolean
}

export const IndicatorBlock = (props: IndicatorBlockProps) => {
    const { dataset, draft, readOnly } = props
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
            successHandler("indicatorBlockDeleted")
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
        icon: <IconPack.trash />,
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
                    !readOnly ?
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
                     : undefined
                }
            />
            {indicators && indicators.length > 0 ?
                <>
                    <IndicatorTable dataset={dataset} data={indicators} readOnly={readOnly} />
                    <IndicatorVisualization
                        title={t("previsualization")}
                        indicators={indicators}
                        referenceId={dataset.referencingCatalogueIds[0]}
                    />
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
