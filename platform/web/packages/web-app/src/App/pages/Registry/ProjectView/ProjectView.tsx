import { LinkButton } from '@smartb/g2'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import {
    ProjectActivities, ProjectInformationSection, ProjectAssets,
    useProjectGetQuery
} from 'domain-components'
import { useParams } from 'react-router-dom'
import React, { useCallback, useMemo } from 'react'
import { useRoutesDefinition } from 'components'
import { AppPage, SectionTab, Tab } from 'template'
import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

export interface ProjectViewProps {
}

export const ProjectView = (_: ProjectViewProps) => {
    const { projectId, tab } = useParams()
    const { projectsProjectIdViewTabAll, projects } = useRoutesDefinition()
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentTab = useMemo(() => tab ?? "info", [tab])
    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    const project = projectQuery.data?.item

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        navigate(projectsProjectIdViewTabAll(projectId || "", value))
    }, [])

    const tabs: Tab[] = useMemo(() => [{
        key: 'info',
        label: t('informations'),
        component: (<ProjectInformationSection project={project} isLoading={projectQuery.isLoading} />)
    }, {
        key: 'activities',
        label: t('activities'),
        component: (project ? <ProjectActivities isLoading={projectQuery.isLoading} project={project} /> : <></>)
    }, {
        key: 'assets',
        label: t('assets'),
        component: (project ? <ProjectAssets isLoading={projectQuery.isLoading} project={project} /> : <></>)
    }], [project, projectQuery.isLoading, t])

    return (
        <AppPage title={project?.name ?? t("project")} >
            <SectionTab
              tabs={tabs}
              currentTab={currentTab}
              goBackLink={(<LinkButton sx={{zIndex: 5}} to={projects()} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />}>{t("projectList")}</LinkButton>)}
              onTabChange={onTabChange}
              sx={{
                  "& .AruiSection-contentContainer": {
                      padding: currentTab === "activities" ? "unset" : undefined
                  }
              }}
            />
            {currentTab === "info" && <Typography align='right' sx={{ marginTop: (theme) => theme.spacing(3), color: "#9E9E9E" }} >{t("lastChanged", { date: new Date(project?.lastModificationDate).toLocaleDateString() })}</Typography>}
        </AppPage>
    )
}
