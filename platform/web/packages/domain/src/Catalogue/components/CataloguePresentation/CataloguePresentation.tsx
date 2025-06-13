import { Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { useCatalogueIdentifierNumber } from "../../api";
import { g2Config, useTheme } from '@komune-io/g2';
import { defaultCatalogueImg, LocalTheme, UnCachedImage } from 'components';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export interface CataloguePresentationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CataloguePresentation = (props: CataloguePresentationProps) => {
    const { catalogue } = props
    const [noimage, setnoimage] = useState(false)
    const { t } = useTranslation()
    const identifierNumber = useCatalogueIdentifierNumber(catalogue)
    const theme = useTheme<LocalTheme>()
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            gap={8}
            sx={{
                "& .illustration": {
                    width: "auto",
                    height: "auto",
                    maxWidth: "500px",
                    maxHeight: "350px",
                    flexShrink: 0,
                    flexGrow: 1,
                    objectFit: "contain"
                }
            }}
        >
            <Stack
                gap={5}
                flex={1}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={5}
                >
                    <Typography
                        variant='h1'
                    >
                        {catalogue?.title}
                    </Typography>
                    {catalogue?.structure?.illustration === "IDENTIFIER" && <Typography
                        color="primary"
                        sx={{
                            fontFamily: theme.local?.numberFont,
                            fontSize: "1.5rem",
                            fontWeight: 700
                        }}
                    >
                        {identifierNumber}
                    </Typography>}
                </Stack>
                <Typography>
                    {catalogue?.description}
                </Typography>
            </Stack>
            {catalogue?.structure?.illustration === "IMAGE" && (
                !noimage && catalogue?.img ?
                    <UnCachedImage src={g2Config().platform.url + catalogue?.img} alt={t("sheetIllustration")} className='illustration' onError={() => setnoimage(true)} />
                    :
                    <img src={defaultCatalogueImg} alt={t("sheetIllustration")} className='illustration' />
            )}
        </Stack>
    )
}
