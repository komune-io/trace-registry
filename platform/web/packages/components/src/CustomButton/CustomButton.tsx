import { Button, ButtonProps } from '@komune-io/g2'
import {alpha, IconButton, SxProps, Theme} from '@mui/material'
import {Edit} from "@mui/icons-material";
import { forwardRef } from 'react';

export type Variant = 'form' | 'action' | 'large' | 'icon'| 'delete'

export interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  isSelected?: boolean
  variant?: Variant
}

export const activeButtonStyles: SxProps<Theme> = {
  color: 'primary.main',
  bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, 0.1),
  boxShadow: 1
}

export const buttonStyles: SxProps<Theme> = {
  justifyContent: "flex-start",
  color: "text.secondary",
  bgcolor: "#E4DEE7",
  borderRadius: 1,
  transition: "0.2s",
  minWidth: 0,
  "&:hover": activeButtonStyles,
}

export const CustomButton = forwardRef((props: CustomButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const {variant, sx, children, isSelected = false, ...other} = props
  if(variant === 'large') return (
      <Button
          {...other}
          size='large'
      >
        {children}
      </Button>
  )
  if(variant === 'icon') return (
    <IconButton {...other}>
        <Edit/>
    </IconButton>
  )
  return (
    <Button
    ref={ref}
        sx={{
            ...buttonStyles,
            ...(isSelected ? activeButtonStyles : undefined),
            ...sx
        }}
        variant='text'
        {...other}
    >
        {children}
    </Button>
  )
})
