import {Chip} from '@komune-io/g2'
import {useTranslation} from 'react-i18next'
import { CertificationState } from '../../model'

export const certificationStatusToColor: Record<CertificationState, string> = {
    "VALIDATED": "#159D50",
    "REJECTED": "#750D0E",
    "SUBMITTED": "#338CC2",
    "PENDING": "#3552B0",
}

interface CertificationStatusProps {
    value: CertificationState
}

export const CertificationStatus = (props: CertificationStatusProps) => {
    const {value} = props
    const {t} = useTranslation()
  return (
     <Chip label={t("protocol.status." + value)} color={certificationStatusToColor[value]} />
  )
}
