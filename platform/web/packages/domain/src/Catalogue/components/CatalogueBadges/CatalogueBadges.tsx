import {Stack} from '@mui/material'
import {TitleDivider} from 'components'
import {useTranslation} from 'react-i18next'
import {Catalogue} from '../../model'
import {BadgeCertification, CertificationBadge, CertificationBadgeModal, CertificationRef} from '../../../Protocol'
import {useMemo, useState} from 'react'

export interface CatalogueBadgesProps {
    catalogue?: Catalogue
}

export const CatalogueBadges = (props: CatalogueBadgesProps) => {
    const { catalogue } = props
    const { t } = useTranslation()
    const [selected, setSelected] = useState<{ badge: BadgeCertification, certification: CertificationRef } | undefined>(undefined)

    const badges = useMemo(() => {
        return catalogue?.certifications
            .filter(certification => certification.status == "VALIDATED")
            ?.map((certification) => certification.badges.map((badge) => (
                <CertificationBadge
                    key={badge.id}
                    onClick={() => setSelected({ badge, certification })}
                    {...badge}
                    sx={{
                        boxShadow: 1,
                    }}
                />
            )))
    }, [catalogue])

    if (!badges || badges.length === 0) {
        return null
    }

    return (
        <>
            <TitleDivider size='h3' title={t("badges")} />
            <Stack
                gap={1.25}
                alignItems="flex-start"
            >
                {badges}
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
