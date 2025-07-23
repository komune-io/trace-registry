import { useCatalogueGetBlueprintsQuery } from '../../../api'
import { useTranslation } from 'react-i18next'
import { TableCellText, TableCellTextProps } from '@komune-io/g2'

export interface TableCellTypeProps extends TableCellTextProps {
    value?: string
}

export const TableCellType = (props: TableCellTypeProps) => {
    const { value, ...other } = props

    const { i18n } = useTranslation()

    const allowedSearchTypes = useCatalogueGetBlueprintsQuery({
        query: {
            language: i18n.language
        }
    }).data?.item

    const typeName = value ? allowedSearchTypes?.types[value]?.name : undefined

    return (
        <TableCellText value={typeName} {...other} />
    )
}
