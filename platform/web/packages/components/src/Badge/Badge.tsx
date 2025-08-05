import { CloseRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material'
import { useCallback } from 'react';

const colors = {
    gold: "#EDBA27",
    silver: "#C0BCB3",
    bronze: "#D78C2F"
}

export interface BadgeProps {
    label: string;
    icon?: string | JSX.Element
    value?: number;
    onClick?: () => void;
    onChange?: (isSelected: boolean) => void
    isSelected?: boolean;
}

export const Badge = (props: BadgeProps) => {
    const { label, icon, value, onClick, isSelected = false, onChange } = props;
    const color = value ? value < 60 ? colors.bronze : value < 80 ? colors.silver : colors.gold : colors.gold;
    const isClickable = !!onClick || !!onChange;

    const onClickMemo = useCallback(
      () => {
        if (onClick) {
          onClick();
        }
        if (onChange) {
          onChange(!isSelected);
        }
      },
      [onClick, onChange, isSelected],
    )
    
    return (
        <Stack
            direction="row"
            alignItems="center"
            component={isClickable ? 'button' : 'div'}
            onClick={onClickMemo}
            gap={1}
            sx={{
                borderRadius: "14px",
                border: isSelected ? "1px solid " + color : "1px solid #EEE",
                background: "#FFF",
                boxShadow: !isClickable || isSelected ? 1 : undefined,
                px: 1,
                py: 0.5,
                cursor: isClickable ? 'pointer' : 'default',
                transition: "0.3s",
                "&:hover": {
                    boxShadow: isClickable ? 1 : undefined
                }
            }}
        >
            {typeof icon === 'string'  ? <Box
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
            : icon}
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
                    fontWeight: 700
                }}
            >
                {value}
            </Typography>}
            {isSelected &&
                <CloseRounded
                    sx={{
                        width: 18,
                        height: 18,
                        color: color,
                    }}
                />

            }
        </Stack >
    )
}
