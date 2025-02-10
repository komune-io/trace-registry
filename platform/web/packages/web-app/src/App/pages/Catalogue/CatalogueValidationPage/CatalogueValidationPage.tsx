import { TitleDivider } from 'components'
import { CatalogueMetadataForm, CatalogueSections, CatalogueValidationHeader, useCatalogueGetQuery } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useParams } from "react-router-dom";
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { g2Config, useFormComposable } from '@komune-io/g2';

export const CatalogueValidationPage = () => {
  const { catalogueId } = useParams()
  const [tab, setTab] = useState("info")
  const { t } = useTranslation()

  const catalogueQuery = useCatalogueGetQuery({
    query: {
      id: catalogueId!
    },
  })

  const catalogue = catalogueQuery.data?.item

  const formInitialValues = useMemo(() => catalogue ? ({
    ...catalogue,
    illustrationUploaded: () => g2Config().platform + `/data/catalogues/${catalogue.id}/img`
  }) : undefined, [catalogue])

  const metadataFormState = useFormComposable({
    isLoading: catalogueQuery.isInitialLoading,
    formikConfig: {
      initialValues: formInitialValues
    }
  })

  const title = catalogue?.title ?? t("sheetValidation")

  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [{
      key: 'metadata',
      label: t('metadata'),
      component: <CatalogueMetadataForm formState={metadataFormState} type='100m-solution' />,
    }, {
      key: 'info',
      label: t('informations'),
      component: <CatalogueSections readOnly catalogue={catalogue} />,
    },
    ]
    return tabs
  }, [t, catalogue, metadataFormState])

  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
      customHeader={<CatalogueValidationHeader onAccept={() => { return Promise.resolve() }} onReject={() => { return Promise.resolve() }} />}
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
