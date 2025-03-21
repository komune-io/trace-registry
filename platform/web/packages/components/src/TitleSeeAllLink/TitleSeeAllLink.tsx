import { Skeleton, Stack, Typography } from '@mui/material'
import { CustomLinkButton } from '../CustomButton'
import { useTranslation } from 'react-i18next'

interface TitleSeeAllLinkProps {
    title?: string
    link?: string
    linkLabel?: string
    description?: string
    isLoading?: boolean
    titleVariant?: "h3" | "h4"
}

export const TitleSeeAllLink = (props: TitleSeeAllLinkProps) => {
    const { title, link, linkLabel, description, isLoading, titleVariant = "h3" } = props
    const { t } = useTranslation()
    return (
        <Stack
            gap={2}
        >
            <Stack
                direction="row"
                gap={1}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography variant={titleVariant}>
                    {!title && isLoading ? <Skeleton animation="wave" width="150px" /> : title}
                </Typography>

                <CustomLinkButton
                    to={link ?? ""}
                >
                    {linkLabel ?? t('seeAll')}
                </CustomLinkButton>
            </Stack>
            {description && <Typography>{description}</Typography>}
        </Stack>
    )
}
