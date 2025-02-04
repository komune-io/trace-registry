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
      component: <CatalogueSections readOnly sections={[md, md]} catalogue={catalogue} />,
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


const md = `
# Synthèse économique

===COL===
---50---
### **Coûts --**

De 170 à 210 EUR/kW fourchette de prix pour la plupart des applications courantes

**Difficultés :**

- Possible phénomène de résonance
- Précautions d'utilisation : harmoniques, sensibilité aux creux de tension, lubrification pour l'utilisation sur des moteurs de compresseurs existants
---50---
### **Gains ++**

De 10 à 50 % d'économie sur la consommation instantanée du moteur selon la charge

**Effets positifs :**

- Suppression de l'appel de puissance au démarrage et donc une amélioration de la durée de vie des équipements
- Réduction du bruit
- Meilleure régulation des procédés
- Prolonge la durée de vie du système
===/COL===

# Technique

## Définition

Un moteur étant dimensionné autour de son point de fonctionnement, son rendement sera fortement réduit si sa charge diminue.
Comme certaines utilisations impliquent une très grande variabilité (compression et pompage de fluides), il est d'usage d'utiliser une vanne qui régule débit et pression.
La variation électronique de vitesse modifie la tension et la fréquence d’alimentation du moteur, pour réguler sa vitesse.

## Application

Les économies sont plus importantes dans le cas de charges à couple variable : ventilation, pompage, soufflage. Sur des pompes et compresseurs à pistons, l’impact de la variation électronique de vitesse est moins importante que sur des pompes centrifuge ou des compresseurs à vis ou de type scroll. En effet, pour des machines à pistons, la fréquence ne peut varier que sur une plage de 40-50 Hertz alors qu’elle peut varier de 30 à 60 Hertz pour des machines rotatives
De ce fait, le gain est plus modeste pour les charges à couple constant : compression, mélange, convoyage.

## Bilan énergie

Le graphique ci-contre présente un comparatif entre une régulation par vanne de laminage et la variation de vitesse.
On peut constater la différence sur la puissance électrique, et donc le gain d’énergie, étant donné que dans un cas le moteur tourne à plein régime, et dans l’autre sa vitesse est adaptée au besoin.

![image](/graph.png)
`