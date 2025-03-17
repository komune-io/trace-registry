import { ButtonProps } from '@komune-io/g2'
import { ForwardedRef, forwardRef } from "react"
import { Link, LinkProps } from 'react-router-dom'
import { CustomButton } from './CustomButton'


export const CustomLinkButton = forwardRef((props: ButtonProps & LinkProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { sx, children, ...other } = props

  return (
    <CustomButton
      component={Link}
      ref={ref}
      {...other}
    >
      {children}
    </CustomButton>
  )
})
