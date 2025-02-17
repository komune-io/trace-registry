import { Typography } from '@mui/material'
import { ColumnFactory, useTable } from '@komune-io/g2'
import { Row } from '@tanstack/react-table';
import { CatalogueDraft } from '../../model'
import { useCallback, useMemo } from "react"
import { languageToEmojiFlag, useRoutesDefinition } from 'components'
import { OffsetPagination, OffsetTable, OffsetTableProps, PageQueryResult } from "template";
import { useTranslation } from 'react-i18next';
import { DraftStatusChip } from './DraftStatusChip';

function useCataogueColumn(withStatus: boolean) {
    const { t } = useTranslation();
    return useMemo(() => ColumnFactory<CatalogueDraft>({
        generateColumns: (generators) => ({
            id: generators.text({
                header: t("identifier"),
                getCellProps: (draft) => ({
                    value: draft.originalCatalogueId,
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
                    value: t("catalogues.types." + draft.catalogue.type)
                })
            }),

            ...(withStatus ? {
                status:{
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

            update: generators.date({
                header: t("update"),
                getCellProps: (draft) => ({
                    value: draft.modified
                })
            }),
        })
    }), [t]);
}

export interface CatalogueTableProps extends Partial<OffsetTableProps<CatalogueDraft>> {
    onOffsetChange?: (newOffset: OffsetPagination) => void
    page?: PageQueryResult<CatalogueDraft>
    pagination: OffsetPagination
    isLoading?: boolean
    withStatus?: boolean
    toEdit?: boolean
}

export const CatalogueTable = (props: CatalogueTableProps) => {
    const { isLoading, page, onOffsetChange, pagination, sx, header, withStatus = false, toEdit = false, ...other } = props
    const { cataloguesCatalogueIdDraftIdVerify, cataloguesCatalogueIdDraftIdEdit } = useRoutesDefinition()
    const { t } = useTranslation()

    const columns = useCataogueColumn(withStatus)

    const tableState = useTable({
        data: page?.items ?? [],
        columns: columns,
    })

    const getRowLink = useCallback(
        (row: Row<CatalogueDraft>) => {
            let url = undefined
            if (!toEdit) url = cataloguesCatalogueIdDraftIdVerify(row.original.originalCatalogueId, row.original.id)
                if (row.original.status === "DRAFT") url = cataloguesCatalogueIdDraftIdEdit(row.original.originalCatalogueId, row.original.id)
            return {
                to: url,
            }
        },
        [cataloguesCatalogueIdDraftIdVerify, toEdit],
    )

    return (
        <>
            {(!page?.items && !isLoading) ?
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
