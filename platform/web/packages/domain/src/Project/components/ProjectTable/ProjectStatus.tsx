import { StatusTag } from '@komune-io/g2'

export interface ProjectStatusProps {
    value: string
}

export const ProjectStatus = (props: ProjectStatusProps) => {
    const { value } = props
    return (
        <StatusTag label={value} />
    )
}
