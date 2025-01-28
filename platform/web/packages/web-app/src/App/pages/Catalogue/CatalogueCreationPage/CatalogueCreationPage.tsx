import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogueCreationPageProps {
    type: "solution" | "system" | "sector"
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { t } = useTranslation()

    return (
        <AppPage
            title={type === "solution" ? t("newSolution") : type === "system" ? t("newSystem") : t("newSector")}
            bgcolor='background.default'
        >
            {type}
        </AppPage>
    )
}
