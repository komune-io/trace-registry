import { TitleDivider } from 'components'
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
        >
            <TitleDivider title={title} onDebouncedChange={() => {}} />
            {type}
        </AppPage>
    )
}
