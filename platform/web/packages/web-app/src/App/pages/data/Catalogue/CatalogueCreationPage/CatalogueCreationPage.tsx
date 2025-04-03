import { useQueryClient } from '@tanstack/react-query'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueCreateCommand, CatalogueMetadataForm, CatalogueTypes, useCatalogueCreateCommand } from 'domain-components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'

interface CatalogueCreationPageProps {
    type: CatalogueTypes
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { t, i18n } = useTranslation()
    
    const navigate = useNavigate()
    const {cataloguesCatalogueIdDraftIdEditTab} = useRoutesDefinition()

    const queryClient = useQueryClient()

    const createCommand = useCatalogueCreateCommand({})

    const title = type === "100m-solution" ? t("newSolution") : type === "100m-system" ? t("newSystem") :  type === "100m-project" ? t("newProject") : t("newSector")

    const onCreate = useCallback(
      async (values: CatalogueCreateCommand & {illustration?: File}) => {
        const command = {...values}
        delete command.illustration
        const res = await createCommand.mutateAsync({
          command: {
            ...command,
            withDraft: true,
            language: i18n.language,
            type
          },
          files: values.illustration ? [{
            file: values.illustration
          }] : []
        })

        if (res) {
          queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
          navigate(cataloguesCatalogueIdDraftIdEditTab(res.id, res.draftId!))
        }
      },
      [createCommand.mutateAsync, type, i18n.language],
    )
    

    return (
        <AppPage
            title={title}
            bgcolor='background.default'
            maxWidth={1020}
        >
            <TitleDivider title={title} />
            <CatalogueMetadataForm withTitle type={type} onSubmit={onCreate} />
        </AppPage>
    )
}
