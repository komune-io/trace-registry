import { Skeleton, Stack, Typography } from '@mui/material'
import { CustomLinkButton } from '../CustomButton'
import { useTranslation } from 'react-i18next'
import {DistributionLexicalEditor, LexicalDistribution} from "domain-components";

interface TitleSeeAllLinkProps {
    lexicalDistribution?: LexicalDistribution
    title?: string
    link?: string
    linkLabel?: string
    description?: string
    isLoading?: boolean
    titleVariant?: "h3" | "h4"
}

export const TitleSeeAllLink = (props: TitleSeeAllLinkProps) => {
    const { title, link, linkLabel, description, isLoading, titleVariant = "h3", lexicalDistribution } = props
    const { t } = useTranslation()
    return (
        <Stack
            gap={2}
        >
            <Stack
                direction="row"
                gap={20}
                alignItems={'start'}
                justifyContent={'space-between'}
            >
                {
                    lexicalDistribution
                    ? <DistributionLexicalEditor {...lexicalDistribution} />
                    : <Typography variant={titleVariant}>
                          {!title && isLoading ? <Skeleton animation="wave" width="150px" /> : title}
                      </Typography>
                }


                <CustomLinkButton to={link ?? ""} sx={{minWidth: 180}}>
                    {linkLabel ?? t('seeAll')}
                </CustomLinkButton>
            </Stack>
            {description && <Typography>{description}</Typography>}
        </Stack>
    )
}
