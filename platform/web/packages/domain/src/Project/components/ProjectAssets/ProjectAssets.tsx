import {FormComposable, Header, useFormComposable} from '@smartb/g2'
import { useTranslation } from 'react-i18next';
import {Box, Divider, Typography} from '@mui/material'
import {
    Project,
    ProjectBalanceBanner,
    ProjectTransactionsTable,
    useTransactionsFilters,
    useProjectTransactionPageQuery
} from 'domain-components'
import {Fragment, useMemo} from "react";
import {Offset, OffsetPagination} from "template";

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

    return (<>
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.balance")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            <ProjectBalanceBanner formState={formState} />
            <Box>
                <Typography variant="h5" >{t("projects.assets.titles.transactions")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>

            <Box
                sx={{
                    paddingBottom: "70px",
                }}
            >

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
            <Box
                sx={{
                    position: "absolute",
                    overflow: "unset",
                    zIndex: "99999",
                    right: "0",
                    width: "35%",
                    height: "100%",
                    backgroundColor: "white",
                    border: "10px solid black",
                    padding: "20px 30px"

                }}>
                <Box>
                    <Typography variant="h5" >{t("projects.assets.transactionInformations")}</Typography>
                    <Divider sx={{ margin: "8px 0" }} />

                    <Typography sx={{ marginBottom: "40px"}}>{t("projects.assets.transaction", { count: 6 })}</Typography>
                    <FormComposable fields={} formState={formState} readonly/>

                </Box>
                <Box>
                    <Typography variant="h5" >{t("projects.assets.history")}</Typography>
                    <Divider sx={{ margin: "8px 0" }} />
                    <FormComposable fields={} formState={formState} />

                </Box>

            </Box>
        </>
    )
}
