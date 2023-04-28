import { useFormComposable } from '@smartb/g2'
import { Stack } from '@mui/material'
import {
    Project,
    ProjectBanner,
    ProjectDetails,
    ProjectProtocolesLocation,
} from 'domain-components'

export interface ProjectTransactionInformationsProps {
    project?: Project
    isLoading: boolean
}

export const ProjectTransactionInformations = (props: ProjectTransactionInformationsProps) => {
    const { isLoading, project } = props

    const formState = useFormComposable({
        onSubmit: () => { },
        isLoading: isLoading,
        readonly: true,
        formikConfig: {
            initialValues: {
                ...project,
                location: project?.location ? { position: { lat: project?.location?.lat, lng: project?.location?.lon } } : undefined,
            }
        }
    })

    return (<>
            <ProjectBanner formState={formState} />
            <Stack direction="row" gap={7}>
                <ProjectDetails formState={formState} />
                <ProjectProtocolesLocation formState={formState} />
            </Stack>
        </>
    )
}
