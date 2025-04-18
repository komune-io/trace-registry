import { Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { useCatalogueIdentifierNumber } from "../../api";
import { useTheme } from '@komune-io/g2';
import { LocalTheme } from 'components';

export interface CataloguePresentationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CataloguePresentation = (props: CataloguePresentationProps) => {
    const { catalogue } = props
    const identifierNumber = useCatalogueIdentifierNumber(catalogue)
     const theme = useTheme<LocalTheme>()
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
            gap={8}
            sx={{
                "& .catalogLogo": {
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
                    <Typography
                        color="primary"
                        sx={{
                            fontFamily: theme.local?.numberFont,
                            fontSize: "1.5rem",
                            fontWeight: 700
                        }}
                    >
                        {identifierNumber}
                    </Typography>
                </Stack>
                <Typography>
                    {catalogue?.description}
                </Typography>
            </Stack>
            {/* catalogue?.img && <img
                className='catalogLogo'
                src={`${config().platform.url}${catalogue.img}`}
                alt="The standard logo"
            /> */}
        </Stack>
    )
}
