import { CloseRounded } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material'
import { useCallback, useMemo } from 'react';
import { StackProps } from '@mui/material';
import {formatNumber} from "@komune-io/g2"
import { useTranslation } from 'react-i18next';

const colors = {
    gold: "#EDBA27",
    silver: "#C0BCB3",
    bronze: "#D78C2F"
}

export interface BadgeProps extends Omit<StackProps, 'onChange' | 'onClick'> {
    label: string;
    icon?: string | JSX.Element;
    value?: number | string;
    color?: string;
    onClick?: () => void;
    onChange?: (isSelected: boolean) => void;
    isSelected?: boolean;
}

export const Badge = (props: BadgeProps) => {
    const { label, icon, color, value, onClick, isSelected = false, onChange, sx, ...ohter } = props;
    const defValue = typeof value === "string" ? Number(value) : value
    const defColor = color ?? (defValue ? defValue < 60 ? colors.bronze : defValue < 80 ? colors.silver : colors.gold : colors.gold);
    const isClickable = !!onClick || !!onChange;
    const {i18n} = useTranslation()

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

    const formattedValue = useMemo(() => defValue ? formatNumber(defValue, i18n.language, 1) : undefined, [defValue, i18n.language])

    return (
        <Stack
            direction="row"
            alignItems="center"
            component={isClickable ? 'button' : 'div'}
            onClick={onClickMemo}
            gap={1}
            {...ohter}
            sx={{
                width: 'fit-content',
                borderRadius: "14px",
                border: isSelected ? "1px solid " + defColor : "1px solid #EEE",
                background: "#FFF",
                boxShadow: !isClickable || isSelected ? 1 : undefined,
                px: 1,
                py: 0.5,
                cursor: isClickable ? 'pointer' : 'default',
                transition: "0.3s",
                "&:hover": {
                    boxShadow: isClickable ? 1 : undefined
                },
                ...sx
            }}
        >
            {typeof icon === 'string'  ? <Box
                sx={{
                    backgroundColor: defColor,
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
                sx={{
                    flexGrow: 1
                }}
                noWrap
            >
                {label}
            </Typography>
            {formattedValue && <Typography
                variant="body2"
                sx={{
                    ml: 1.5,
                    color: defColor,
                    fontWeight: 700
                }}
            >
                {formattedValue}
            </Typography>}
            {isSelected &&
                <CloseRounded
                    sx={{
                        width: 18,
                        height: 18,
                        color: defColor,
                    }}
                />

            }
        </Stack >
    )
}
