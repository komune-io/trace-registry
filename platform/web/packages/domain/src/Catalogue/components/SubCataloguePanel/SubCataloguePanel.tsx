import { autoFormFormatter, BackAutoFormData, CommandWithFile, FormComposable, FormComposableField, getIn, setIn, useAutoFormState } from '@komune-io/g2'
import { Paper, Stack, Typography } from '@mui/material'
import { Accordion, CustomButton, TitleDivider } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import json from "./autoForm.json"
import { Catalogue, CatalogueRef } from '../../model'
import { SubCataloguePanelOptions } from './SubCataloguePanelOptions'
import { useCatalogueListAllowedTypesQuery } from '../../api'
import { CatalogueTable } from '../CatalogueTable'
import { PageQueryResult } from 'template'

export interface SubCataloguePanelProps {
    catalogue?: Catalogue
    context?: "edition" | "creation" | "readOnly"
    onCancel?: () => void
    onSubmit?: (command: CommandWithFile<any>, values: any) => void
    canUpdate?: boolean
}

export const SubCataloguePanel = (props: SubCataloguePanelProps) => {
    const { context: defaultContext, onCancel, onSubmit, canUpdate, catalogue } = props
    const [context, setContext] = useState<"edition" | "creation" | "readOnly">(defaultContext ?? "creation")

    const allowedCreationTypes = useCatalogueListAllowedTypesQuery({
        query: {

        }
    }).data?.items

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
                    options: allowedCreationTypes?.map((type) => ({
                        key: type,
                        label: type
                    }))
                }
            }
        }
        return field
    }), [formData, allowedCreationTypes])

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
            setContext("edition")
        }, [])

    const data = useMemo((): PageQueryResult<CatalogueRef> => {
        const items = Object.values(catalogue?.relatedCatalogues ?? {}).flatMap((related) => related)
        return {
            items,
            total: items.length,
        }
    }, [catalogue])


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
                title={context === "creation" ? t("catalogues.createSubCatalogue") : ""}
                actions={
                    context === "readOnly" && canUpdate ?
                        <SubCataloguePanelOptions catalogue={catalogue} onEdit={onEdit} />
                        : undefined
                }
            />
            {context === "creation" && <Typography
                sx={{
                    whiteSpace: "pre-line"
                }}
            >
                {t("catalogues.createSubCatalogueDescription")}
            </Typography>}
            <FormComposable
                fields={fields}
                formState={formState}
                display='grid'
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
            {context === "readOnly" && (
                <Accordion
                    summary={<Typography variant="h6" >{t("catalogueList")}</Typography>}
                >
                    <CatalogueTable
                        page={data}
                        isRef
                    />
                </Accordion>
            )}
        </Paper>
    )
}
