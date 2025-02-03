import { Stack, Typography } from '@mui/material'
import { ColumnFactory, useTable, Chip } from '@komune-io/g2'
import { Row } from '@tanstack/react-table';
import { Catalogue } from '../../model'
import { Fragment, useCallback, useMemo } from "react"
import { languageToEmojiFlag, useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';

function useCataogueColumn() {
    const { t } = useTranslation();
    return useMemo(() => ColumnFactory<Catalogue>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: t("identifier"),
                getCellProps: (catalogue) => ({
                    value: catalogue.identifier,
                    componentProps: {
                        sx: {
                            fontWeight: 600
                        }
                    }
                })
            }),

            name: generators.text({
                header: t("name"),
                getCellProps: (catalogue) => ({
                    value: catalogue.title,
                }),
                className: "nameColumn"
            }),

            type: generators.text({
                header: t("type"),
                getCellProps: (catalogue) => ({
                    value: catalogue.type
                })
            }),

            status: {
                header: t("status"),
                cell: () => (
                    <Chip label={t("draft")} color="#323232" />
                )
            },

            language: {
                header: t("language"),
                cell: ({ row }) => (
                    <Stack direction="row" gap={0.5} >
                        {[row.original.language].map((lang) => (
                            <Fragment>
                                {/* @ts-ignore */}
                                {languageToEmojiFlag[lang]}
                            </Fragment>
                        ))}
                        </Stack>
                )
            },

            update: generators.date({
                header: t("update"),
                getCellProps: (catalogue) => ({
                    value: catalogue.modified
                })
            }),
        })
    }), [t]);
}

export interface CatalogueTableProps extends Partial<OffsetTableProps<Catalogue>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<Catalogue>
    pagination: OffsetPagination
    isLoading?: boolean
}

export const CatalogueTable = (props: CatalogueTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, sx, header, ...other } = props
    const { projectsProjectIdViewTabAll } = useRoutesDefinition()
    const { t } = useTranslation()

    const columns = useCataogueColumn()

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
        (row: Row<Catalogue>) => {
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
                <Typography align="center" sx={{ marginTop: "32px" }}>{t("catalogues.noData")}</Typography>
            </>
            :
                <OffsetTable<Catalogue>
                    {...other}
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
