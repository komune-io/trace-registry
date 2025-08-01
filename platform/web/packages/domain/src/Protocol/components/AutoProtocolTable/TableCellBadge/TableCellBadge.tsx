
import { Badge } from 'components'

export interface TableCellBadgeProps {
    value: {
        label: string;
        icon?: string;
        value?: number;
    }
}

export const TableCellBadge = (props: TableCellBadgeProps) => {
    const { value, ...other } = props

    return (
        <Badge label={value.label} icon={value.icon} value={value.value} {...other} />
    )
}
