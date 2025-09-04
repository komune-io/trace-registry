import { AutoFormData, autoFormFormatter, FormSection, useAutoFormState } from '@komune-io/g2'
import { Divider, Stack, Typography } from '@mui/material'
import { TitleDivider, TmsPopUp } from 'components'
import { useMemo } from 'react'
// import { useTranslation } from 'react-i18next'
import { Certification, Protocol } from '../../model'
import { CertificationBadge } from '../CertificationBadge/CertificationBadge'

interface CreateIndicatorBlockModalProps {
    open: boolean
    onClose: () => void
    protocol?: Protocol
    certification?: Certification
}

export const CreateIndicatorBlockModal = (props: CreateIndicatorBlockModalProps) => {
    const { open, onClose, protocol, certification } = props
    // const { t, i18n } = useTranslation()

    const formData = useMemo(() => {
        //@ts-ignore
        const form = preformatProtocol(protocol)?.steps?.find(step => step.type === ReservedProtocolTypes.DATA_COLLECTION_STEP) as BackAutoFormData
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
    }, [protocol])

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
            title={"Mapping Finance V1"}
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
                    <TitleDivider size='h6' title='Badge' actions={<CertificationBadge name={"Finance V1"} value={85} />} />
                    <Typography
                        variant='subtitle1'
                    >
                        Afficher le badge sur mon site
                    </Typography>
                    <Typography
                        variant='body2'
                    >
                        Pour afficher le badge obtenu à la suite de l’évaluation sur votre site, copiez-coller le code suivant :
                    </Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
                {formSectionsDisplay}
            </Stack>
        </TmsPopUp>
    )
}

