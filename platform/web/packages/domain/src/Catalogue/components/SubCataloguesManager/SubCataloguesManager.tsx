import { AddCircleOutlineRounded } from '@mui/icons-material'
import { CustomButton, InfoTicket, TitleDivider } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { SubCataloguePanel } from '../SubCataloguePanel'
import { useTranslation } from 'react-i18next'
import { CatalogueRef } from '../../model'
import { autoFormFormatter, BackAutoFormData, CommandWithFile } from '@komune-io/g2'
import { CatalogueCreateCommand, CatalogueUpdateCommand, useCatalogueCreateCommand, useCataloguePageQuery, useCatalogueUpdateCommand } from '../../api'

export interface SubCataloguesManagerProps {
  catalogue?: CatalogueRef
  readOnly?: boolean
}

export const SubCataloguesManager = (props: SubCataloguesManagerProps) => {
  const { catalogue, readOnly = false } = props

  const { t, i18n } = useTranslation()

  const [creation, setCreation] = useState(false)

  const formData = useMemo(() => autoFormFormatter(catalogue?.structure?.creationForm as BackAutoFormData), [catalogue])

  const onCancel = useCallback(
    () => {
      setCreation(false)
    },
    [],
  )

  const onCreate = useCallback(
    () => {
      setCreation(true)
    }, [])

  const cataloguePage = useCataloguePageQuery({
    query: {
      parentIdentifier: catalogue?.identifier,
      language: i18n.language
    },
    options: {
      enabled: catalogue?.identifier !== undefined
    }
  })

  const catalogueCreateCommand = useCatalogueCreateCommand({})

  const onSubmitCreate = useCallback(
    async (command: CommandWithFile<CatalogueCreateCommand>) => {
      const res = await catalogueCreateCommand.mutateAsync({
        command: {
          ...command.command,
          parentId: catalogue?.identifier,
          language: i18n.language,
        },
        files: command.files,
      })
      if (res) {
        setCreation(false)
        cataloguePage.refetch()
        return true
      }
      return false
    },
    [cataloguePage.refetch, catalogue, i18n.language],
  )

  const catalogueUpdateCommand = useCatalogueUpdateCommand({})

  const onSubmitEdit = useCallback(
    async (command: CommandWithFile<CatalogueUpdateCommand>) => {
      const res = await catalogueUpdateCommand.mutateAsync(command)
      if (res) {
        cataloguePage.refetch()
        return true
      }
      return false
    },
    [cataloguePage.refetch, catalogue],
  )

  const subCatalogues = useMemo(() => cataloguePage.data?.items.map((catalogue) => (
    <SubCataloguePanel
      key={catalogue.id}
      catalogue={catalogue}
      canUpdate={!readOnly}
      formData={formData}
      context='readOnly'
      onSubmit={onSubmitEdit}
    />
  )), [cataloguePage.data, formData, onCancel, readOnly, onSubmitEdit])


  return (
    <>
      <TitleDivider
        size="h6"
        title={t('subCatalogues')}
        actions={!readOnly ?
          <CustomButton
            startIcon={<AddCircleOutlineRounded />}
            onClick={onCreate}
          >
            {t('catalogues.createSubCatalogue')}
          </CustomButton>
          : undefined
        }
      />
      <InfoTicket
        title={t("catalogues.noSubCatalogue")}
      />
      {creation && <SubCataloguePanel
        formData={formData}
        context='creation'
        onCancel={onCancel}
        onSubmit={onSubmitCreate}
      />}
      {subCatalogues}
    </>
  )
}
