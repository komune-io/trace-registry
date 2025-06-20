import { extractCatalogueIdentifier } from '../../../api'
import { TableCellText, TableCellTextProps } from '@komune-io/g2'

export interface TableCellIdentifierProps extends TableCellTextProps {
    value?: string
}

export const TableCellIdentifier = (props: TableCellIdentifierProps) => {
    const { value, componentProps, ...other } = props

    const identifier = value ? extractCatalogueIdentifier(value) : undefined

    return (
        <TableCellText
            value={identifier}
            componentProps={{
                sx: {
                    fontWeight: 600
                },
                ...componentProps
            }}
            {...other}
        />
    )
}
