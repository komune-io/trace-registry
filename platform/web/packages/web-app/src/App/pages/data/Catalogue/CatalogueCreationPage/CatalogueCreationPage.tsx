import { autoFormFormatter, BackAutoFormData, CommandWithFile } from '@komune-io/g2'
import { useQueryClient } from '@tanstack/react-query'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueTypes, useCatalogueCreateCommand, CatalogueMetadataForm } from 'domain-components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'
import autoForm from "./autoForm.json"

const formData = autoFormFormatter(autoForm as BackAutoFormData)

interface CatalogueCreationPageProps {
    type: CatalogueTypes
}

export const CatalogueCreationPage = (props: CatalogueCreationPageProps) => {
    const { type } = props
    const { i18n } = useTranslation()
    
    const navigate = useNavigate()
    const {cataloguesCatalogueIdDraftIdEditTab} = useRoutesDefinition()

    const queryClient = useQueryClient()

    const createCommand = useCatalogueCreateCommand({})

    const title = formData.sections[0].label ?? ""

    const onCreate = useCallback(
      async (command: CommandWithFile<any>) => {
        const res = await createCommand.mutateAsync({
          ...command,
          command: {
            ...command.command,
            withDraft: true,
            language: i18n.language,
            type
          }
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
            <CatalogueMetadataForm formData={formData} onSubmit={onCreate} />
        </AppPage>
    )
}
