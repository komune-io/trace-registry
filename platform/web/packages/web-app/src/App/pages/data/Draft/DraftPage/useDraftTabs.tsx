import { maybeAddItem, Tab } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AutoFormData, FormComposableState } from '@komune-io/g2'
import { Catalogue, CatalogueDraft, CatalogueMetadataForm, CatalogueSections, Dataset, DraftCertificationPage, DraftGraphManager, DraftIndicatorManager, SubCataloguesManager } from 'domain-components'
import { EditorState } from 'lexical'

export interface useDraftTabsParams {
  catalogue?: Catalogue
  draft?: CatalogueDraft
  formData?: AutoFormData
  metadataFormState: FormComposableState
  isLoading?: boolean
  onSectionChange?: (editorState: EditorState, dataset?: Dataset) => void
  readOnlyTabs: Record<string, boolean>
}

export const useDraftTabs = (props: useDraftTabsParams) => {
  const { metadataFormState, catalogue, draft, isLoading, onSectionChange, readOnlyTabs, formData } = props
  const { t } = useTranslation()
 

  return useMemo((): Tab[] => {
    const tabs: Tab[] = [{
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} formData={formData} />,
    },
    ...(catalogue?.datasets.map((dataset): Tab | undefined => {
      let component: React.ReactNode | undefined = undefined

      if (dataset.type === "lexical") {
        component = <CatalogueSections isLoading={isLoading} onSectionChange={onSectionChange} readOnly={readOnlyTabs[dataset.type]} catalogue={catalogue} dataset={dataset} />
      } else if (dataset.type === "graphs") {
        component = <DraftGraphManager dataset={dataset} draft={draft} readOnly={readOnlyTabs[dataset.type]} />
      } else if (dataset.type === "indicators") {
        component = <DraftIndicatorManager dataset={dataset} draft={draft} readOnly={readOnlyTabs[dataset.type]} />
      } 

      if (component) {
        return {
          key: dataset.id,
          label: dataset.title!,
          component
        }
      }
      return undefined
    }) ?? []).filter(Boolean) as Tab[],
    ...maybeAddItem<Tab>(!!draft?.catalogue.certifications, {
      key: 'certifications',
      label: t('protocols'),
      component: <DraftCertificationPage draft={draft} isLoading={isLoading} />,
    }),
    ...(catalogue?.catalogues.filter(child => child.structure?.isTab).map((catalogue): Tab | undefined => {
      let component: React.ReactNode | undefined = undefined

      if (catalogue.structure?.type === "FACTORY") {
        component = <SubCataloguesManager catalogue={catalogue} readOnly={readOnlyTabs[catalogue.structure.type]} />
      } 

      if (component) {
        return {
          key: catalogue.id,
          label: catalogue.title!,
          component
        }
      }
      return undefined
    }) ?? []).filter(Boolean) as Tab[],
    ]
    return tabs
  }, [t, catalogue, metadataFormState, onSectionChange, isLoading, draft, readOnlyTabs, formData])
}
