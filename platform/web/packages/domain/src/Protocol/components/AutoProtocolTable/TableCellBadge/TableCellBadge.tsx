
import { CertificationBadge } from '../../CertificationBadge';

export interface TableCellBadgeProps {
    value: {
        name: string;
        image?: string;
        value?: number;
    }
}

export const TableCellBadge = (props: TableCellBadgeProps) => {
    const { value, ...other } = props

    if (!value.name || !value.value) return "-"
    return (
        <CertificationBadge name={value.name} image={value.image} value={value.value} {...other} />
    )
}
