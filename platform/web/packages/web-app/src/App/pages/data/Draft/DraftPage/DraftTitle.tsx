import { FormComposableState } from '@komune-io/g2'
import { useDebouncedCallback } from '@mantine/hooks'
import { Typography } from '@mui/material'
import { TitleDivider } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export interface DraftTitleProps {
    title: string
    canUdateDraft: boolean
    isDefLoading: boolean
    validateMetadata: () => Promise<boolean>
    metadataFormState: FormComposableState
    actions?: React.ReactNode
}

export const DraftTitle = (props: DraftTitleProps) => {
    const { title, canUdateDraft, isDefLoading, validateMetadata, metadataFormState, actions } = props
    const { t } = useTranslation()

    const validateAndSubmitMetadata = useDebouncedCallback(async () => {
        const isValid = await validateMetadata()
        if (isValid) metadataFormState.submitForm()
    }, 500)

    const onChangeTitle = useCallback(
        (title: string) => {
            metadataFormState.setFieldValue("title", title)
            validateAndSubmitMetadata()
        },
        [metadataFormState.setFieldValue, validateAndSubmitMetadata],
    )

    return (
        <>
            {!metadataFormState.values.title && !isDefLoading && canUdateDraft && <Typography
                variant='body2'
                color="error"
            >
                {t("catalogues.titleRequired")}
            </Typography>
            }
            <TitleDivider title={title} onChange={canUdateDraft ? onChangeTitle : undefined} actions={actions} />
        </>
    )
}
