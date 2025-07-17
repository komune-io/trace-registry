import { Typography } from '@mui/material'
import { ColumnFactory, useTable } from '@komune-io/g2'
import { Row } from '@tanstack/react-table';
import { CatalogueDraft } from '../../model'
import { useCallback, useMemo } from "react"
import { languageToEmojiFlag, useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';
import { DraftStatusChip } from './DraftStatusChip';
import { extractCatalogueIdentifierNumber, useCatalogueGetBlueprintsQuery } from '../../api';

function useDraftColumn(withStatus: boolean, withOperation: boolean) {
    const { t, i18n } = useTranslation();
    const allowedSearchTypes = useCatalogueGetBlueprintsQuery({
        query: {
            language: i18n.language
        }
    }).data?.item

    return useMemo(() => ColumnFactory<CatalogueDraft>({
        generateColumns: (generators) => ({
            id: generators.number({
                header: t("identifier"),
                getCellProps: (draft) => ({
                    value: extractCatalogueIdentifierNumber(draft.originalCatalogueId),
                    componentProps: {
                        sx: {
                            fontWeight: 600
                        }
                    }
                })
            }),

            name: generators.text({
                header: t("name"),
                getCellProps: (draft) => ({
                    value: draft.catalogue.title,
                }),
                className: "nameColumn"
            }),

            type: generators.text({
                header: t("type"),
                getCellProps: (draft) => ({
                    value: allowedSearchTypes?.types[draft.catalogue.type]?.name
                })
            }),

            ...(withStatus ? {
                status: {
                    header: t("status"),
                    cell: ({ row }) => (
                        <DraftStatusChip status={row.original.status} />
                    )
                }
            } : {}
            ),
            language: {
                header: t("langue"),
                //@ts-ignore
                cell: ({ row }) => languageToEmojiFlag[row.original.language]
            },

            ...(withOperation ? {
                status: generators.text({
                    header: t("operation"),
                    getCellProps: (draft) => ({
                        value: draft.baseVersion === 0 ? t("newSheet") : t("edition")
                    })
                })
            } : {}
            ),

            update: generators.date({
                header: t("update"),
                getCellProps: (draft) => ({
                    value: draft.modified
                })
            }),
        })
    }), [t, allowedSearchTypes]);
}

export interface DraftTableProps extends Partial<OffsetTableProps<CatalogueDraft>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<CatalogueDraft>
    pagination: OffsetPagination
    isLoading?: boolean
    withStatus?: boolean
    withOperation?: boolean
    toVerify?: boolean
}

export const DraftTable = (props: DraftTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, sx, header, withStatus = false, withOperation = false, toVerify = false, ...other } = props
    const { draftPage } = useRoutesDefinition()
    const { t } = useTranslation()

    const columns = useDraftColumn(withStatus, withOperation)

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
        (row: Row<CatalogueDraft>) => {
            return {
                to: draftPage(toVerify, row.original.originalCatalogueId, row.original.id, "metadata"),
            }
        },
        [toVerify],
    )

    return (
        <>
            {((!page?.items || page?.items.length === 0) && !isLoading) ?
                <>
                    {header}
                    <Typography align="center" sx={{ marginTop: "32px" }}>{t("catalogues.noData")}</Typography>
                </>
                :
                <OffsetTable<CatalogueDraft>
                    {...other}
                    header={header}
                    tableState={tableState}
                    page={page}
                    pagination={pagination}
                    onOffsetChange={onOffsetChange}
                    isLoading={isLoading}
                    //@ts-ignore
                    getRowLink={getRowLink}

                />
            }
        </>
    )
}
