import {Typography} from '@mui/material'
import {ColumnFactory, useTable, StatusTag} from '@smartb/g2'
import {Row} from '@tanstack/react-table';
import {Project} from '../../model'
import {useCallback, useMemo} from "react"
import {OffsetPagination, PageQueryResult, OffsetTable, useRoutesDefinition} from 'components'

function useProductColumn() {
    return useMemo(() => ColumnFactory<Project>({
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
                cell: ({row}) => (
                    <StatusTag  label={row.original.status} />
                ),
                className: "statusColumn"
            }
        })
    }), []);
}

export interface ProjectTableProps {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Project>
    isLoading?: boolean
}

export const ProjectTable = (props: ProjectTableProps) => {
    const {isLoading, page, onOffsetChange} = props
    const {projectsProjectIdView } = useRoutesDefinition()

    const columns = useProductColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
      (row: Row<Project>) => {
        return {
            to: projectsProjectIdView(row.original.id)
          }
      },
      [projectsProjectIdView],
    )
    

    if (!page?.items && !isLoading) return (<Typography align="center">Aucun projet n'a été trouvé</Typography>)
    return (
        <OffsetTable<Project>
            sx={{
                "& .statusColumn": {
                    maxWidth: "180px"
                },
                "& .AruiTable-tableHead": {
                    top: "70px",
                    background: (theme) => theme.palette.background.default + "99"
                }
            }}
            tableState={tableState}
            page={page}
            onOffsetChange={onOffsetChange}
            isLoading={isLoading}
            getRowLink={getRowLink}
        />
    )
}
