import { Typography } from '@mui/material'
import { CustomLinkButton, InfoTicket, useRoutesDefinition } from 'components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'


export const ValidatedDraftInfo = () => {
    const { catalogueId } = useParams()
    const { t } = useTranslation()
    const { cataloguesAll } = useRoutesDefinition()

    return (
        <>
            <InfoTicket
                title={t("catalogues.contributionValidated")}
                severity='success'
            >
                <CustomLinkButton
                    to={cataloguesAll(catalogueId!)}
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