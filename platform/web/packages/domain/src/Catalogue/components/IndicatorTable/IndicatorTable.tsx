import { EditRounded } from '@mui/icons-material'
import { iconPack } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, Stack } from '@mui/material'
import { formatNumber, G2ColumnDef, TableCellNumber, TableCellText, TableV2, useTable } from '@komune-io/g2'
import { InformationConcept, parseRangeValue } from '../../model'
import { useDatasetUpdateDistributionValueCommand } from '../../api'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Dataset } from '../../../Dataset'
import { AddIndicatorModal } from '../IndicatorBlock/AddIndicatorModal'

export interface IndicatorTableProps {
    data: InformationConcept[]
    dataset: Dataset
}

export const IndicatorTable = (props: IndicatorTableProps) => {
    const { data, dataset } = props
    const { t, i18n } = useTranslation()
    const { draftId } = useParams()
    const queryClient = useQueryClient()
    const [editIndicator, setEditIndicator] = useState<InformationConcept | undefined>(undefined)

    const updateDistributionValue = useDatasetUpdateDistributionValueCommand({})

    const distribution = (dataset.distributions ?? [])[0]

    const deleteIndicator = useCallback(
        async (infoConcept: InformationConcept) => {
            const res = await updateDistributionValue.mutateAsync({
                distributionId: distribution?.id!,
                id: dataset?.id!,
                informationConceptId: infoConcept.id
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
            const type = row.original.unit.type
            if (type === "NUMBER") {
                return <TableCellNumber value={Number(row.original.value)} />
            }
            if (type === "NUMBER_RANGE") {
                const range = parseRangeValue(row.original.value ?? "")
                const from = range[0]
                const to = range[1]
                if (!from || !to) return <></>
                return <TableCellText value={t("fromTo", {from: formatNumber(from, i18n.language), to: formatNumber(to, i18n.language)})} />
            }
            return <TableCellText value={row.original.value} />
        }
    }, {
        accessorKey: "context",
        header: t("context"),
        cell: ({ row }) => (<TableCellText value={row.original.valueDescription} />)
    }, {
        accessorKey: "options",
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
                    {iconPack.trash}
                </IconButton>
            </Stack>
        )
    }], [t, deleteIndicator, i18n.language])

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
