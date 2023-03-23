import { Page, Section, useFormComposable, LinkButton, Action } from '@smartb/g2'
import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ProjectBanner, ProjectDetails, ProjectProtocolesLocation, useProjectGetQuery } from 'domain-components'
import { Link, useParams } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import { useRoutesDefinition } from 'components'

export interface ProjectViewProps {
    readonly: boolean
}

export const ProjectView = (props: ProjectViewProps) => {
    const {readonly} = props
    const { projectId } = useParams()
    const {projectsProjectIdEdit, projectsProjectIdView} = useRoutesDefinition()
    const { t } = useTranslation()
    const [currentTab, setCurrentTab] = useState("info")

    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    const project = projectQuery.data?.item

    const formState = useFormComposable({
        onSubmit: () => { },
        isLoading: projectQuery.isLoading,
        readonly,
        formikConfig: {
            initialValues: {...project, sdgs: [2, 6, 8, 13]}
        }
    })

    const tabs = useMemo(() => [{
        key: 'info',
        label: t('informations')
    },
    {
        key: 'activities',
        label: t('activities')
    },
    {
        key: 'assets',
        label: t('assets')
    },
    ], [t])

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        setCurrentTab(value)
    }, [])

    const editActions = useMemo((): Action[] => [{
        key: "cancel",
        label: t("cancel"),
        variant: "text",
        component: Link,
        componentProps: {to: projectsProjectIdView(projectId!)}
    }, {
        key: "submit",
        label: t("save"),
        onClick: formState.submitForm
    }], [t, projectId, formState.submitForm])

    return (
        <Page
            headerProps={{
                content: [{
                    leftPart: [
                        <Typography key="projectTitle" variant="h5">{project?.name ?? t("project")}</Typography>
                    ],
                    rightPart: [
                        readonly ? <LinkButton to={projectsProjectIdEdit(projectId!)} >{t("edit")}</LinkButton> : undefined
                    ]
                }]
            }}
            bottomActionsProps={{
                actions: !readonly ? editActions : undefined
            }}
        >
            <Section
            headerProps={{
                currentTab,
                tabs,
                onTabChange,
                sx: {
                    "& .MuiTabs-flexContainer": {
                        justifyContent: "center"
                    }
                }
            }}
            flexContent
            >
                <ProjectBanner formState={formState} />
                <Stack
                direction="row"
                gap={7}
                >
                    <ProjectDetails formState={formState} />
                    <ProjectProtocolesLocation formState={formState} />
                </Stack>
            </Section>
            {readonly && <Typography align='right' sx={{marginTop: (theme) =>theme.spacing(3), color: "#9E9E9E"}} >{t("lastChanged", {date: new Date(project?.lastModificationDate).toLocaleDateString()})}</Typography>}
        </Page>
    )
}
