import { maybeAddItem, Tab, useExtendedAuth } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FormComposableState } from '@komune-io/g2'
import { Catalogue, CatalogueDraft, CatalogueMetadataForm, CatalogueSections, CatalogueTypes, DraftGraphManager } from 'domain-components'
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
    const tabs: Tab[] = [...maybeAddItem(canUpdate, {
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm draft={draft} formState={metadataFormState} type={catalogue?.type as CatalogueTypes} />,
    }), {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections isLoading={isLoading} onSectionChange={onSectionChange} readOnly={!canUpdate || readOnly} catalogue={catalogue} />,
    },
    ...maybeAddItem(catalogue?.type === "100m-project" && canUpdate, {
      key: 'project',
      label: t('co2Projects'),
      component: <DraftGraphManager draft={draft} />,
    })
    ]
    return tabs
  }, [t, catalogue, metadataFormState, canUpdate, onSectionChange, isLoading, draft, readOnly])
}
