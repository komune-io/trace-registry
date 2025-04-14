import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { UnCachedImage } from '../UnCachedImage'

export interface ContentIllustratedProps {
    title: string
    description: string
    illustration?: string
    actions?: React.ReactNode
    color?: string
}

export const ContentIllustrated = (props: ContentIllustratedProps) => {
    const { title, description, illustration, color, actions } = props

    const [noimage, setnoimage] = useState(!illustration)

    const { t } = useTranslation()
    return (
        <Stack
            alignItems="center"
            sx={{
                gap:{
                    md: 0,
                    lg: 8
                },
                flexDirection: {
                    md: "column",
                    lg: "row"
                },
                "& .illustration": {
                    width: "500px",
                    maxWidth: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "unset"
                    },
                    flexShrink: 0,
                    height: "auto",
                    borderRadius: 3,
                }
            }}
        >
            <Stack
                gap={5}
                flexGrow={1}
            >
                <Typography
                    variant='h1'
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        whiteSpace: "pre-line"
                    }}
                >
                    {description}
                </Typography>
            </Stack>
            <Stack
                gap={2}
                alignItems={"flex-end"}
            >
                {actions}
                {!noimage ?
                    <UnCachedImage src={illustration} alt={t("sheetIllustration")} className='illustration' onError={() => setnoimage(true)} />
                    :
                    <Box
                        sx={{
                            bgcolor: color ?? "#F9DC44",
                            width: "500px",
                            height: "340px",
                            maxWidth: "100%",
                            borderRadius: 3,
                            flexShrink: 0
                        }}
                    />
                }
            </Stack>

        </Stack>
    )
}
