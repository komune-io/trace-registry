import {AutoFormData, CommandWithFile, FormComposable, FormComposableField, getIn, Option, setIn, useAutoFormState} from '@komune-io/g2'
import {Paper, Stack, Typography} from '@mui/material'
import {CustomButton, TitleDivider} from 'components'
import {useCallback, useMemo, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {SubCataloguePanelOptions} from './SubCataloguePanelOptions'
import {SubCatalogueLinkedTable} from './SubCatalogueLinkedTable'
import {Catalogue, CatalogueFormContext, CatalogueRef, useCatalogueFormContext, useCatalogueGetBlueprintsQuery} from '../../../Catalogue'
import {useBadgePageQuery} from "../../../Protocol";

export interface SubCataloguePanelProps {
    formData?: AutoFormData
    catalogue?: Catalogue
    context?: CatalogueFormContext
    onCancel?: () => void
    onSubmit?: (command: CommandWithFile<any>, values: any) => Promise<boolean>
    canUpdate?: boolean
    tab?: CatalogueRef
    refetch: () => void
}

export const SubCataloguePanel = (props: SubCataloguePanelProps) => {
    const { context: defaultContext, onCancel, onSubmit, canUpdate, catalogue, formData, tab, refetch } = props
    const [context, setContext] = useState<CatalogueFormContext>(defaultContext ?? "creation")
    const { t, i18n } = useTranslation()

    const [contextualFilters, setContextualFilters] = useState<Record<string, any>>({})

    const allowedTypes = useCatalogueGetBlueprintsQuery({
        query: {
            language: i18n.language
        }
    }).data?.item?.types

    const badgePageQuery = useBadgePageQuery({
        query: {
            ...contextualFilters["select-badge"]
        },
        options: {
            enabled: !!contextualFilters["select-badge"]
        }
    })

    const fields = useMemo(() => formData?.sections[0].fields.map((field): FormComposableField => {
        type FileType = typeof field.type | "select-catalogueType" | "select-badge"
        const type = field.type as FileType

        //@ts-ignore
        const filters = field.params?.filters ? JSON.parse(field.params.filters) : undefined

        if (type === "select-catalogueType") {
            const aimedType = allowedTypes ? allowedTypes[filters?.catalogueType] : undefined
            const relation = aimedType?.relatedTypes ? aimedType.relatedTypes[filters?.relationType] : []
            //@ts-ignore
            return {
                ...field,
                type: "select",
                params: {
                    ...field.params,
                    options: relation.map((relation) => {
                        const type = allowedTypes ? allowedTypes[relation] : undefined
                        if (!type) return undefined
                        return {
                            key: type.identifier,
                            label: type.name
                        }
                    }).filter(Boolean) as Option[]
                }
            }
        }
        if (type === "select-badge") {
            if (!contextualFilters["select-badge"] && filters) {
                setContextualFilters((prev) => ({
                    ...prev,
                    "select-badge": filters
                }))
            }
            //@ts-ignore
            return {
                ...field,
                type: "select",
                params: {
                    ...field.params,
                    options: badgePageQuery.data?.items.map((badge) => ({
                        key: badge.id,
                        label: badge.name,
                    }))
                }
            }
        }
        return field
    }) ?? [], [formData, allowedTypes, badgePageQuery.data?.items, contextualFilters])

    const formAdditionalContext = useCatalogueFormContext({ context, catalogue })

    const initialValues = useMemo(() => {
        let initialValues: Record<string, any> = {}
        formData?.sections[0].fields.forEach((field) => {
            const value = getIn(catalogue, field.name)
            if (value) {
                initialValues = setIn(initialValues, field.name, value)
            }
        })
        return {
            ...initialValues,
            ...formAdditionalContext,
            id: catalogue?.id
        }
    }, [context, formData, catalogue, formAdditionalContext])

    const onSubmitMemo = useCallback(
        async (command: CommandWithFile<any>, values: any) => {
            if (onSubmit) {
                const res = await onSubmit(command, values)
                if (res) {
                    setContext("readOnly")
                }
            }
        },
        [onSubmit],
    )

    const formState = useAutoFormState({
        formData,
        initialValues,
        onSubmit: onSubmitMemo,
        readOnly: context === "readOnly",
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
                title={context === "creation" ? t("catalogues.createSubCatalogue") : catalogue?.title!}
                actions={
                    context === "readOnly" && canUpdate ?
                        <SubCataloguePanelOptions catalogue={catalogue} onEdit={onEdit} refetch={refetch} />
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
                <SubCatalogueLinkedTable
                    catalogue={catalogue}
                    tab={tab}
                    canUpdate={canUpdate}
                />
            )}
        </Paper>
    )
}
