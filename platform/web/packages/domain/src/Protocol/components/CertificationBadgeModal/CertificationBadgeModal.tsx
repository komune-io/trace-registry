import { AutoFormData, autoFormFormatter, CodeHighlighter, FormSection, useAutoFormState } from '@komune-io/g2'
import { Divider, Stack, Typography } from '@mui/material'
import { TitleDivider, TmsPopUp } from 'components'
import { useMemo } from 'react'
// import { useTranslation } from 'react-i18next'
import { BadgeCertification } from '../../model'
import { CertificationBadge } from '../CertificationBadge/CertificationBadge'
import { t } from 'i18next'
import { useCertificationGetQuery } from '../../api'

interface CertificationBadgeModalProps {
    open: boolean
    onClose: () => void
    certificationId?: string
    badge?: BadgeCertification
}

export const CertificationBadgeModal = (props: CertificationBadgeModalProps) => {
    const { open, onClose, certificationId, badge } = props

    // const { t, i18n } = useTranslation()

    const certificationQuery = useCertificationGetQuery({
        query: {
            id: certificationId!,
        }
    })

    const certification = certificationQuery.data?.item

    const formData = useMemo(() => {
        //@ts-ignore
        const form = preformatProtocol(certification?.protocol)?.steps?.find(step => step.type === ReservedProtocolTypes.DATA_COLLECTION_STEP) as BackAutoFormData
        if (!form) return undefined
        const formatted = autoFormFormatter(form)
        return {
            ...formatted,
            sections: formatted.sections.map(section => ({
                ...section,
                fields: section.fields.map(field => ({
                    ...field,
                    params: {
                        ...field.params,
                        description: undefined,
                        caption: undefined,
                    }
                }))
            }))
        } as AutoFormData
    }, [certification])

    const formState = useAutoFormState({
        initialValues: certification?.values,
        readOnly: true,
        formData: formData
    })


    const formSectionsDisplay = useMemo(() => {
        return formData?.sections.map((section) => {
            return (
                <FormSection
                    key={section.id}
                    section={section}
                    formState={formState}
                    sectionsType="default"
                />
            )
        })
    }, [formData, formState])

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={badge?.name}
            sx={{
                width: 1000
            }}
        >
            <Stack
                gap={2.5}
                direction="row"
            >
                <Stack
                    gap={3}
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
                    <CodeHighlighter code={`<iframe src="https://komune.io/certification/badge/12345" width="200" height="200" style="border:none;"></iframe>`} language='html' />
                </Stack>
                <Divider orientation="vertical" flexItem />
                {formSectionsDisplay}
            </Stack>
        </TmsPopUp>
    )
}

