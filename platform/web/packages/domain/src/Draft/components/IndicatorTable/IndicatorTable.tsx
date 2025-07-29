import { EditRounded } from '@mui/icons-material'
import { IconPack, maybeAddItem } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Stack } from '@mui/material'
import { G2ColumnDef, TableCellText, TableV2, useTable } from '@komune-io/g2'
import { InformationConcept } from '../../model'
import { useDatasetRemoveDistributionValueCommand } from '../../../Catalogue'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Dataset } from '../../../Dataset'
import { AddIndicatorModal } from '../IndicatorBlock/AddIndicatorModal'
import { formatInformationConceptValue } from '../IndicatorVisualization'

export interface IndicatorTableProps {
    data: InformationConcept[]
    dataset: Dataset
    readOnly?: boolean
}

export const IndicatorTable = (props: IndicatorTableProps) => {
    const { data, dataset, readOnly } = props
    const { t, i18n } = useTranslation()
    const { draftId } = useParams()
    const queryClient = useQueryClient()
    const [editIndicator, setEditIndicator] = useState<InformationConcept | undefined>(undefined)

    const removeDistributionValue = useDatasetRemoveDistributionValueCommand({})

    const distribution = (dataset.distributions ?? [])[0]

    const deleteIndicator = useCallback(
        async (infoConcept: InformationConcept) => {
            const res = await removeDistributionValue.mutateAsync({
                distributionId: distribution?.id!,
                id: dataset?.id!,
                informationConceptId: infoConcept.id,
                valueId: infoConcept.valueId,
            })
            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
            }
        },
        [dataset, distribution],
    )


    const columns = useMemo((): G2ColumnDef<InformationConcept>[] => [{
        accessorKey: "type",
        header: t("type"),
        cell: ({ row }) => (<TableCellText value={row.original.name} />)
    }, {
        accessorKey: "value",
        header: t("value"),
        cell: ({ row }) => {
            return <TableCellText value={formatInformationConceptValue(row.original, t, i18n.language)} />
        }
    }, {
        accessorKey: "context",
        header: t("context"),
        cell: ({ row }) => (<TableCellText value={row.original.valueDescription} />)
    }, ...maybeAddItem(!readOnly, {
        accessorKey: "options",
        header: t("options"),
        cell: ({ row }) => (
            <Stack
                direction="row"
                alignItems="center"
            >
                <IconButton
                    onClick={() => setEditIndicator(row.original)}
                >
                    <EditRounded />
                </IconButton>
                <IconButton
                    onClick={() => deleteIndicator(row.original)}
                >
                    {<IconPack.trash />}
                </IconButton>
            </Stack>
        )
    })], [t, deleteIndicator, i18n.language, readOnly])

    const tableState = useTable({
        data,
        columns
    })

    return (
        <>
            <TableV2<InformationConcept>
                tableState={tableState}
            />
            {editIndicator && (
                <AddIndicatorModal
                    open
                    onClose={() => setEditIndicator(undefined)}
                    dataset={dataset}
                    editIndicator={editIndicator}
                />
            )}
        </>
    )
}
