import { Typography } from '@mui/material'
import { CustomLinkButton, InfoTicket, useRoutesDefinition } from 'components'
import { Catalogue } from 'domain-components'
import { useTranslation } from 'react-i18next'

interface ValidatedDraftInfoProps {
    catalogue?: Catalogue
}

export const ValidatedDraftInfo = (props: ValidatedDraftInfoProps) => {
    const { catalogue } = props
    const { t } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    return (
        <>
            <InfoTicket
                title={t("catalogues.contributionValidated")}
                severity='success'
            >
                <CustomLinkButton
                    to={cataloguesAll(catalogue?.identifier!)}
                >
                    {t("catalogues.consultPublishedSheet")}
                </CustomLinkButton>
            </InfoTicket>
            <Typography
                variant='body2'
            >
                {t("catalogues.contentAddedToSheet")}
            </Typography>
            <Typography
                variant='body2'
            >
                {t("catalogues.wishToReAddContent")}
            </Typography>
        </>
    )
}