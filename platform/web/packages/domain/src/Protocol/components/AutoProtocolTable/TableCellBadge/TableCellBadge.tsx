
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

    return (
        <CertificationBadge name={value.name} image={value.image} value={value.value} {...other} />
    )
}
