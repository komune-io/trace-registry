import { Page, useFormComposable, Action, LinkButton } from '@smartb/g2'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {
    ProjectActivities,
    ProjectBanner,
    ProjectDetails,
    ProjectProtocolesLocation,
    useProjectGetQuery,
} from 'domain-components'
import { Link, useParams } from 'react-router-dom'
import { useCallback, useMemo } from 'react'
import {SectionTab, Tab, useRoutesDefinition} from 'components'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

export interface ProjectViewProps {
    readonly: boolean
}

export const ProjectView = (props: ProjectViewProps) => {
    const { readonly } = props
    const { projectId, tab } = useParams()
    const { projectsProjectIdViewTab, projects } = useRoutesDefinition()
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentTab = useMemo(() => tab ?? "info", [tab])
    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    const project = projectQuery.data?.item

    const formState = useFormComposable({
        onSubmit: () => { },
        isLoading: projectQuery.isLoading,
        readonly,
        formikConfig: {
            initialValues: { ...project, location: project?.location ? { position: { lat: project?.location?.lat, lng: project?.location?.lon } } : undefined, sdgs: [2, 6, 8, 13] }
        }
    })

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        navigate(projectsProjectIdViewTab(projectId || "", value))
    }, [])

    const editActions = useMemo((): Action[] => [{
        key: "cancel",
        label: t("cancel"),
        variant: "text",
        component: Link,
        componentProps: { to: projectsProjectIdViewTab(projectId!, ) }
    }, {
        key: "submit",
        label: t("save"),
        onClick: formState.submitForm
    }], [t, projectId, formState.submitForm])


    const tabs: Tab[] = useMemo(() => [{
        key: 'info',
        label: t('informations'),
        component: (<>
            <ProjectBanner formState={formState} />
            <Stack direction="row" gap={7}>
                <ProjectDetails formState={formState} />
                <ProjectProtocolesLocation formState={formState} />
            </Stack>
        </>)
    }, {
        key: 'activities',
        label: t('activities'),
        component: (project ? <ProjectActivities isLoading={projectQuery.isLoading} project={project} /> : <></>)
    }], [project, projectQuery.isLoading, formState, t])

    return (
        <Page
            headerProps={{
                content: [{
                    leftPart: [
                        <Typography key="projectTitle" variant="h5">{project?.name ?? t("project")}</Typography>
                    ]
                }]
            }}
            bottomActionsProps={{
                actions: !readonly ? editActions : undefined
            }}
        >
            <SectionTab
              tabs={tabs}
              currentTab={currentTab}
              goBackLink={(<LinkButton sx={{zIndex: 5}} to={projects()} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />}>{t("projectList")}</LinkButton>)}
              onTabChange={onTabChange}
            />
            {readonly && currentTab === "info" && <Typography align='right' sx={{ marginTop: (theme) => theme.spacing(3), color: "#9E9E9E" }} >{t("lastChanged", { date: new Date(project?.lastModificationDate).toLocaleDateString() })}</Typography>}
        </Page>
    )
}
