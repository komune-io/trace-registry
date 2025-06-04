import { Stack, Typography } from '@mui/material'
import { Accordion, CustomLinkButton, InfoTicket, useRoutesDefinition } from 'components'
import { useMemo } from 'react'
import { CatalogueTable } from '../CatalogueTable'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Catalogue, CatalogueRef } from '../../model'
import { PageQueryResult } from 'template'
import { Link } from '@mui/icons-material'

interface SubCatalogueLinkedTableProps {
    catalogue?: Catalogue
    tab?: CatalogueRef
}

export const SubCatalogueLinkedTable = (props: SubCatalogueLinkedTableProps) => {
    const { catalogue, tab } = props
    const { catalogueId, draftId } = useParams<{ catalogueId: string; draftId: string }>()
    const { t } = useTranslation()
    const { cataloguesCatalogueIdDraftIdTabIdSubCatalogueIdLinkSubCatalogue } = useRoutesDefinition()
    const data = useMemo((): PageQueryResult<CatalogueRef> => {
        const items = Object.values(catalogue?.relatedCatalogues ?? {}).flatMap((related) => related)
        return {
            items,
            total: items.length,
        }
    }, [catalogue])

    return (
        <>
            <Accordion
                summary={<Typography variant="h6" >{t("catalogueList")}</Typography>}
                defaultExpanded
            >
                {data.items.length > 0 ? <CatalogueTable
                    page={data}
                    isRef
                /> :
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
            <CustomLinkButton
                startIcon={<Link />}
                to={cataloguesCatalogueIdDraftIdTabIdSubCatalogueIdLinkSubCatalogue(catalogueId!, draftId!, tab?.id!, catalogue?.id!)}
                sx={{
                    alignSelf: "flex-end"
                }}
            >
                {t("linkCatalogues")}
            </CustomLinkButton>
        </>
    )
}
