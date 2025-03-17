import { Button, ButtonProps, useTheme } from '@komune-io/g2'
import { forwardRef } from 'react';
import { LocalTheme } from '../../Themes';


export const CustomButton = forwardRef((props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  const { sx, children, size, ...other } = props
  const theme = useTheme<LocalTheme>()

  return (
    <Button
      ref={ref}
      sx={{
        borderRadius: 0,
        transition: "0.2s",
        boxShadow: "unset !important",
        transform: theme.local?.rotation,
        padding: size === "large" ? "4px 16px" : "4px 10px",
        fontSize: size === "large" ? "1.25rem" : "1rem",
        "&:hover": {
          transform: "unset"
        },
        ...sx
      }}
      size={size}
      {...other}
    >
      {children}
    </Button>
  )
})
