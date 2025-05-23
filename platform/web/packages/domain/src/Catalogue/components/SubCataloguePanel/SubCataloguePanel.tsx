import { autoFormFormatter, BackAutoFormData, FormComposable, FormComposableField, useAutoFormState } from '@komune-io/g2'
import { EditRounded, MoreVert } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { IconPack, TitleDivider, TMSMenuItem, useButtonMenu } from 'components'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import json from "./autoForm.json"

export interface SubCataloguePanelProps {
    context?: "edit" | "create" | "readOnly"
}

export const SubCataloguePanel = (props: SubCataloguePanelProps) => {
    const { context: defaultContext } = props
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
        initialValues
    })

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
                title='Créer un sous catalogue'
                actions={
                    context === "readOnly" ?
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
            <FormComposable fields={fields} formState={formState}/>
        </Paper>
    )
}
