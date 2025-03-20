import { Skeleton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

interface TitledImgProps {
    title?: string
    src?: string
    alt?: string
    to?: string
    isLoading?: boolean
}

export const TitledImg = (props: TitledImgProps) => {
    const { alt, src, title, to, isLoading } = props
    return (
        <Stack
            component={Link}
            gap={3}
            alignItems="center"
            to={to ?? ""}
            sx={{
                textDecoration: "none"
            }}
        >
            {!isLoading ? <img src={src} alt={alt} style={{ width: "auto", height: "200px" }} /> : <Skeleton animation="wave" variant="circular" width="200px" height="200px" />}
            <Typography
                variant='h5'
                align='center'
                
            >
                {!isLoading ? title : <Skeleton animation="wave" width="250px" />}
            </Typography>
        </Stack>
    )
}
