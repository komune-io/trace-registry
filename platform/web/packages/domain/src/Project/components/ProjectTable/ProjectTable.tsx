import { Typography } from '@mui/material'
import { TableV2, ColumnFactory, useTable, StatusTag } from '@smartb/g2'
import { Project } from '../../model'
import {useMemo} from "react"

export interface ProjectTableProps {
    projects?: Project[]
    totalPages?: number
    page?: number
    setPage?: (newPage: number) => void
    isLoading?: boolean
}

export const ProjectTable = (props: ProjectTableProps) => {
    const {isLoading, page, projects, setPage, totalPages} = props

    const columns = useMemo(() => ColumnFactory<Project>({
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
                    value: registry.localization
                })
            }),

            avgReductions: generators.number({
                header: 'AVG. reductions',
                getCellProps: (registry) => ({
                    value: Number(registry.estimatedReduction)
                })
            }),

            yearReference: generators.text({
                header: 'Ref. year',
                getCellProps: (registry) => ({
                    value: registry.referenceYear
                })
            }),

            endDate: generators.date({
                header: 'End date',
                getCellProps: (registry) => ({
                    date: registry.creditingPeriodEndDate
                })
            }),

            vintage: generators.text({
                header: 'Vintage',
                getCellProps: (registry) => ({
                    value: registry.vintage?.toString()
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
    }), [])

    const tableState = useTable({
        data: projects ?? [],
        columns: columns,
    })

    if (!projects) return (<Typography align="center">Aucun projet n'a été trouvé</Typography>)
    return (
        <TableV2<Project>
            sx={{
                "& .statusColumn": {
                    maxWidth: "180px"
                },
                "& .AruiTable-tableHead": {
                    top: "70px"
                }
            }}
            tableState={tableState}
            page={page}
            onPageChange={setPage}
            isLoading={isLoading}
            totalPages={totalPages}
        />
    )
}
