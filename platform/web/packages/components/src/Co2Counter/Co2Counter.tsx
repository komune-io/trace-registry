import { Stack, StackProps, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { IconPack } from '../Icons'
import { formatNumber, useTheme } from '@komune-io/g2'
import { keyframes } from "@emotion/react"
import { LocalTheme } from '../utils'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export interface Co2CounterProps extends StackProps {
    count: number
}

export const Co2Counter = (props: Co2CounterProps) => {
    const { count, sx, ...other } = props
    const { t, i18n } = useTranslation()
    const theme = useTheme<LocalTheme>()
    return (
        <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{
                "& .loadingIcon": {
                    animation: `${spin} 8s linear infinite`
                },
                flexShrink: 0,
                ...sx
            }}
            {...other}
        >
            <IconPack.loading  className='loadingIcon' style={{ width: "54px", height: "auto" }} />
            <Stack
            >
                <Typography
                    sx={{
                        fontFamily: theme.local?.numberFont,
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        mb: -0.5
                    }}
                >
                    {formatNumber(count, i18n.language, 1)}
                </Typography>
                <Typography
                    variant="caption"
                >
                    {t("co2TonsAvoided")}
                </Typography>
            </Stack>
        </Stack>
    )
}
