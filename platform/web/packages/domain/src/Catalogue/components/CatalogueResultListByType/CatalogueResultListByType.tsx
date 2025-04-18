import {Catalogue} from "../../model";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {CatalogueResultList} from "../CatalogueResultList";


interface CatalogueResultListByTypeProps {
  items?: Catalogue[]
}

export const CatalogueResultListByType = (props: CatalogueResultListByTypeProps) => {
  const {items} = props
  const { t } = useTranslation()
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
  }, [ items])
  return Object.keys(resultListComponents).map((catalogueType) => {
    const byType =  resultListComponents[catalogueType] ?? []
    return (
      <CatalogueResultList
        catalogues={byType}
        groupLabel={t(`catalogues.types.${catalogueType}`)}
      />
    )
  })
}
