import { useFormComposable } from '@smartb/g2'
import { Stack } from '@mui/material'
import {
    Project,
    ProjectBanner,
    ProjectDetails,
    ProjectProtocolesLocation,
} from 'domain-components'

export interface ProjectinformationSectionProps {
    project?: Project
    isLoading: boolean
}

export const ProjectinformationSection = (props: ProjectinformationSectionProps) => {
    const { isLoading, project } = props

    const formState = useFormComposable({
        onSubmit: () => { },
        isLoading: isLoading,
        readonly: true,
        formikConfig: {
            initialValues: { ...project, location: project?.location ? { position: { lat: project?.location?.lat, lng: project?.location?.lon } } : undefined, sdgs: [2, 6, 8, 13] }
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
