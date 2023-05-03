import { StatusTag } from '@smartb/g2'

export interface ProjectTransactionStatusProps {
    value: string
}

export const ProjectTransactionStatus = (props: ProjectTransactionStatusProps) => {
    const { value } = props
    return (
        <StatusTag label={value} />
    )
}
