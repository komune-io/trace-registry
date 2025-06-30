import { useMemo } from 'react'
import { CatalogueRef } from '../../../model'
import { LimitedList, LimitedListProps, Chip } from '@komune-io/g2'

export interface TableCellCataloguesProps
    extends Omit<LimitedListProps<{}>, 'listedComponent' | 'values'> {
    value?: CatalogueRef[]
}

export const TableCellCatalogues = (props: TableCellCataloguesProps) => {
    const { value, ...other } = props

    const selected = useMemo(
        () =>
            value?.map((ref) => ({
                label: ref.title,
                key: ref.id,
                color: ref.structure?.color,
            })),
        [value]
    )

    return (
        <LimitedList
            listedComponent={Chip}
            values={selected}
            limit={3}
            {...other}
        />
    )
}
