import { Box, Typography } from '@mui/material'
import { Page, TableV2, ColumnFactory, useTable, Header, StatusTag } from '@smartb/g2'
import { useRegistryFilters } from './useRegistryFilters'
import { Fragment } from "react"
interface Registry {
    id: string
    name: string
    proponent: string
    type: string
    origin: string
    avgReductions: number
    yearReference: number
    endDate: number
    vintage: number
    status: string
}

let registries: Registry[] = []

for (let i = 0; i < 20; i++) {
    registries.push({
        id: i.toString(),
        name: 'Installation of high efficiency wood burning cookstoves in Tanzania 2',
        proponent: "C-Quest Capital Stoves Asia Limited",
        type: "Solar",
        origin: "Tanzania",
        avgReductions: 1965147,
        yearReference: 2022,
        endDate: Date.now(),
        vintage: 2032,
        status: "Registration and Verification Approval Requested"
    })
}

export const RegistryList = () => {
    const { component, setPage, submittedFilters } = useRegistryFilters()
    const columns = ColumnFactory<Registry>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: 'ID',
                getCellProps: (registry) => ({
                    value: registry.id
                })
            }),

            name: generators.text({
                header: 'Name',
                getCellProps: (registry) => ({
                    value: registry.name,
                    componentProps: {
                        sx: {
                            fontWeight: 600
                        }
                    }
                }),
                className: "nameColumn"
            }),

            proponent: generators.text({
                header: 'Proponent',
                getCellProps: (registry) => ({
                    value: registry.proponent
                })
            }),

            type: generators.text({
                header: 'Type',
                getCellProps: (registry) => ({
                    value: registry.type
                })
            }),

            origin: generators.text({
                header: 'Origin',
                getCellProps: (registry) => ({
                    value: registry.origin
                })
            }),

            avgReductions: generators.number({
                header: 'AVG. reductions',
                getCellProps: (registry) => ({
                    value: registry.avgReductions
                })
            }),

            yearReference: generators.text({
                header: 'Ref. year',
                getCellProps: (registry) => ({
                    value: registry.yearReference.toString()
                })
            }),

            endDate: generators.date({
                header: 'End date',
                getCellProps: (registry) => ({
                    date: registry.endDate
                })
            }),

            vintage: generators.text({
                header: 'Vintage',
                getCellProps: (registry) => ({
                    value: registry.vintage.toString()
                })
            }),

            status: {
                header: "Status",
                cell: () => (
                    <StatusTag customColor='#038538' label='Registration and Verification Approval Requested' />
                ),
                className: "statusColumn"
            }
        })
    })
    const tableState = useTable({
        data: registries,
        columns: columns,
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
                <TableV2
                sx={{
                    "& .statusColumn": {
                        maxWidth: "180px"
                    },
                    "& .AruiTable-tableHead": {
                        top: "70px"
                    }
                }}
                    tableState={tableState}
                    page={submittedFilters.page + 1}
                    onPageChange={setPage}
                />
            </Box>
        </Page>
    )
}
