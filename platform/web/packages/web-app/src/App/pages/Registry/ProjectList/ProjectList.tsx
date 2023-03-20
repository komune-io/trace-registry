import { Box, Typography } from '@mui/material'
import { Page, Header } from '@smartb/g2'
import { useProjectPageQuery, useProjectFilters, ProjectTable } from 'domain-components'
import { Fragment } from "react"

export const ProjectList = () => {
    const { component, setPage, submittedFilters } = useProjectFilters()
    const projects = useProjectPageQuery({
        query: {
            name: submittedFilters.name,
            offset: submittedFilters.page,
            limit: 20
        }
    })
    return (
        <Page
            flexContent
        >
            <Box
                alignSelf="center"
            >
                <Typography sx={{ marginTop: "40px", marginBottom: "5px" }} align="center" variant="h4">Registry of trusted projects</Typography>
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
                projects={projects.data?.items}
                isLoading={projects.isLoading}
                totalPages={projects.data?.total}
                page={submittedFilters.page + 1}
                setPage={setPage}
                />
            </Box>
        </Page>
    )
}
