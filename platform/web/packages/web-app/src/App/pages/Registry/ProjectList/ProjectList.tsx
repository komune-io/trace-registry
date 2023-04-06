import { Box, Typography } from '@mui/material'
import { Header } from '@smartb/g2'
import {useProjectPageQuery, useProjectFilters, ProjectTable} from 'domain-components'
import { Fragment } from "react"
import { useTranslation } from 'react-i18next';
import { AppPage } from "template";
export const ProjectList = () => {
    const { component, setOffset, submittedFilters } = useProjectFilters()
    const projects = useProjectPageQuery({
        query: submittedFilters
    })
    const {t} = useTranslation()

    return (
        <AppPage flexContent>
            <Box alignSelf="center">
                <Typography sx={{ marginBottom: "5px" }} align="center" variant="h4">{t("projects.registry")}</Typography>
                <Typography sx={{ marginBottom: "40px" }} align="center" variant="body1">{t("projects.followAndTrack")}</Typography>
            </Box>
            <Box>
                <Header
                    content={[
                        {
                            leftPart: [
                                <Fragment key="filters" >{component}</Fragment>
                            ]
                        }
                    ]}
                />
                <ProjectTable
                    page={projects.data}
                    isLoading={projects.isLoading}
                    onOffsetChange={setOffset}
                />
            </Box>
        </AppPage>
    )
}
