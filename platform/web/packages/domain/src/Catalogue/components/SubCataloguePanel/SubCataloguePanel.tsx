import { autoFormFormatter, BackAutoFormData, CommandWithFile, FormComposable, FormComposableField, useAutoFormState } from '@komune-io/g2'
import { EditRounded, MoreVert } from '@mui/icons-material'
import { IconButton, Paper, Stack, Typography } from '@mui/material'
import { CustomButton, IconPack, TitleDivider, TMSMenuItem, useButtonMenu } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import json from "./autoForm.json"

export interface SubCataloguePanelProps {
    context?: "edit" | "create" | "readOnly"
    onCancel?: () => void
    onSubmit?: (command: CommandWithFile<any>, values: any) => void
    canUpdate?: boolean
}

export const SubCataloguePanel = (props: SubCataloguePanelProps) => {
    const { context: defaultContext, onCancel, onSubmit, canUpdate } = props
    const [context, setContext] = useState<"edit" | "create" | "readOnly">(defaultContext ?? "create")

    const { t } = useTranslation()

    const options = useMemo((): TMSMenuItem[] => [{
        key: "edit",
        label: t("edit"),
        icon: <EditRounded />,
        onClick: () => setContext("edit")
    }, {
        key: "delete",
        label: t("delete"),
        icon: <IconPack.trash />,
        color: "#B01717",
        onClick: () => { }
    }], [t])

    const { buttonProps, menu } = useButtonMenu({
        items: options
    })

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
        return {
            context
        }
    }, [context])

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
                        <>
                            <IconButton
                                {...buttonProps}
                            >
                                <MoreVert />
                            </IconButton>
                            {menu}
                        </>
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
