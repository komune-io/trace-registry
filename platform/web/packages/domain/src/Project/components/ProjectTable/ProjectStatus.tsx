import { StatusTag } from '@smartb/g2'

export interface ProjectStatusProps {
    value: string
}

export const ProjectStatus = (props: ProjectStatusProps) => {
    const { value } = props
    return (
        <StatusTag label={value} />
    )
}
