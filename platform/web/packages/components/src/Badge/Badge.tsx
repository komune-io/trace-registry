import { Box, Stack, Typography } from '@mui/material'

const colors = {
    gold: "#EDBA27",
    silver: "#C0BCB3",
    bronze: "#D78C2F"
}

export interface BadgeProps {
    label: string;
    icon?: string;
    value?: number;
}

export const Badge = (props: BadgeProps) => {
    const { label, icon, value } = props;
    const color = value ? value < 60 ? colors.bronze : value < 80 ? colors.silver : colors.gold : colors.gold;
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
                borderRadius: "14px",
                border: "1px solid #EEE",
                background: "#FFF",
                boxShadow: 1,
                px: 1,
                py: 0.5,
            }}
        >
            {icon && <Box
                sx={{
                    backgroundColor: color,
                    color: 'white',
                    fill: 'white',
                    borderRadius: '100%',
                    p: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={icon} alt={`Icon ${label}`} style={{ width: 18, height: 18 }} />
            </Box>
            }
            <Typography
                variant="caption"
            >
                {label}
            </Typography>
            {value && <Typography
                variant="body2"
                sx={{
                    ml: 1.5,
                    color: color,
                }}
            >
                {value}
            </Typography>}
        </Stack >
    )
}
