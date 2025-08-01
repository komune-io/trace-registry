import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebouncedState } from "@mantine/hooks";
import { CatalogueRefSearchQuery, useCatalogueRefSearchQuery } from "../../api";
import { useAutoComplete } from "components/src/UseAutoComplete";
import { CatalogueRef } from "../../model";

export interface UseAutoCompleteCatalogueProps {
  fetchOnInitFocus?: boolean;
  initialLanguage?: string;
  searchLimit?: number
}

export const useAutoCompleteCatalogue = (props: UseAutoCompleteCatalogueProps) => {
  const {
    fetchOnInitFocus = false,
    initialLanguage,
    searchLimit = 10,
  } = props;
  const { t, i18n } = useTranslation();
  const currentLanguage = initialLanguage || i18n.language;

  const [queryFilters, setQueryFilters] = useState<Partial<CatalogueRefSearchQuery>>({});
  const [searchValues, setSearchValues] = useDebouncedState<Record<string, string | undefined>>({}, 400);
  const [enableSearchQuery, setEnableSearchQuery] = useState<string | undefined>(undefined);

  const catalogueSearchQuery = useCatalogueRefSearchQuery({
    query: {
      limit: searchLimit,
      offset: 0,
      ...queryFilters,
      language: currentLanguage,
      query: searchValues[enableSearchQuery ?? ""],
    },
    options: {
      enabled: !!enableSearchQuery,
    },
  });

  const handleSearch = useCallback((name: string, searchValue?: string, filters?: Partial<CatalogueRefSearchQuery>) => {
    setQueryFilters(filters || {})
    setSearchValues(prev => ({ ...prev, [name]: searchValue }))
    setEnableSearchQuery(name)
  }, []);

  const handleGetCatalogueLabel = useCallback((catalogue: CatalogueRef) => catalogue.title, [])
  const handleGetCatalogueKey = useCallback((catalogue: CatalogueRef) => catalogue.id, [])
  const handleCatalogueEquals = useCallback((catalogue1: CatalogueRef, catalogue2: CatalogueRef) => catalogue1.id === catalogue2.id, []);

  const autoComplete = useAutoComplete<CatalogueRef, CatalogueRefSearchQuery>({
    fetchOnInitFocus,
    options: catalogueSearchQuery.data?.items,
    searchValue: searchValues[enableSearchQuery ?? ""],
    onSearch: handleSearch,
    noResultText: t("catalogues.noResult"),
    getOptionLabel: handleGetCatalogueLabel,
    getOptionKey: handleGetCatalogueKey,
    isOptionEqualToValue: handleCatalogueEquals,
    isLoading: catalogueSearchQuery.isLoading,
  })

  return {
    ...autoComplete,
    queryResult: catalogueSearchQuery,
  }
}
