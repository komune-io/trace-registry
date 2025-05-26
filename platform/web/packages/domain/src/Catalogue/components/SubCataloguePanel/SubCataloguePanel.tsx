import { autoFormFormatter, BackAutoFormData, CommandWithFile, FormComposable, FormComposableField, getIn, setIn, useAutoFormState } from '@komune-io/g2'
import {Paper, Stack, Typography } from '@mui/material'
import { CustomButton, TitleDivider } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import json from "./autoForm.json"
import { Catalogue } from '../../model'
import { SubCataloguePanelOptions } from './SubCataloguePanelOptions'

export interface SubCataloguePanelProps {
    catalogue?: Catalogue
    context?: "edit" | "create" | "readOnly"
    onCancel?: () => void
    onSubmit?: (command: CommandWithFile<any>, values: any) => void
    canUpdate?: boolean
}

export const SubCataloguePanel = (props: SubCataloguePanelProps) => {
    const { context: defaultContext, onCancel, onSubmit, canUpdate, catalogue } = props
    const [context, setContext] = useState<"edit" | "create" | "readOnly">(defaultContext ?? "create")

    const { t } = useTranslation()

    const formData = useMemo(() => autoFormFormatter(json as BackAutoFormData), [])

    const fields = useMemo(() => formData?.sections[0].fields.map((field): FormComposableField => {
        type FileType = typeof field.type | "select-catalogueType"

        const type = field.type as FileType
        if (type === "select-catalogueType") {
            //@ts-ignore
            return {
                ...field,
                type: "select",
                params: {
                    ...field.params,
                    options: [
                        {
                            label: "...",
                            key: "..."
                        }
                    ]
                }
            }
        }
        return field
    }), [formData])

    const initialValues = useMemo(() => {
        let initialValues: Record<string, any> = {}
        formData?.sections[0].fields.forEach((field) => {
            const value = getIn(catalogue, field.name)
            if (value) {
                initialValues = setIn(initialValues, field.name, field.defaultValue)
            }
        })
        return {
            ...initialValues,
            context
        }
    }, [context, formData, catalogue])

    const formState = useAutoFormState({
        formData,
        initialValues,
        onSubmit: onSubmit
    })

    const onCancelMemo = useCallback(
        () => {
            onCancel && onCancel()
            setContext("readOnly")
        },
        [onCancel],
    )

    const onEdit = useCallback(
        () => {
            setContext("edit")
        }, [])


    return (
        <Paper
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                p: 4
            }}
        >
            <TitleDivider
                size="h6"
                title={context === "create" ? t("catalogues.createSubCatalogue") : ""}
                actions={
                    context === "readOnly" && canUpdate ?
                        <SubCataloguePanelOptions catalogue={catalogue} onEdit={onEdit} />
                        : undefined
                }
            />
            {context === "create" && <Typography
                sx={{
                    whiteSpace: "pre-line"
                }}
            >
                {t("catalogues.createSubCatalogueDescription")}
            </Typography>}
            <FormComposable
                fields={fields}
                formState={formState}
                sx={{
                    maxWidth: "600px",
                    "& .AruiInputForm-labelContainer": {
                        minWidth: "140px"
                    }
                }}
            />
            {context !== "readOnly" && (
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap={2}
                >
                    <CustomButton
                        variant='text'
                        onClick={onCancelMemo}
                    >
                        {t("cancel")}
                    </CustomButton>
                    <CustomButton
                        onClick={formState.submitForm}
                    >
                        {t("save")}
                    </CustomButton>
                </Stack>
            )}
        </Paper>
    )
}
