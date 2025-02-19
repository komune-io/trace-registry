import { useCustomFilters } from 'components'
import {
    CatalogueBreadcrumbs,
    CatalogueGrid, Catalogue,
    useCataloguePageQuery
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage, FixedPagination } from 'template'

interface CatalogueViewPageProps {
    catalogue?: Catalogue
    isLoading: boolean
}

export const CatalogueListPage = (props: CatalogueViewPageProps) => {
    const { catalogue, isLoading } = props
    const { t, i18n } = useTranslation()

    const { submittedFilters, setOffset } = useCustomFilters({
        filters: [],
        initialValues: {
            limit: 12
        }
    })
    const {data, isInitialLoading}  = useCataloguePageQuery({
        query: {
            language: i18n.language,
            parentIdentifier: catalogue?.identifier,
            ...submittedFilters
        },
        options: {
            enabled: catalogue?.identifier !== undefined
        }
    })

    const title =
        catalogue?.type === "methodologies" ?
            t("exploreMethodologies") : catalogue?.type === "programs"
                ? t("explorePrograms") : t("exploreStandards")

    return (
        <AppPage
            title={title}
            sx={{
                paddingBottom:"90px"
            }}
        >
            <CatalogueBreadcrumbs />
            <CatalogueGrid items={data?.items} isLoading={isLoading} />
            <FixedPagination pagination={submittedFilters} page={data} isLoading={isInitialLoading} onOffsetChange={setOffset} />
        </AppPage>
    )
}