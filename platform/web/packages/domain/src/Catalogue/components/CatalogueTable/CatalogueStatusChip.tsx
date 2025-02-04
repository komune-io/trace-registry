import { Chip } from '@komune-io/g2'
import { useTranslation } from 'react-i18next'
import { CatalogueStatus } from '../../model'

export const catalogueSatusToColor: Record<CatalogueStatus, string> = {
    "ACTIVE": "#159D50",
    "DELETED": "#750D0E",
    //@ts-ignore
    "DRAFT": "#2F2E2F"
}

interface CatalogueStatusChipProps {
    status: CatalogueStatus
}

export const CatalogueStatusChip = (props: CatalogueStatusChipProps) => {
    const {status} = props
    const {t} = useTranslation()
  return (
     <Chip label={t("catalogues.status." + status)} color={catalogueSatusToColor[status]} />
  )
}
