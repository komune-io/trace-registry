import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDebouncedState} from "@mantine/hooks";
import {CatalogueListAvailableOwnersQuery, useCatalogueListAvailableOwnersQuery} from "../../api";
import {useAutoComplete} from "components/src/UseAutoComplete";
import {OrganizationRef} from "../../../Identity";

export interface UseAutoCompleteCatalogueOwnersProps {
  catalogueType: string
  fetchOnInitFocus?: boolean
  searchLimit?: number
}

export const useAutoCompleteCatalogueOwners = (props: UseAutoCompleteCatalogueOwnersProps) => {
  const {
    catalogueType,
    fetchOnInitFocus = false,
    searchLimit = 10,
  } = props;
  const { t } = useTranslation();

  const [queryFilters, setQueryFilters] = useState<Partial<CatalogueListAvailableOwnersQuery>>({});
  const [searchValue, setSearchValue] = useDebouncedState<string | undefined>(undefined, 400);
  const [enableSearchQuery, setEnableSearchQuery] = useState(false);

  const ownerSearchQuery = useCatalogueListAvailableOwnersQuery({
    query: {
      ...queryFilters,
      type: catalogueType,
      search: searchValue,
      limit: searchLimit,
    },
    options: {
      enabled: enableSearchQuery,
    },
  });

  const handleSearch = useCallback((searchValue?: string, filters?: Partial<CatalogueListAvailableOwnersQuery>) => {
    setQueryFilters(filters || {})
    setSearchValue(searchValue)
    setEnableSearchQuery(true)
  }, []);

  const handleGetOrganizationLabel = useCallback((organization: OrganizationRef) => organization.name, [])
  const handleGetOrganizationKey = useCallback((organization: OrganizationRef) => organization.id, [])
  const handleOrganizationEquals = useCallback((organization1: OrganizationRef, organization2: OrganizationRef) => organization1.id === organization2.id, []);

  const autoComplete = useAutoComplete<OrganizationRef, CatalogueListAvailableOwnersQuery>({
    fetchOnInitFocus,
    options: ownerSearchQuery.data?.items,
    onSearch: handleSearch,
    noResultText: t("catalogues.noResult"),
    getOptionLabel: handleGetOrganizationLabel,
    getOptionKey: handleGetOrganizationKey,
    isOptionEqualToValue: handleOrganizationEquals,
    isLoading: ownerSearchQuery.isLoading,
  })

  return {
    ...autoComplete,
    queryResult: ownerSearchQuery,
  }
}
