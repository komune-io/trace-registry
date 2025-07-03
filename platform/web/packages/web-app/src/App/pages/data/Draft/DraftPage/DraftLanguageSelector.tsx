import { useQueryClient } from '@tanstack/react-query'
import { languages, LanguageSelector, useRoutesDefinition } from 'components'
import { Catalogue, CatalogueDraft, useCatalogueDraftCreateCommand } from 'domain-components'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export interface DraftLanguageSelectorProps {
    draft?: CatalogueDraft
    catalogue?: Catalogue 
    setIsLoading: (isLoading: boolean) => void
    isLoading: boolean
    refetchDraft: () => void
}

export const DraftLanguageSelector = (props: DraftLanguageSelectorProps) => {
    const { draft, catalogue, refetchDraft, setIsLoading, isLoading } = props
    const {catalogueId} = useParams<{ catalogueId: string }>()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {cataloguesCatalogueIdDraftsDraftIdTab}  = useRoutesDefinition()

    const createDraft = useCatalogueDraftCreateCommand({})

    const onChangeLanguage = useCallback(
        async (languageTag: string) => {
            if (!catalogue) return

            const existingDraft = catalogue.pendingDrafts?.find(draft => draft.language === languageTag)
            if (existingDraft) {
                navigate(cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, existingDraft.id))
                return
            }

            setIsLoading(true)

            const res = await createDraft.mutateAsync({
                catalogueId: catalogueId!,
                language: languageTag
            })

            setIsLoading(false)
            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogueId! }] })
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
                refetchDraft()
                navigate(cataloguesCatalogueIdDraftsDraftIdTab(catalogueId!, res.item.id))
            }
        },
        [createDraft.mutateAsync, catalogueId, catalogue, refetchDraft],
    )

    return (
        <LanguageSelector
            languages={languages as any}
            currentLanguage={draft?.language}
            onChange={onChangeLanguage}
            sx={{ alignSelf: "flex-end", mb: -8, zIndex: 1 }}
            disabled={isLoading}
        />
    )
}