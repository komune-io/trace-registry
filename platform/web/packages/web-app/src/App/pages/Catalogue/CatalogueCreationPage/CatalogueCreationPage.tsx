import { TitleDivider } from 'components'
import { CatalogueCreationForm } from 'domain-components'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogueCreationPageProps {
    type: "solution" | "system" | "sector"
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { t } = useTranslation()
    const title = type === "solution" ? t("newSolution") : type === "system" ? t("newSystem") : t("newSector")

    return (
        <AppPage
            title={title}
            bgcolor='background.default'
            maxWidth={1020}
        >
            <TitleDivider title={title} onDebouncedChange={() => {}} />
            <CatalogueCreationForm type={type} onCreate={() => {}} />
        </AppPage>
    )
}
