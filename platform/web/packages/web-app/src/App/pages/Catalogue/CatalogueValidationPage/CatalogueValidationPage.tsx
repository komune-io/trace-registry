import { TitleDivider, useRoutesDefinition } from 'components'
import { CatalogueMetadataForm, CatalogueSections, CatalogueTypes, CatalogueValidationHeader, useCatalogueDraftGetQuery, useCatalogueDraftRejectCommand } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { g2Config, useFormComposable } from '@komune-io/g2';
import { useQueryClient } from '@tanstack/react-query';
import { useDraftMutations } from '../CatalogueEditionPage/useDraftMutations';

export const CatalogueValidationPage = () => {
  const { draftId, catalogueId } = useParams()
  const [tab, setTab] = useState("info")
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {cataloguesToVerify} = useRoutesDefinition()

  const catalogueDraftQuery = useCatalogueDraftGetQuery({
    query: {
      id: draftId!
    },
  })

  const catalogue = catalogueDraftQuery.data?.item?.catalogue

  const draft = catalogueDraftQuery.data?.item

   const formInitialValues = useMemo(() => catalogue ? ({
      ...catalogue,
      themes: (catalogue.themes ?? [])[0]?.id,
      license: catalogue.license?.id,
      illustrationUploaded: () => g2Config().platform.url + `/data/catalogues/${catalogue.id}/img`
    }) : undefined, [catalogue])

  const metadataFormState = useFormComposable({
    isLoading: catalogueDraftQuery.isInitialLoading,
    formikConfig: {
      initialValues: formInitialValues
    }
  })

  const {onValidate} = useDraftMutations({
      metadataFormState,
      setTab,
      refetchDraft: catalogueDraftQuery.refetch,
      catalogue,
      afterValidateNavigate: cataloguesToVerify()
  })

  const title = catalogue?.title ?? t("sheetValidation")

  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [{
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm formState={metadataFormState} type={catalogue?.type as CatalogueTypes} />,
    }, {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections isLoading={catalogueDraftQuery.isInitialLoading} catalogue={catalogue} />,
    },
    ]
    return tabs
  }, [t, catalogue, metadataFormState, catalogueDraftQuery.isInitialLoading])

  const rejectDraft = useCatalogueDraftRejectCommand({})

  const onReject = useCallback(
    async (reason: string) => {
      const res = await rejectDraft.mutateAsync({
        id: draftId!,
        reason
      })
      if (res) {
        queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftPage"] })
        navigate(cataloguesToVerify())
      }
    },
    [catalogueId],
  )

  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
      customHeader={<CatalogueValidationHeader draft={draft} onAccept={onValidate} onReject={onReject} />}
    >
      <TitleDivider title={title} />
      <SectionTab
        keepMounted
        tabs={tabs}
        currentTab={tab}
        onTabChange={(_, value) => setTab(value)}
      />
    </AppPage>
  )
}
