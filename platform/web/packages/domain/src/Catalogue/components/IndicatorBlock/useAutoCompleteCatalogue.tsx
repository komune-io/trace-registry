import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDebouncedState} from "@mantine/hooks";
import {CatalogueRefSearchQuery, useCatalogueRefSearchQuery} from "../../api";
import {CatalogueRef} from "../../model";
import {useAutoComplete} from "components/src/UseAutoComplete";

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
  const [searchValue, setSearchValue] = useDebouncedState<string | undefined>(undefined, 400);
  const [enableSearchQuery, setEnableSearchQuery] = useState(false);

  const catalogueSearchQuery = useCatalogueRefSearchQuery({
    query: {
      ...queryFilters,
      language: currentLanguage,
      query: searchValue,
      limit: searchLimit,
      offset: 0,
    },
    options: {
      enabled: enableSearchQuery,
    },
  });

  const handleSearch = useCallback((searchValue?: string, filters?: Partial<CatalogueRefSearchQuery>) => {
    setQueryFilters(filters || {})
    setSearchValue(searchValue)
    setEnableSearchQuery(true)
  }, []);

  const handleGetCatalogueLabel = useCallback((catalogue: CatalogueRef) => catalogue.title, [])
  const handleGetCatalogueKey = useCallback((catalogue: CatalogueRef) => catalogue.id, [])
  const handleCatalogueEquals = useCallback((catalogue1: CatalogueRef, catalogue2: CatalogueRef) => catalogue1.id === catalogue2.id, []);

  const autoComplete = useAutoComplete<CatalogueRef, CatalogueRefSearchQuery>({
    fetchOnInitFocus,
    options: catalogueSearchQuery.data?.items,
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
