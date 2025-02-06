import { SearchFilter, useRoutesDefinition } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const CatalogueSearchBar = () => {
    const { t } = useTranslation()

    const {cataloguesSearch} = useRoutesDefinition()
    const navigate = useNavigate()

    const onSearch = useCallback(
        (value: string) => {
            navigate(cataloguesSearch() + "?title=" + value + "&goBackUrl=" + window.location.pathname)
        },
        [],
    )


    return (
        <SearchFilter
            placeholder={t("catalogues.globalSearch")}
            onSearch={onSearch}
            rootProps={{
                sx: {
                    maxWidth: 800
                }
            }}
        />
    )
}
