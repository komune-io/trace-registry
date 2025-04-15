import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDebouncedState } from "@mantine/hooks";
import { useCatalogueRefSearchQuery } from "../../api";
import { FormComposableField } from "@komune-io/g2";
import { SearchIcon } from "components";
import type { TFunction } from "i18next";
import React from "react";
import {CatalogueRef, CatalogueDraft} from "../../model";

interface CatalogueRelations {
  key: string;
  title: string;
  type: string;
  multiple: boolean;
  customDisplay?: (input: React.ReactNode) => React.ReactNode;
}

export interface UseAutoCompleteCatalogueProps {
  draft?: CatalogueDraft,
  relations: CatalogueRelations[];
  fetchOnInitFocus?: boolean;
  initialLanguage?: string;
  searchLimit?: number;
}

export const useAutoCompleteCatalogue = (props: UseAutoCompleteCatalogueProps) => {
  const {
    relations,
    fetchOnInitFocus = false,
    initialLanguage,
    searchLimit = 10,
  } = props;
  const { t, i18n } = useTranslation();
  const currentLanguage = initialLanguage || i18n.language;

  const [activeRelation, setActiveRelation] = useState<CatalogueRelations | null>(null);
  const [searchValue, setSearchValue] = useDebouncedState<string | undefined>(undefined, 400);
  const [isFocused, setIsFocused] = useState(false);

  const shouldFetchOnInitFocus = (fetchOnInitFocus && isFocused && !searchValue) || !!searchValue;
  const queryResult = useCatalogueRefSearchQuery({
    query: {
      language: currentLanguage,
      type: activeRelation ? [activeRelation.type] : [],
      query: searchValue,
      limit: searchLimit,
      offset: 0,
    },
    options: {
      enabled: !!activeRelation && (isFocused || !!searchValue) && shouldFetchOnInitFocus,
    },
  });

  const options= queryResult.data?.items ?? [];

  const handleInputChange = useCallback(
    (relation: CatalogueRelations, value: string) => {
      setActiveRelation(relation);
      setSearchValue(value);
      setIsFocused(true);
    },
    [setSearchValue]
  );

  const handleFocus = useCallback((relation: CatalogueRelations) => {
    setActiveRelation(relation);
    setIsFocused(true);
  }, []);

  const formComposableField = useMemo(() => {
    return relations.map((relation) => {
      const fieldOptions = activeRelation?.key === relation.key ? options : [];
      return toComponents(
        t,
        relation,
        fieldOptions,
        (value: string) => handleInputChange(relation, value),
        () => handleFocus(relation),
        searchValue // Pass searchValue here
      );
    });
  }, [relations, activeRelation, options, t, handleInputChange, handleFocus, searchValue]); // Add searchValue to dependencies

  return {
    formComposableField: formComposableField,
    activeRelation: activeRelation,
    setActiveRelation: setActiveRelation,
    searchValue: searchValue,
    queryResult: queryResult,
  };
};

const toComponents = (
  t: TFunction,
  relation: CatalogueRelations,
  options: CatalogueRef[],
  onInputChange: (value: string) => void,
  onFocus: () => void,
  searchValue?: string,
): FormComposableField => {
  return {
    name: relation.key,
    type: "autoComplete",
    label: relation.title,
    params: {
      popupIcon: <SearchIcon style={{ transform: "none" }} />,
      onInputChange: (_: any, value: string) => onInputChange(value),
      getOptionLabel: (catalogue: CatalogueRef) => catalogue.title,
      getOptionKey: (catalogue: CatalogueRef) => catalogue.id,
      isOptionEqualToValue: (option: CatalogueRef, catalogue: CatalogueRef) => option.id === catalogue.id,
      className: "autoCompleteField",
      onFocus: onFocus,
      options: options,
      multiple: relation.multiple,
      returnFullObject: true,
      noOptionsText: !searchValue && options.length === 0 ? t("typeToSearch") : options.length === 0 && searchValue ? t("catalogues.noResult") : '',
    },
    customDisplay: relation.customDisplay,
  };
};

