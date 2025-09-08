import { Stack } from '@mui/material'
import { TitleDivider } from 'components'
import { useTranslation } from 'react-i18next'
import { Catalogue } from '../../model'
import { BadgeCertification, CertificationBadge, CertificationBadgeModal, CertificationRef } from '../../../Protocol'
import { useState } from 'react'

export interface CatalogueBadgesProps {
    catalogue?: Catalogue
}

export const CatalogueBadges = (props: CatalogueBadgesProps) => {
    const { catalogue } = props
    const { t } = useTranslation()
    const [selected, setSelected] = useState<{ badge: BadgeCertification, certification: CertificationRef } | undefined>(undefined)

    return (
        <>
            <TitleDivider size='h3' title={t("badges")} />
            <Stack
                gap={1.25}
                alignItems="flex-start"
            >
                {catalogue?.certifications.map((certification) => certification.badges.map((badge) => (
                    <CertificationBadge
                        key={badge.id}
                        onClick={() => setSelected({ badge, certification })}
                        {...badge}
                        sx={{
                            boxShadow: 1,
                        }}
                    />
                )))}
            </Stack>
            <CertificationBadgeModal
                open={!!selected}
                onClose={() => setSelected(undefined)}
                certificationId={selected?.certification.id}
                badge={selected?.badge}

            />
        </>
    )
}
