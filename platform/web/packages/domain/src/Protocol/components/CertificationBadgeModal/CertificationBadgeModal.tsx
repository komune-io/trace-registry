import {AutoForm, AutoFormData, autoFormFormatter, CodeHighlighter} from '@komune-io/g2'
import {Divider, Stack, Typography} from '@mui/material'
import {TitleDivider, TmsPopUp, useRoutesDefinition} from 'components'
import {useMemo} from 'react'
// import { useTranslation } from 'react-i18next'
import {BadgeCertification, ReservedProtocolTypes} from '../../model'
import {CertificationBadge} from '../CertificationBadge/CertificationBadge'
import {t} from 'i18next'
import {useCertificationGetQuery} from '../../api'

interface CertificationBadgeModalProps {
    open: boolean
    onClose: () => void
    certificationId?: string
    badge?: BadgeCertification
}

export const CertificationBadgeModal = (props: CertificationBadgeModalProps) => {
    const { open, onClose, certificationId, badge } = props
    const { embedBadgesBadgeCertificationId } = useRoutesDefinition()

    // const { t, i18n } = useTranslation()

    const certificationQuery = useCertificationGetQuery({
        query: {
            id: certificationId!,
        },
        options: {
            enabled: open && !!certificationId,
        }
    })

    const certification = certificationQuery.data?.item

    const formData = useMemo(() => {
        //@ts-ignore
        const form = certification?.protocol?.steps?.find(step => step.type === ReservedProtocolTypes.DATA_COLLECTION_STEP) as BackAutoFormData
        if (!form) return undefined
        const formatted = autoFormFormatter(form)
        return {
            ...formatted,
            sections: formatted.sections.map(section => ({
                ...section,
                description: undefined,
                fields: section.fields.map(field => ({
                    ...field,
                    params: {
                        ...field.params,
                        description: undefined,
                        caption: undefined,
                    }
                }))
            })),
            sectionsType: "divided",
        } as AutoFormData
    }, [certification])

    const embedCode = useMemo(() => {
        return `<iframe \n src="${window.location.origin}${embedBadgesBadgeCertificationId(badge?.id!)}" \n width="200" \n height="36" \n style="border:none;">\n</iframe>`
    }, [badge])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={badge?.name}
            sx={{
                width: 1200,
            }}
        >
            <Stack
                gap={2.5}
                direction="row"
            >
                <Stack
                    gap={3}
                    sx={{
                        maxWidth: "60%",
                    }}
                >
                    <TitleDivider size='h6' title={t('badge')} actions={badge ? <CertificationBadge {...badge} /> : undefined} />
                    <Typography
                        variant='subtitle1'
                    >
                        {t('protocol.showBadge')}
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        {t('protocol.showBadgeDetails')}
                    </Typography>
                    <CodeHighlighter code={embedCode} copiable language='html' />
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack
                    gap={5}
                >
                    <AutoForm
                        formData={formData}
                        initialValues={certification?.values}
                        readOnly
                        downloadDocument={() => Promise.resolve("")} // TODO: implement document download
                    />
                </Stack>
            </Stack>
        </TmsPopUp>
    )
}
