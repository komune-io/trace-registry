import {
  CatalogueBreadcrumbs,
  CatalogueGrid, useCataloguePageQuery,
  useCatalogueDraftCreateCommand,
  DraftReplacementModal,
  useCatalogueDraftDeleteCommand,
  Catalogue, DatasetRouterSection,
} from 'domain-components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppPage } from 'template'
import { InfoTicket, maybeAddItem, useRoutesDefinition, useToggleState, SectionTab, Tab, useExtendedAuth } from 'components'
import { SyntheticEvent, useCallback, useMemo, useState } from 'react'
import { useCataloguesRouteParams } from 'domain-components'
import { CircularProgress, IconButton, Stack } from '@mui/material'
import { EditRounded } from '@mui/icons-material'
import { useQueryClient } from '@tanstack/react-query'
import { LinkButton } from '@komune-io/g2'
import {useLocation} from "react-router";


interface CatalogueViewPageProps {
  catalogue: Catalogue
}

export const CatalogueViewPage = (props: CatalogueViewPageProps) => {
    const {
      catalogue
    } = props
    const { t, i18n } = useTranslation()
    const { ids } = useCataloguesRouteParams()
    const { cataloguesCatalogueIdDraftIdEdit } = useRoutesDefinition()
    const [draftLoading, setDraftLoading] = useState(false)
    const queryClient = useQueryClient()
    const [openDraftReplacement, _, toggleDraftReplacement] = useToggleState()
    const {policies} = useExtendedAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const { cataloguesTab } = useRoutesDefinition()
    const onTabChange = useCallback((_: SyntheticEvent<Element, Event>, value: string) => {
        navigate(cataloguesTab(value, ...ids))
    }, [ids])

    const datasetTab: Tab[] = catalogue?.datasets
      ?.filter((it) => {
        return it.title != undefined && it.title != ""
      })
      ?.map((dataset) => {
        return {
            key: dataset.identifier,
            label: dataset.title,
            component: (<DatasetRouterSection catalogue={catalogue} item={dataset} isLoading={false} />)
        }
    }) ?? []


  const currentTab = useMemo(() => {
      const tab = location.hash.replace('#', '')
      return !tab || tab === '' ? datasetTab[0]?.key : tab
    },
    [location]
  )

    const { data } = useCataloguePageQuery({
        query: {
            parentIdentifier: catalogue?.identifier,
            language: i18n.language
        },
        options: {
            enabled: catalogue?.identifier !== undefined
        }
    })

    const items = data?.items ?? []
    const tabs: Tab[] = useMemo(() => {
        const tabs: Tab[] = [
          ...datasetTab
          , ...maybeAddItem(items.length > 0, {
            key: 'subCatalogues',
            label: t('subCatalogues'),
            component: (<CatalogueGrid items={data?.items} isLoading={false} />)
        })

        ]
        return tabs
    }, [t, data, catalogue])

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
              await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["data/catalogueGet", { id: catalogue.id }] }),
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
              ])
              navigate(cataloguesCatalogueIdDraftIdEdit(catalogue.id, res.item?.id))
            }
        },
        [catalogue?.id, i18n.language, createDraft.mutateAsync, navigate, currentLanguageDraft,],
    )
    return (
        <AppPage
            title={catalogue?.title}
        >
            <Stack
                gap={2}
                justifyContent="space-between"
                alignItems="center"
                direction="row"
            >
                <CatalogueBreadcrumbs />
                {(!!currentLanguageDraft || policies.draft.canCreate()) && <IconButton
                    onClick={currentLanguageDraft ? toggleDraftReplacement : onCreateDraft}
                    disabled={draftLoading}
                >
                    {draftLoading ? <CircularProgress /> : <EditRounded />}
                </IconButton>}
            </Stack>
            <DraftReplacementModal
                open={openDraftReplacement}
                onClose={toggleDraftReplacement}
                onCreate={onCreateDraft}
            />
            {currentLanguageDraft && <InfoTicket
                title={t("catalogues.activeContribution")}
            >
                <LinkButton
                    to={cataloguesCatalogueIdDraftIdEdit(catalogue?.id!, currentLanguageDraft.id)}
                >
                    {t("catalogues.consultContribution")}
                </LinkButton>
            </InfoTicket>
            }
            <SectionTab
                tabs={tabs}
                currentTab={currentTab}
                onTabChange={onTabChange}
                sx={{
                    "& .AruiSection-contentContainer": {
                        gap: (theme) => theme.spacing(5)
                    }
                }}
            />
        </AppPage>
    )
}