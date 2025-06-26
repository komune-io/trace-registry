import { Typography } from '@mui/material'
import { WarningTicket } from 'components'
import { CatalogueDraft } from 'domain-components'
import { useTranslation } from 'react-i18next'

interface RejectedDraftInfoProps {
  draft?: CatalogueDraft
}

export const RejectedDraftInfo = (props: RejectedDraftInfoProps) => {
    const { draft } = props
    const { t } = useTranslation()
  return (
    <WarningTicket
        severity='error'
        title={t("catalogues.validatorComment")}
      >
        <Typography
          color='error'
        >
          {draft?.rejectReason ?? ""}
        </Typography>
      </WarningTicket>
  )
}
