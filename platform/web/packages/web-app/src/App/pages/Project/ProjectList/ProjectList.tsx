import { Box, Stack, Typography } from '@mui/material'
import { Header, LinkButton } from '@smartb/g2'
import { useExtendedAuth, useRoutesDefinition } from 'components';
import { useProjectPageQuery, useProjectFilters, ProjectTable } from 'domain-components'
import { Fragment, useMemo } from "react"
import { useTranslation } from 'react-i18next';
import { AppPage, Offset, OffsetPagination } from "template";
export const ProjectList = () => {
    const { component, setOffset, submittedFilters } = useProjectFilters()
    const projects = useProjectPageQuery({
        query: submittedFilters
    })
    const { t } = useTranslation()
    const {keycloak} = useExtendedAuth()
    const {projectsCreateStep} = useRoutesDefinition()

    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])

    return (
        <Stack
            sx={{
                width: "100%",
                height: "100%",
                "& .AruiPage-pageCenterer": {
                    flexGrow: 1,
                    overflow: "auto"
                }
            }}
        >
            <AppPage
                flexContent
                headerProps={{
                    content: [
                      {
                        rightPart: [
                          keycloak.isAuthenticated ? <LinkButton to={projectsCreateStep("0")} key="create" >{t("newProject")}</LinkButton> : undefined
                        ]
                      }
                    ]
                  }}
            >
                <Box alignSelf="center">
                    <Typography sx={{ marginBottom: "5px" }} align="center" variant="h4">{t("projects.registry")}</Typography>
                    <Typography sx={{ marginBottom: "40px" }} align="center" variant="body1">{t("projects.followAndTrack")}</Typography>
                </Box>
                <Box
                    sx={{
                        paddingBottom: "70px"
                    }}
                >

                    <ProjectTable
                        header={
                            <Header
                                content={[
                                    {
                                        leftPart: [
                                            <Fragment key="filters" >{component}</Fragment>
                                        ]
                                    }
                                ]}
                                sx={{
                                    "& .AruiHeader-leftPartContainer": {
                                        width: "100%"
                                    },
                                }}
                            />
                        }
                        page={projects.data}
                        pagination={pagination}
                        isLoading={projects.isLoading}
                        onOffsetChange={setOffset}
                    />
                </Box>
            </AppPage>
        </Stack>
    )
}
