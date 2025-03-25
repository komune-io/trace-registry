import { Box, Stack } from '@mui/material'
import {
    CatalogueBreadcrumbs,
    Catalogue,
    useCatalogueDistributionLexicalEditor,
    CatalogueTable,
    useCataloguesFilters, useCataloguePageQuery,
} from 'domain-components'
import { AppPage, Offset, OffsetPagination } from 'template'
import { useMemo } from "react";
import { useTranslation } from "react-i18next";


interface CatalogueTableEntryPointProps {
    catalogue: Catalogue
}

export const CatalogueTableEntryPoint = (props: CatalogueTableEntryPointProps) => {
    const { catalogue } = props
    const distributionLexicalEditor = useCatalogueDistributionLexicalEditor(catalogue)
    const { i18n } = useTranslation()

    const { submittedFilters, setOffset } = useCataloguesFilters({})

    const pagination = useMemo((): OffsetPagination => ({
        offset: submittedFilters.offset ?? Offset.default.offset,
        limit: submittedFilters.limit ?? Offset.default.limit }
    ), [submittedFilters.offset, submittedFilters.limit])

    const { data, isInitialLoading } = useCataloguePageQuery({
        query: {
            ...submittedFilters,
            language: i18n.language,
            parentIdentifier: catalogue?.identifier,
        },
        options: {
            enabled: !!catalogue?.identifier
        }
    })


    return (
        <AppPage
          title={catalogue?.title ?? ""}
        >
            <CatalogueBreadcrumbs/>
            {distributionLexicalEditor.distribution &&
                <Box
                  alignSelf="center"
                  padding={5}
                  maxWidth="700px"
                >
                    {distributionLexicalEditor.editor}
                </Box>
            }
            <Stack
              gap={5}
            >
                {catalogue?.identifier && <CatalogueTable
                  page={data}
                  pagination={pagination}
                  isLoading={isInitialLoading}
                  onOffsetChange={setOffset}
                />}
            </Stack>
        </AppPage>
    )
}
