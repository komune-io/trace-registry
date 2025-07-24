import { Stack, Typography } from '@mui/material'
import { Accordion, CustomLinkButton, InfoTicket, useRoutesDefinition } from 'components'
import { useCallback, useMemo } from 'react'
import { CatalogueTable, useCataloguesFilters } from '../CatalogueTable'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Catalogue, CatalogueRef } from '../../model'
import { PageQueryResult } from 'template'
import { Link } from '@mui/icons-material'
import { CatalogueSearchQuery } from '../../api'
import { Pagination } from '@komune-io/g2'

interface SubCatalogueLinkedTableProps {
    catalogue?: Catalogue
    tab?: CatalogueRef
    canUpdate?: boolean
}

export const SubCatalogueLinkedTable = (props: SubCatalogueLinkedTableProps) => {
    const { catalogue, tab, canUpdate } = props
    const { catalogueId, draftId } = useParams<{ catalogueId: string; draftId: string }>()
    const { submittedFilters, component, setOffset } = useCataloguesFilters({
        noType: true,
        urlStorage: false
    })

    const { t } = useTranslation()

    const { cataloguesCatalogueIdDraftIdTabSubCatalogueIdLinkSubCatalogue } = useRoutesDefinition()

    const data = useMemo((): PageQueryResult<CatalogueRef> => {
        let items = Object.values(catalogue?.relatedCatalogues ?? {}).flatMap((related) => related)
        const filters = submittedFilters as CatalogueSearchQuery
        if (filters.query) {
            items = items.filter((item) => {
                return item.title?.toLowerCase().includes(filters.query!.toLowerCase())
            })
        }
        if (filters.availableLanguages && filters.availableLanguages.length > 0) {
            items = items.filter((item) => {
                return item.availableLanguages?.some((lang) => filters.availableLanguages!.includes(lang))
            })
        }
        return {
            items: items.slice(submittedFilters.offset!, submittedFilters.offset! + submittedFilters.limit!),
            total: items.length,
        }
    }, [catalogue, submittedFilters])

    const currentPage: number = useMemo(() => {
        return (submittedFilters.offset! / submittedFilters.limit!) + 1
    }, [submittedFilters.offset, submittedFilters.limit])

    const total = useMemo(() => {
        if (!data?.total) return { page: undefined, items: undefined }
        return {
            page: Math.floor((data.total - 1) / submittedFilters.limit!) + 1,
            items: data.total
        }
    }, [data?.total, submittedFilters.limit])

    const handlePageChange = useCallback((pageNumber: number) => {
        const limit = submittedFilters.limit!
        const offset = (pageNumber - 1) * limit
        setOffset({ offset, limit })
    }, [submittedFilters.limit])

    return (
        <>
            <Accordion
                summary={<Typography variant="h6" >{t("catalogueList")}</Typography>}
                defaultExpanded
            >
                {Object.values(catalogue?.relatedCatalogues ?? {}).flatMap((related) => related).length > 0 ? <>
                    {component}
                    <CatalogueTable
                        page={data}
                        onPageChange={handlePageChange}
                        isRef
                    />
                    <Pagination
                        onPageChange={handlePageChange}
                        page={currentPage}
                        totalPage={total.page ?? 0}
                        siblingCount={1}
                    />
                </> :
                    <Stack
                        gap={5}
                        sx={{
                            mb: -5
                        }}
                    >
                        <InfoTicket
                            title={t("catalogues.noCatalogueLinkedToSub")}
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                whiteSpace: "pre-line"
                            }}
                        >
                            {t("catalogues.LinkedCataloguesDescription")}
                        </Typography>
                    </Stack>
                }
            </Accordion>
            {canUpdate && <CustomLinkButton
                startIcon={<Link />}
                to={cataloguesCatalogueIdDraftIdTabSubCatalogueIdLinkSubCatalogue(catalogueId!, draftId!, tab?.id!, catalogue?.id!)}
                sx={{
                    alignSelf: "flex-end"
                }}
            >
                {t("linkCatalogues")}
            </CustomLinkButton>}
        </>
    )
}
