import {LinkButton} from '@smartb/g2'
import {Typography} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {
    AssetsPage,
    DocumentsPage,
    ProjectActivities,
    ProjectInformationSection,
    useProjectGetQuery
} from 'domain-components'
import {useNavigate, useParams} from 'react-router-dom'
import React, {useCallback, useMemo} from 'react'
import { useRoutesDefinition} from 'components'
import {AppPage, SectionTab, Tab} from 'template'
import {ArrowBackIosNewRounded} from '@mui/icons-material'
import {useProjectListFilesQuery} from "domain-components";

export interface ProjectViewProps {
}

export const ProjectView = (_: ProjectViewProps) => {
    const { projectId, tab } = useParams()
    const { projectsProjectIdViewTabAll, projects } = useRoutesDefinition()
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentTab = useMemo(() => tab ?? "info", [tab])
    const projectQuery = useProjectGetQuery({ query: { id: projectId! } })
    const fileListQuery = useProjectListFilesQuery({ query: { id: projectId! } })
    const project = projectQuery.data?.item

    const onTabChange = useCallback((_: React.SyntheticEvent<Element, Event>, value: string) => {
        navigate(projectsProjectIdViewTabAll(projectId || "", value))
    }, [])
    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [{
            key: 'info',
            label: t('informations'),
            component: (<ProjectInformationSection project={project} isLoading={projectQuery.isLoading}/>)
        }]
        const hasActivity = !!project?.activities && project?.activities.length !== 0
        const hasDocument = (fileListQuery.data?.items?.length ?? 0) > 0
        const hasAssetPools = !!project?.assetPools && project?.assetPools.length !== 0
        hasActivity && tabs.push({
            key: 'activities',
            label: t('activities'),
            component: (project ? <ProjectActivities isLoading={projectQuery.isLoading} project={project}/> : <></>)
        })

        hasAssetPools && tabs.push({
            key: 'assets',
            label: t('assets'),
            component: (project ? <AssetsPage isLoading={projectQuery.isLoading} project={project}/> : <></>)
        })
        hasDocument && tabs.push({
            key: 'documents',
            label: t('documents'),
            component: (<DocumentsPage isLoading={fileListQuery.isLoading} files={fileListQuery.data?.items} />)
        })
        return tabs
    }, [project, projectQuery.isLoading, fileListQuery.data?.items, t])

    return (
        <AppPage title={project?.name ?? t("project")} >
            <SectionTab
              tabs={tabs}
              currentTab={currentTab}
              goBackLink={(<LinkButton sx={{zIndex: 5}} to={projects()} key="goBack" variant="text" startIcon={<ArrowBackIosNewRounded />}>{t("projectList")}</LinkButton>)}
              onTabChange={onTabChange}
              sx={{
                  "& .AruiSection-contentContainer": {
                      padding: currentTab === "activities" || currentTab ==="assets"|| currentTab ==="documents" ? "unset" : undefined
                  }
              }}
            />
            {currentTab === "info" && <Typography align='right' sx={{ marginTop: (theme) => theme.spacing(3), color: "#9E9E9E" }} >{t("lastChanged", { date: new Date(project?.lastModificationDate).toLocaleDateString() })}</Typography>}
        </AppPage>
    )
}
