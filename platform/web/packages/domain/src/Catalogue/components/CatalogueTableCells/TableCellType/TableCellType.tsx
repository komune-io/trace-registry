import { useCatalogueListAllowedTypesQuery } from '../../../api'
import { useTranslation } from 'react-i18next'
import { TableCellText, TableCellTextProps } from '@komune-io/g2'

export interface TableCellTypeProps extends TableCellTextProps {
    value?: string
}

export const TableCellType = (props: TableCellTypeProps) => {
    const { value, ...other } = props

    const { i18n } = useTranslation()

    const allowedSearchTypes = useCatalogueListAllowedTypesQuery({
        query: {
            language: i18n.language,
            operation: "ALL"
        }
    }).data?.items

    const typeName = allowedSearchTypes?.find((type) => type.identifier === value)?.name

    return (
        <TableCellText value={typeName} {...other} />
    )
}
