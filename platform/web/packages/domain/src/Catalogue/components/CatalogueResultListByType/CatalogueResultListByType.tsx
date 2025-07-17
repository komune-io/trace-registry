import { Catalogue } from "../../model";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { CatalogueResultList } from "../CatalogueResultList";
import { useCatalogueGetBlueprintsQuery } from "../../api";


interface CatalogueResultListByTypeProps {
  items?: Catalogue[]
  withImage?: boolean
}

export const CatalogueResultListByType = (props: CatalogueResultListByTypeProps) => {
  const { items, withImage } = props
  const { i18n } = useTranslation()

  const allowedTypes = useCatalogueGetBlueprintsQuery({
    query: {
      language: i18n.language
    }
  }).data?.item

  const resultListComponents = useMemo(() => {
    const grouped: Partial<Record<string, Catalogue[]>> = Object.groupBy(
      items ?? [],
      ({ type }) => type
    );
    // Remove keys where the array is empty
    Object.keys(grouped).forEach((key) => {
      if (grouped[key]?.length === 0) {
        delete grouped[key];
      }
    });
    return grouped
  }, [items])

  return Object.keys(resultListComponents).map((catalogueType) => {
    const byType = resultListComponents[catalogueType] ?? []
    return (
      <CatalogueResultList
        key={catalogueType}
        withImage={withImage}
        catalogues={byType}
        groupLabel={allowedTypes?.types[catalogueType]?.name}
      />
    )
  })
}
