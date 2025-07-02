import React, {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import {AutoCompleteProps, FormComposableField, InputFormBasicProps} from "@komune-io/g2";
import {SearchIcon} from "components";
import { CatalogueRef } from "domain-components";

export interface UseAutoCompleteProps<Option, Filters> {
    fetchOnInitFocus?: boolean
    options?: Option[]
    onSearch: (name:string, searchValue?: string, filters?: Partial<Filters>) => void
    searchValue?: string
    noResultText?: string
    getOptionLabel?: (option: Option) => string
    getOptionKey?: (option: Option) => string
    isOptionEqualToValue?: (option: Option, value: Option) => boolean
    isLoading?: boolean
}

type ComponentProps = {
    name: string;
    label?: string;
    params?: Partial<AutoCompleteProps & InputFormBasicProps<'autoComplete'>>
    customDisplay?: (input: React.ReactNode) => React.ReactNode
}

export function useAutoComplete<Option, Filters>(props: UseAutoCompleteProps<Option, Filters>) {
    const {
        fetchOnInitFocus = false,
        options = [],
        onSearch,
        noResultText = '',
        getOptionLabel,
        getOptionKey,
        isOptionEqualToValue,
        isLoading = false,
        searchValue
    } = props;
    const { t } = useTranslation();

    const handleSearch = useCallback((name:string, searchValue?: string, filters?: Partial<Filters>) => {
        onSearch(name, searchValue, filters)
    }, [onSearch])

    const handleInputChange = useCallback((name:string, value: string, filters?: Partial<Filters>) => {
        handleSearch(name, value, filters)
    }, [])

    const handleFocus = useCallback((name:string, filters?: Partial<Filters>) => {
        if (fetchOnInitFocus) {
            handleSearch(name, undefined, filters)
        }
    }, [])

    const getComposableField = useCallback((props: ComponentProps, filters?: Partial<Filters>): FormComposableField => {
        const { name, label, params, customDisplay } = props
        return {
            name,
            type: "autoComplete",
            label,
            params: {
                ...params,
                popupIcon: <SearchIcon style={{ transform: "none" }} />,
                onInputChange: (_: any, value: string) => handleInputChange(name, value, filters),
                getOptionLabel: getOptionLabel,
                getOptionKey: getOptionKey,
                getReadOnlyChipColor: (option?: CatalogueRef) => option?.structure?.color,
                isOptionEqualToValue: isOptionEqualToValue,
                className: "autoCompleteField",
                onFocus: () => handleFocus(name, filters),
                options: options,
                returnFullObject: true,
                isLoading: isLoading,
                readOnlyType: "chip",
                noOptionsText: !searchValue && options.length === 0
                    ? t("typeToSearch")
                    : options.length === 0 && searchValue && !isLoading
                        ? noResultText
                        : '',
            },
            customDisplay
        }
    }, [options, t, handleInputChange, handleFocus, searchValue, noResultText, getOptionLabel, getOptionKey, isOptionEqualToValue, isLoading]);

    return {
        getComposableField,
        searchValue
    };
}
