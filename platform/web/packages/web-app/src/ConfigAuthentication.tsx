import { OidcSecure } from '@komune-io/g2'
import { config } from 'components'
import React from 'react'

interface ConfigAuthenticationProps {
  children?: React.ReactNode
}

export const ConfigAuthentication = (props: ConfigAuthenticationProps) => {
  const { children } = props

  const { requiredAuthentication = true } = config()
  if (requiredAuthentication) {
    return (<OidcSecure>
      {children}
    </OidcSecure>
    )
  }
  return children
}
