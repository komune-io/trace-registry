import { Typography } from '@mui/material'
import { ColumnFactory, useTable, StatusTag } from '@smartb/g2'
import { Row } from '@tanstack/react-table';
import { Project } from '../../model'
import { useCallback, useMemo } from "react"
import { ProjectType, useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';

function useProductColumn() {
    const { t } = useTranslation();
    return useMemo(() => ColumnFactory<Project>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: t("id"),
                getCellProps: (registry) => ({
                    value: registry.identifier
                })
            }),

            name: generators.text({
                header: t("name"),
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
                header: t("proponent"),
                getCellProps: (registry) => ({
                    value: registry.proponent?.name
                })
            }),

            type: {
                header: "Type",
                cell: ({ row }) => (
                    //@ts-ignore
                    <ProjectType projectType={row.original.type} />
                ),
                className: "typeColumn"
            },

            origin: generators.text({
                header: t("origin"),
                getCellProps: (registry) => ({
                    value: registry.country
                })
            }),

            avgReductions: generators.number({
                header: t("avgReductions"),
                getCellProps: (registry) => ({
                    value: Number(registry.estimatedReductions)
                })
            }),

            yearReference: generators.text({
                header: t("refYear"),
                getCellProps: (registry) => ({
                    value: registry.referenceYear
                })
            }),

            endDate: generators.date({
                header: t("endDate"),
                getCellProps: (registry) => ({
                    date: registry.creditingPeriodEndDate
                })
            }),

            vintage: generators.text({
                header: t("vintage"),
                getCellProps: (registry) => ({
                    value: registry.vintage?.toString()
                })
            }),

            status: {
                header: t("status"),
                cell: ({ row }) => (
                    <StatusTag label={row.original.status} />
                ),
                className: "statusColumn"
            }
        })
    }), [t]);
}

export interface ProjectTableProps extends Partial<OffsetTableProps<Project>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Project>
    pagination: OffsetPagination
    isLoading?: boolean
}

export const ProjectTable = (props: ProjectTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, sx, header, ...other } = props
    const { projectsProjectIdViewTabAll } = useRoutesDefinition()
    const { t } = useTranslation()

    const columns = useProductColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
        (row: Row<Project>) => {
            return {
                to: projectsProjectIdViewTabAll(row.original.id)
            }
        },
        [projectsProjectIdViewTabAll],
    )

     return (
        <>
        { (!page?.items && !isLoading) ?
            <>
                {header}
                <Typography align="center" sx={{ marginTop: "32px" }}>{t("projects.noData")}</Typography>
            </>
            :
                <OffsetTable<Project>
                    {...other}
                    sx={{
                        overflow: "unset",
                        "& .statusColumn": {
                            maxWidth: "180px"
                        },
                        "& .typeColumn": {
                            maxWidth: "150px"
                        },
                        "& .AruiTable-tableHead": {
                            top: "70px",
                            background: (theme) => theme.palette.background.default + "99"
                        },
                        ...sx
                    }}
                    header={header}
                    tableState={tableState}
                    page={page}
                    pagination={pagination}
                    onOffsetChange={onOffsetChange}
                    isLoading={isLoading}
                    getRowLink={getRowLink}

                />
        }
        </>
    )
}
