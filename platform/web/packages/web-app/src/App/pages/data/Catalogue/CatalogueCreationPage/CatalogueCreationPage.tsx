import { autoFormFormatter, BackAutoFormData, CommandWithFile } from '@komune-io/g2'
import { useQueryClient } from '@tanstack/react-query'
import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueMetadataForm, useCatalogueCreateCommand, useCatalogueGetStructureQuery, useCatalogueRefGetTreeQuery } from 'domain-components'
import { useCallback, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { AppPage } from 'template'

export const CatalogueCreationPage = () => {
  const { type } = useParams()
  const { i18n } = useTranslation()

  const navigate = useNavigate()
  const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()

  const structure = useCatalogueGetStructureQuery({
    query: {
      type: type!,
      language: i18n.language,
    }
  })

  const createButtonStruture = useCatalogueRefGetTreeQuery({
    query: {
      identifier: "menu",
      language: i18n.language
    }
  }).data?.item?.structure?.createButton

  useEffect(() => {
    if (createButtonStruture && type) {
      if (!createButtonStruture.types?.find(t => t.identifier === type)) {
        navigate("/404")
      }
    } 
  }, [createButtonStruture, type])
  
  const formData = useMemo(() => structure.data?.item?.creationForm ? autoFormFormatter(structure.data?.item?.creationForm as BackAutoFormData) : undefined, [structure.data?.item])

  const queryClient = useQueryClient()

  const createCommand = useCatalogueCreateCommand({})

  const title = formData?.sections[0].label ?? ""

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
        navigate(cataloguesCatalogueIdDraftsDraftIdTab(res.id, res.draftId!))
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
      <CatalogueMetadataForm formData={formData} onSubmit={onCreate} type={type!} />
    </AppPage>
  )
}
