import {Header, useFormComposable} from '@smartb/g2'
import { useTranslation } from 'react-i18next';
import {Box, Divider, Stack, Typography} from '@mui/material'
import {
    Project,
    useProjectTransactionPageQuery
} from '../../../Project'
import {Fragment, useMemo} from "react";
import {Offset, OffsetPagination} from "template";
import {
    ProjectTransactionsTable,
    ProjectBalanceBanner,
    useTransactionsFilters,
    ProjectTransactionInformations,
    ProjectTransactionHistory
} from "../";

export interface ProjectAssetsProps {
    project?: Project
    isLoading: boolean
}

export const ProjectAssets = (props: ProjectAssetsProps) => {
    const { isLoading, project } = props
    const { component, setOffset, submittedFilters } = useTransactionsFilters()
    const pagination = useMemo((): OffsetPagination => ({ offset: submittedFilters.offset ?? Offset.default.offset, limit: submittedFilters.limit ?? Offset.default.limit }), [submittedFilters.offset, submittedFilters.limit])
    const { t } = useTranslation()
    const projects = useProjectTransactionPageQuery({
        query: submittedFilters
    })
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





    // fieldStackProps

    return (
        <Stack
            direction="row"
            sx={{
                height: "calc(100vh - 200px)",
                minHeight: "fit-content"
            }}
        >
            <Stack
                direction="column"
                sx={{
                    padding: "24px"
                }}
                gap={3}

            >
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.balance")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            <ProjectBalanceBanner formState={formState} />
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.transactions")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>

            <Box>

                <ProjectTransactionsTable
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
                                backgroundColor: "none",
                                "& .AruiHeader-leftPartContainer": {
                                    width: "100%"
                                }
                            }}
                        />
                    }
                    page={{
                        items: [{
                            serial: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: "6/30/22",
                            vintage: 2023,
                            quantity: "1 000 000 tons",
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Purchase",
                            for: "0xe2f2c31bd29a8dc820ef14969abe03213654",
                            from: "0xe2f2c31bd29a8dc820ef14969abe479841320"
                        },{
                            serial: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: "6/30/22",
                            vintage: 2023,
                            quantity: "1 000 000 tons",
                            to: "0xe2f2c31bd29a8dc820ef14969abe89461",
                            type: "Purchase",
                            for: "0xe2f2c31bd29a8dc820ef14969abe03213654",
                            from: "0xe2f2c31bd29a8c820ef14969abe479841320"
                        },{
                            serial: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: "6/30/22",
                            vintage: 2023,
                            quantity: "1 000 000 tons",
                            to: "0xe2f2c31bd29a8...dc820ef14969abe89461",
                            type: "Purchase",
                            for: "0xe2f2c31bd29a8...dc820ef14969abe03213654",
                            from: "0xe2f2c31bd29a8...dc820ef14969abe479841320"
                        },{
                            serial: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: "6/30/22",
                            vintage: 2023,
                            quantity: "1 000 000 tons",
                            to: "0xe2f2c31bd29a8...dc820ef14969abe89461",
                            type: "Purchase",
                            for: "0xe2f2c31bd29a8...dc820ef14969abe03213654",
                            from: "0xe2f2c31bd29a8...dc820ef14969abe479841320"
                        },{
                            serial: "SB1-1-KE-SB5801-4-2022-23924-1840-2017",
                            date: "6/30/22",
                            vintage: 2023,
                            quantity: "1 000 000 tons",
                            to: "0xe2f2c31bd29a8...dc820ef14969abe89461",
                            type: "Purchase",
                            for: "0xe2f2c31bd29a8...dc820ef14969abe03213654",
                            from: "0xe2f2c31bd29a8...dc820ef14969abe479841320"
                        }
                            ],
                        total: 10
                    }}
                    pagination={pagination}
                    isLoading={projects.isLoading}
                    onOffsetChange={setOffset}
                />
            </Box>
            </Stack>
            <Stack
                sx={{
                    backgroundColor: "white",
                    height: "100%",
                    width: "550px",
                    padding: "24px 32px",
                    overflowY: "auto",
                    border: "1px solid black"
                }}
                gap={2}
            >
                <ProjectTransactionInformations isLoading={isLoading}  />
                <ProjectTransactionHistory isLoading={isLoading} project={project} />
            </Stack>

        </Stack>
    )
}
