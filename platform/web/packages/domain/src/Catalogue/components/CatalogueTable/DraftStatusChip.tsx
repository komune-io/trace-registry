import { Chip } from '@komune-io/g2'
import { useTranslation } from 'react-i18next'
import { DraftStatus } from '../../model'

export const draftStatusToColor: Record<DraftStatus, string> = {
    "VALIDATED": "#159D50",
    "REJECTED": "#750D0E",
    "DRAFT": "#2F2E2F",
    "SUBMITTED": "#3C78D8",
    "UPDATE_REQUESTED": "#FF9900"
}

interface DraftStatusChipProps {
    status: DraftStatus
}

export const DraftStatusChip = (props: DraftStatusChipProps) => {
    const {status} = props
    const {t} = useTranslation()
  return (
     <Chip label={t("catalogues.draftStatus." + status)} color={draftStatusToColor[status]} />
  )
}
