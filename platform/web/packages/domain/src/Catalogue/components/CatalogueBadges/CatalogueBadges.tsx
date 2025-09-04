import { Stack } from '@mui/material'
import { TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { Catalogue } from '../../model'
import { CertificationBadge } from '../../../Protocol'

export interface CatalogueBadgesProps {
    catalogue?: Catalogue
}

export const CatalogueBadges = (props: CatalogueBadgesProps) => {
    const { catalogue } = props
    const { t } = useTranslation()
    return (
        <>
            <TitleDivider size='h3' title={t("badges")} />
            <Stack
                gap={1.25}
                alignItems="flex-start"
            >
                {catalogue?.certifications.map((certification) => (
                    <CertificationBadge key={certification.id} {...certification.badges[0]} />
                ))}
            </Stack>
        </>
    )
}
