import { Tab } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FormComposableState } from '@komune-io/g2'
import { Catalogue, CatalogueDraft, CatalogueSections, CatalogueTypes, Dataset, DraftGraphManager, DraftIndicatorManager } from 'domain-components'
import { EditorState } from 'lexical'
import { CatalogueMetadataForm } from '100m-components'

export interface useDraftTabsParams {
  catalogue?: Catalogue
  draft?: CatalogueDraft
  metadataFormState: FormComposableState
  isLoading?: boolean
  onSectionChange?: (editorState: EditorState, dataset?: Dataset) => void
  readOnlyTabs: Record<string, boolean>
}

export const useDraftTabs = (props: useDraftTabsParams) => {
  const { metadataFormState, catalogue, draft, isLoading, onSectionChange, readOnlyTabs } = props
  const { t } = useTranslation()
 

  return useMemo((): Tab[] => {
    const type = catalogue?.type as CatalogueTypes
    const tabs: Tab[] = [{
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} type={type} />,
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
    }) ?? []).filter(Boolean) as Tab[]
    ]
    return tabs
  }, [t, catalogue, metadataFormState, onSectionChange, isLoading, draft, readOnlyTabs])
}