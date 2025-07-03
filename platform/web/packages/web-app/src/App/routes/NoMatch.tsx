import { NoMatchPage } from '@komune-io/g2'
import { Typography } from '@mui/material'
import { useExtendedAuth } from 'components'
import { MutableRefObject, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Location } from 'react-router-dom'

export interface NoMatchProps {
    prevLocation?: MutableRefObject<Location<any>>
}

export const NoMatch = (props: NoMatchProps) => {
    const { prevLocation } = props
    const { t } = useTranslation()
    const { keycloak } = useExtendedAuth()
    useEffect(() => {
        if (!keycloak.isAuthenticated) {
            keycloak.login(prevLocation?.current.pathname)
        }
    }, [keycloak.isAuthenticated])


    return (
       <NoMatchPage >
        <Typography>
            {t("404Description")}
        </Typography>
        </NoMatchPage>
    )
}
