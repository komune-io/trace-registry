import { Stack, Typography } from '@mui/material'
import { Catalogue } from '../../model'
import { config } from "../../../config";

export interface CataloguePresentationProps {
    catalogue?: Catalogue
    isLoading?: boolean
}

export const CataloguePresentation = (props: CataloguePresentationProps) => {
    const { catalogue } = props

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
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={2}
                >
                    <Typography
                        variant='h4'
                    >
                        {catalogue?.title}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color="primary"
                    >
                        {catalogue?.type}
                    </Typography>
                </Stack>
                <Typography>
                    {catalogue?.description}
                </Typography>
            </Stack>
            {catalogue?.img && <img
                className='catalogLogo'
                src={`${config().platform.url}${catalogue.img}`}
                alt="The standard logo"
            />}
        </Stack>
    )
}
