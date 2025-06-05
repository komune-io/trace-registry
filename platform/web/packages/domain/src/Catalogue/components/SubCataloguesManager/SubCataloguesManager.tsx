import {AddCircleOutlineRounded} from '@mui/icons-material'
import {CustomButton, InfoTicket, TitleDivider} from 'components'
import {useCallback, useMemo, useState} from 'react'
import {SubCataloguePanel} from '../SubCataloguePanel'
import {useTranslation} from 'react-i18next'
import {CatalogueRef} from '../../model'
import {autoFormFormatter, BackAutoFormData, CommandWithFile} from '@komune-io/g2'
import {
  CatalogueCreateCommand,
  CatalogueUpdateCommand,
  useCatalogueCreateCommand,
  useCatalogueGetStructureQuery,
  useCataloguePageQuery,
  useCatalogueUpdateCommand
} from '../../api'

export interface SubCataloguesManagerProps {
  catalogue?: CatalogueRef
  readOnly?: boolean
}

export const SubCataloguesManager = (props: SubCataloguesManagerProps) => {
  const { catalogue, readOnly = false } = props

  const { t, i18n } = useTranslation()

  const creationContext = useMemo(() => {
    return {
      label: catalogue?.structure?.createButton?.label,
      type: catalogue?.structure?.createButton?.types[0].identifier
    }
  }, [catalogue])

  const [creation, setCreation] = useState(false)

  const structure = useCatalogueGetStructureQuery({
    query: {
      type: creationContext.type ?? "inventory",
      language: i18n.language,
    }
  })

  const formData = useMemo(() => structure.data?.item?.creationForm ? autoFormFormatter(structure.data?.item?.creationForm as BackAutoFormData) : undefined, [structure.data?.item])

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
      parentId: catalogue?.id,
      language: i18n.language
    },
    options: {
      enabled: catalogue?.id !== undefined
    }
  })

  const catalogueCreateCommand = useCatalogueCreateCommand({})

  const onSubmitCreate = useCallback(
    async (command: CommandWithFile<CatalogueCreateCommand>) => {
      const res = await catalogueCreateCommand.mutateAsync({
        command: {
          ...command.command,
          parentId: catalogue?.id,
          language: i18n.language,
          type: creationContext.type ?? "inventory"
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
    [cataloguePage.refetch, catalogue, i18n.language, creationContext],
  )

  const catalogueUpdateCommand = useCatalogueUpdateCommand({})

  const onSubmitEdit = useCallback(
    async (command: CommandWithFile<CatalogueUpdateCommand>, values: any) => {
      const res = await catalogueUpdateCommand.mutateAsync({
        command: {
          ...command.command,
          id: values.id,
          language: i18n.language,
        },
        files: command.files,
      })
      if (res) {
        cataloguePage.refetch()
        return true
      }
      return false
    },
    [cataloguePage.refetch, catalogue, i18n.language],
  )

  const subCatalogues = useMemo(() => cataloguePage.data?.items.sort((a, b) => a.issued > b.issued ? 1 : -1).map((subCatalogue) => (
    <SubCataloguePanel
      refetch={cataloguePage.refetch}
      key={subCatalogue.id}
      catalogue={subCatalogue}
      canUpdate={!readOnly}
      formData={formData}
      context='readOnly'
      onSubmit={onSubmitEdit}
      tab={catalogue}
    />
  )), [cataloguePage.data, formData, onCancel, readOnly, onSubmitEdit, catalogue, cataloguePage.refetch])

  return (
    <>
      <TitleDivider
        size="h6"
        title={catalogue?.title ?? t("catalogues.subCatalogues")}
        actions={!readOnly ?
          <CustomButton
            startIcon={<AddCircleOutlineRounded />}
            onClick={onCreate}
          >
            {creationContext.label ?? t('catalogues.createSubCatalogue')}
          </CustomButton>
          : undefined
        }
      />
      {(!subCatalogues || subCatalogues.length === 0) && <InfoTicket
        title={t("catalogues.noSubCatalogue")}
      />}
      {creation && <SubCataloguePanel
        refetch={cataloguePage.refetch}
        formData={formData}
        context='creation'
        onCancel={onCancel}
        onSubmit={onSubmitCreate}
      />}
      {subCatalogues}
    </>
  )
}
