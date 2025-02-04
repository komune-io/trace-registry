import { LinkButton, LinkButtonProps } from '@komune-io/g2'
import { activeButtonStyles, buttonStyles } from './CustomButton'
import {ForwardedRef, forwardRef} from "react"

export interface CustomLinkButtonProps extends LinkButtonProps {
  isSelected?: boolean
}

export const CustomLinkButton = forwardRef((props: CustomLinkButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {sx, children, isSelected = false, ...other} = props
  return (
    <LinkButton
    ref={ref}
    //@ts-ignore
    sx={{
      ...buttonStyles,
      ...(isSelected ? activeButtonStyles : undefined),
        ...sx
    }}
    variant='text'
    {...other}
    >
        {children}
    </LinkButton>
  )
})
