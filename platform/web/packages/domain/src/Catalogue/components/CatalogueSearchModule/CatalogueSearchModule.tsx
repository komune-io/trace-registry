import { CircularProgress, Stack, Typography } from '@mui/material'
import { CatalogueSearchResult } from '../../api'
import { CatalogueSearchFilters } from '../CatalogueSearchFilters'
import { CatalogueResultListByType } from '../CatalogueResultListByType'
import { useTranslation } from 'react-i18next'

export interface CatalogueSearchModuleProps<T extends {}> {
    state: T
    changeValueCallback: (valueKey: keyof T) => (value: any) => void
    data?: CatalogueSearchResult
    isFetching?: boolean
    withImage?: boolean
}

export const CatalogueSearchModule = <T extends {}>(props: CatalogueSearchModuleProps<T>) => {
    const { state, changeValueCallback, data, isFetching, withImage } = props
    const { t } = useTranslation()
   
    return (
        <Stack
            direction="row"
            width={"100%"}
            gap={3}
        >
            <CatalogueSearchFilters
                savedState={state}
                facets={data?.facets}
                //@ts-ignore
                onChangeFacet={changeValueCallback}
            />
            {isFetching ? <Stack direction="row" justifyContent="center" flex={1} pt={6}>
                <CircularProgress size={60} />
            </Stack> : <Stack gap={3} flex={1}>
                {data && <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold"
                    }}
                >
                    {t("resultNumber", { total: data.total })}
                </Typography>}
                <CatalogueResultListByType withImage={withImage} items={data?.items} />
            </Stack>}
           
        </Stack>
    )
}
