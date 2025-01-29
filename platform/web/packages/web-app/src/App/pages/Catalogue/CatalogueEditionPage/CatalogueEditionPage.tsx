import { TitleDivider } from 'components'
import { CatalogueEditionHeader, useCatalogueGetQuery } from 'domain-components'
import { AppPage, SectionTab, Tab } from 'template'
import { useParams } from "react-router-dom";
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CatalogueEditionPage = () => {
  const { catalogueId } = useParams()
  const [tab, setTab] = useState("info")
  const { t } = useTranslation()

  const catalogue = useCatalogueGetQuery({
    query: {
      id: catalogueId!
    },
  }).data?.item

  const title = catalogue?.title ?? "Sheet edition"

  const tabs: Tab[] = useMemo(() => {
    const tabs: Tab[] = [{
      key: 'info',
      label: t('informations'),
      component: (<></>)
    }
    ]
    return tabs
  }, [t, catalogue])

  return (
    <AppPage
      title={title}
      bgcolor='background.default'
      maxWidth={1020}
    >
      <CatalogueEditionHeader catalogue={catalogue} />
      <TitleDivider title={title} onDebouncedChange={() => { }} />
      <SectionTab
        tabs={tabs}
        currentTab={tab}
        onTabChange={(_, value) => setTab(value)}
        sx={{
          "& .AruiSection-contentContainer": {
            gap: (theme) => theme.spacing(5)
          }
        }}
      />
    </AppPage>
  )
}
