import { Stack, StackProps, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Icon, iconPackSrc } from '../Icons'
import { formatNumber } from '@komune-io/g2'
import { keyframes } from "@emotion/react"

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
    return (
        <Stack
            gap={1}
            direction="row"
            alignItems="center"
            sx={{
                "& .loadingIcon": {
                    animation: `${spin} 8s linear infinite`
                },
                ...sx
            }}
            {...other}
        >
            <Icon src={iconPackSrc.loading} className='loadingIcon' style={{ width: "54px", height: "auto" }} />
            <Stack
            >
                <Typography
                    sx={{
                        fontFamily: "Milanesa Serif",
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        mb: -0.5
                    }}
                >
                    {formatNumber(count, i18n.language, 3)}
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
