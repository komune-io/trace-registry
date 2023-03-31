import { Box, Typography } from '@mui/material'
import { Header } from '@smartb/g2'
import {useProjectPageQuery, useProjectFilters, ProjectTable} from 'domain-components'
import { Fragment } from "react"
import { AppPage } from "template";
export const ProjectList = () => {
    const { component, setOffset, submittedFilters } = useProjectFilters()
    const projects = useProjectPageQuery({
        query: submittedFilters
    })

    return (
        <AppPage flexContent>
            <Box alignSelf="center">
                <Typography sx={{ marginBottom: "5px" }} align="center" variant="h4">Registry of trusted projects</Typography>
                <Typography sx={{ marginBottom: "40px" }} align="center" variant="body1">Follow and track activities on verified and trusted projects.</Typography>
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
