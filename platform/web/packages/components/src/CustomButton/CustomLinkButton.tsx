import { LinkButton, LinkButtonProps, useTheme } from '@komune-io/g2'
import { ForwardedRef, forwardRef } from "react"
import { LocalTheme } from '../utils'


export const CustomLinkButton = forwardRef((props: LinkButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { sx, children, size, ...other } = props
  const theme = useTheme<LocalTheme>()
  return (
    <LinkButton
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
    </LinkButton>
  )
})
