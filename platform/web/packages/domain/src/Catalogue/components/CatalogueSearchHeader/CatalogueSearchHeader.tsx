import { CloseRounded } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import { SearchFilter } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface CatalogueSearchHeaderProps {
    onSearch?: (value: string) => void
    goBackUrl: string
}

export const CatalogueSearchHeader = (props: CatalogueSearchHeaderProps) => {
    const {goBackUrl, onSearch} = props
    const {t} = useTranslation()
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{
                width: "100%"
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={2}
                flexGrow={1}

            >
                <SearchFilter
                    placeholder={t("catalogues.globalSearch")}
                    onSearch={onSearch}
                    rootProps={{
                        sx: {
                            maxWidth: 1200
                        }
                    }}
                />
            </Stack>
            {/* @ts-ignore */}
            <IconButton
            component={Link}
            to={goBackUrl}
            >
                <CloseRounded />
            </IconButton>
        </Stack>
    )
}
