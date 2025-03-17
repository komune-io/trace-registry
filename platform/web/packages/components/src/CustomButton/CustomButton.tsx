import { Button, ButtonProps, useTheme } from '@komune-io/g2'
import { forwardRef } from 'react';
import { LocalTheme } from '../utils';


export const CustomButton = forwardRef((props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { sx, children, size, ...other } = props
  const theme = useTheme<LocalTheme>()

  return (
    <Button
      ref={ref}
      className={`customButton ${size === "large" ? "customButtonLg" : ""}`}
      sx={{
        transform: theme.local?.rotation,
        ...sx
      }}
      size={size}
      {...other}
    >
      {children}
    </Button>
  )
})
