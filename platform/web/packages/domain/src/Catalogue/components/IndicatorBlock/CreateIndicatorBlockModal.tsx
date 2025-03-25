import { FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { TmsPopUp, SearchIcon, maybeAddItem } from 'components'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft, CatalogueTypes } from '../../model'

interface CreateIndicatorBlockModalProps {
    open: boolean
    onClose: () => void
    draft?: CatalogueDraft
}

export const CreateIndicatorBlockModal = (props: CreateIndicatorBlockModalProps) => {
    const { open, onClose, draft } = props
    const { t } = useTranslation()

    const fields = useMemo((): FormComposableField[] => [{
        name: "name",
        type: "textField",
        label: t("name") + " " + t("optional"),
        customDisplay: (input) => (
            <Stack
                gap={4}
            >
                <Typography>
                    {t("catalogues.indicatorNameDetails")}
                </Typography>
                {input}
            </Stack>
        )
    },
    ...maybeAddItem<FormComposableField>(draft?.catalogue.type === "100m-project" as CatalogueTypes, {
        name: "solution",
        type: "autoComplete",
        label: t("catalogues.linkedSolution") + " " + t("optional"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: [],
            noOptionsText: t("catalogues.noSolution"),
            optionsResultLimit: 50
        },
        customDisplay: (input) => (
            <Stack
                gap={4}
            >
                <Typography>
                    {t("catalogues.indicatorSolutionDetails")}
                </Typography>
                {input}
            </Stack>
        )
    })], [t, draft])

    const formState = useFormComposable({
        onSubmit: () => onClose()
    })

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("catalogues.createIndicatorBlock")}
            onSave={formState.submitForm}
            onCancel={onClose}
        >
            <FormComposable
                fields={fields}
                formState={formState}
                fieldsStackProps={{
                    sx: {
                        gap: 4,
                        "& .autoCompleteField .MuiAutocomplete-popupIndicator": {
                            transform: "none !important"
                        }
                    }
                }}
            />
            
        </TmsPopUp>
    )
}

