import { TitleDivider } from 'components'
import { CatalogueCreationForm } from 'domain-components'
import { useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { AppPage } from 'template'

interface CatalogueCreationPageProps {
    type: "solution" | "system" | "sector"
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { t } = useTranslation()
    const sheetTitle = useRef("")

    const onChangeSheetTitle = useCallback(
      (title: string) => {
        sheetTitle.current = title
      },
      [],
    )
    

    const title = type === "solution" ? t("newSolution") : type === "system" ? t("newSystem") : t("newSector")

    const onCreate = useCallback(
      (values: any) => {
        console.log({...values, title: sheetTitle.current})
      },
      [],
    )
    

    return (
        <AppPage
            title={title}
            bgcolor='background.default'
            maxWidth={1020}
        >
            <TitleDivider onChange={onChangeSheetTitle} title={title} onDebouncedChange={() => {}} />
            <CatalogueCreationForm type={type} onCreate={onCreate} />
        </AppPage>
    )
}
