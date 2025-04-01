import { maybeAddItem, Tab, useExtendedAuth } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FormComposableState } from '@komune-io/g2'
import { Catalogue, CatalogueDraft, CatalogueMetadataForm, CatalogueSections, CatalogueTypes, DraftGraphManager, DraftIndicatorManager } from 'domain-components'
import { EditorState } from 'lexical'

export interface useDraftTabsParams {
  catalogue?: Catalogue
  draft?: CatalogueDraft
  metadataFormState: FormComposableState
  isLoading?: boolean
  onSectionChange?: (editorState: EditorState) => void
  readOnly?: boolean
}

export const useDraftTabs = (props: useDraftTabsParams) => {
  const { metadataFormState, catalogue, draft, isLoading, onSectionChange, readOnly = false } = props
  const { t } = useTranslation()
  const { policies } = useExtendedAuth()
  const canUpdate = policies.draft.canUpdate(draft)

  return useMemo((): Tab[] => {
    const type = catalogue?.type as CatalogueTypes
    const tabs: Tab[] = [...maybeAddItem(canUpdate, {
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} type={type} />,
    }),
    ...(catalogue?.datasets.map((dataset): Tab | undefined => {
      let component: React.ReactNode | undefined = undefined

      if (dataset.type === "lexical") {
        component = <CatalogueSections isLoading={isLoading} onSectionChange={onSectionChange} readOnly={!canUpdate || readOnly} catalogue={catalogue} />
      } else if (dataset.type === "graphs" && canUpdate) {
        component = <DraftGraphManager dataset={dataset} draft={draft} />
      } else if (dataset.type === "indicators" && canUpdate) {
        component = <DraftIndicatorManager dataset={dataset} draft={draft} />
      } 

      if (component) {
        return {
          key: dataset.type,
          label: dataset.title!,
          component
        }
      }
      return undefined
    }) ?? []).filter(Boolean) as Tab[], /* {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections isLoading={isLoading} onSectionChange={onSectionChange} readOnly={!canUpdate || readOnly} catalogue={catalogue} />,
    },
    ...maybeAddItem(type === "100m-project" && canUpdate, {
      key: 'project',
      label: t('co2Projects'),
      component: <DraftGraphManager draft={draft} />,
    }),
    ...maybeAddItem((type === "100m-project" || type === "100m-solution") && canUpdate, {
      key: 'indicator',
      label: t('indicators'),
      component: <DraftIndicatorManager draft={draft} />,
    }),
    ...maybeAddItem(type === "100m-chart" && canUpdate, {
      key: 'graph',
      label: t('graph'),
      component: <DraftGraphManager draft={draft} />,
    }) */
    ]
    return tabs
  }, [t, catalogue, metadataFormState, canUpdate, onSectionChange, isLoading, draft, readOnly])
}
