import {EditRounded} from '@mui/icons-material'
import {CircularProgress, IconButton} from '@mui/material'
import {useRoutesDefinition, useToggleState} from 'components'
import {useCallback, useMemo, useState} from 'react'
import {DraftReplacementModal} from '../DraftReplacementModal'
import {Catalogue} from '../../model'
import {useTranslation} from 'react-i18next'
import {useCatalogueDraftCreateCommand, useCatalogueDraftDeleteCommand, useCatalogueListAllowedTypesQuery} from '../../api'
import {useQueryClient} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'

interface CreateDraftButtonProps {
    catalogue?: Catalogue
    canCreate?: boolean
}

export const CreateDraftButton = (props: CreateDraftButtonProps) => {
    const { catalogue, canCreate } = props
    const { i18n } = useTranslation()
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { cataloguesCatalogueIdDraftsDraftIdTab } = useRoutesDefinition()
    const [openDraftReplacement, _, toggleDraftReplacement] = useToggleState()
    const [draftLoading, setDraftLoading] = useState(false)

    const allowedCreationTypes = useCatalogueListAllowedTypesQuery({
        query: {
            language: i18n.language,
            operation: "UPDATE"
        }
    }).data?.items

    const currentLanguageDraft = useMemo(() => catalogue?.pendingDrafts?.find((draft) => draft.language === i18n.language), [catalogue, i18n.language])

    const createDraft = useCatalogueDraftCreateCommand({})
    const deleteDraft = useCatalogueDraftDeleteCommand({})

    const onCreateDraft = useCallback(
        async () => {
            if (!catalogue) return

            let canContinue = true
            if (currentLanguageDraft) {
                canContinue = false
                const res = await deleteDraft.mutateAsync({
                    id: currentLanguageDraft.id
                })
                if (res) {
                    canContinue = true
                }
            }

            if (!canContinue) return

            setDraftLoading(true)

            const res = await createDraft.mutateAsync({
                catalogueId: catalogue.id,
                language: i18n.language
            })

            setDraftLoading(false)

            if (res) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogue.id }] })
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
                navigate(cataloguesCatalogueIdDraftsDraftIdTab(catalogue.id, res.item?.id))
            }
        },
        [catalogue?.id, i18n.language, createDraft.mutateAsync, navigate, currentLanguageDraft,],
    )

    const iscatalogueTypeAllowed = useMemo(() => {
        return allowedCreationTypes?.some((type) => type.identifier === catalogue?.type) ?? false
    }, [allowedCreationTypes, catalogue])

    if ((!currentLanguageDraft && !canCreate) || !iscatalogueTypeAllowed) return <></>
    return (
        <>
            <IconButton
                onClick={currentLanguageDraft ? toggleDraftReplacement : onCreateDraft}
                disabled={draftLoading}
            >
                {draftLoading ? <CircularProgress /> : <EditRounded />}
            </IconButton>
            <DraftReplacementModal
                open={openDraftReplacement}
                onClose={toggleDraftReplacement}
                onCreate={onCreateDraft}
            />
        </>
    )
}
