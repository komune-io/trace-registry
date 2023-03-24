import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Project } from '../../model'

export interface ActivitiesSummaryProps {
    project?: Project
    isLoading?: boolean
}

export const ActivitiesSummary = (props: ActivitiesSummaryProps) => {
    const { isLoading } = props
    const { t } = useTranslation()
    return (
        <Stack
            sx={{
                height: "100%",
                width: "550px",
                padding: "24px 32px",
            }}
            gap={2}
        >
            <Box>
                <Typography variant="h5" >{t("projects.activities")}</Typography>
                <Divider sx={{ marginTop: "8px" }} />
            </Box>
            {
                isLoading ?
                    <Skeleton
                        sx={{
                            width: '100%',
                            height: '200px',
                            transform: 'none'
                        }}
                        animation='wave'
                        variant='text'
                    />
                    :
                    <Typography color="text.secondary" >Activities description. Consectetur excepturi delectus. Ducimus iste fugiat. Molestias repudiandae inventore corrupti magnam atque. Laborum libero est voluptatem.</Typography>
            }
        </Stack>
    )
}
