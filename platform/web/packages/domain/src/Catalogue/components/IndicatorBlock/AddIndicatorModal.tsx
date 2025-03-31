import { FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { TmsPopUp, SearchIcon } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dataset } from '../../../Dataset'
import { useDatasetUpdateDistributionValueCommand, useDataUnitListQuery, useInformationConceptListQuery } from '../../api'
import { buildRangeValue, InformationConcept, InformationConceptTranslated, parseRangeValue } from '../../model'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

interface AddIndicatorModalProps {
    open: boolean
    onClose: () => void
    dataset?: Dataset
    editIndicator?: InformationConcept
}

export const AddIndicatorModal = (props: AddIndicatorModalProps) => {
    const { open, onClose, dataset, editIndicator } = props

    const { draftId } = useParams()
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()

    const updateDistributionValue = useDatasetUpdateDistributionValueCommand({})

    const units = useDataUnitListQuery({
        query: {
            language: i18n.language
        }
    }).data?.items

    const distribution = (dataset?.distributions ?? [])[0]

    const typeList = useInformationConceptListQuery({
        query: {
            language: i18n.language
        }
    }).data?.items

    const onSubmit = useCallback(
        async (values: any) => {

            const type = values.type as InformationConceptTranslated
            const selectedUnit = units?.find((unit) => unit.id === formState.values.firstUnit)
            const unitType = type.unit?.leftUnit?.type ?? selectedUnit?.type
            let value: any = undefined
            if (unitType === "NUMBER") {
                value = values.numberValue
            } else if (unitType === "STRING") {
                value = values.stringValue
            } else {
                value = buildRangeValue(values.minValue, values.maxValue)
            }
            const res = await updateDistributionValue.mutateAsync({
                distributionId: distribution?.id!,
                id: dataset?.id!,
                informationConceptId: type.id,
                isRange: values.isRange,
                unit: {
                    leftUnitId: type.unit?.leftUnit?.id ?? values.firstUnit,
                    rightUnitId: type.unit?.rightUnit?.id ?? values.secondUnit,
                    operator: "DIVISION"
                },
                value,
                description: values.context
            })
            if (res) {
                onClose()
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draftId! }] })
            }
        },
        [distribution, dataset, onClose, draftId, editIndicator],
    )

    const initialValues = useMemo(() => {
        if (!editIndicator) return undefined
        let values: any = {}
        const unitType = editIndicator.unit.leftUnit?.type
        if (editIndicator.isRange) {
            const [minValue, maxValue] = parseRangeValue(editIndicator.value ?? "")
            values.minValue = minValue
            values.maxValue = maxValue
        } else if (unitType === "NUMBER") {
            values.numberValue = Number(editIndicator.value)
        } else if (unitType === "STRING") {
            values.stringValue = Number(editIndicator.value)
        }
        values.type = editIndicator
        values.context = editIndicator.valueDescription
        values.firstUnit = editIndicator.unit.leftUnit?.id
        values.secondUnit = editIndicator.unit.rightUnit?.id
        values.isRange = editIndicator.isRange
        return values
    }, [editIndicator])

    const formState = useFormComposable({
        onSubmit,
        formikConfig: {
            initialValues
        }
    })

    const contextualFields = useMemo(() => ({
        firstUnit: {
            name: "firstUnit",
            type: "select",
            label: t("unit"),
            params: {
                options: units?.map((unit) => ({
                    label: unit.name,
                    value: unit.id
                })),
            },
            customDisplay: (input) => (
                <Stack
                    direction="row"
                    gap={4}
                >
                    {input}
                    <Typography
                        variant='h1'
                        fontWeight={300}
                        sx={{
                            mt: 2
                        }}
                    >
                        /
                    </Typography>
                </Stack>
            ),
            required: true
        } as FormComposableField,
        secondUnit: {
            name: "secondUnit",
            type: "select",
            label: t("unit") + " " + t("optional"),
            params: {
                options: units?.map((unit) => ({
                    label: unit.name,
                    value: unit.id
                }))
            }
        } as FormComposableField,
        isRange: {
            name: "isRange",
            type: "checkBox",
            label: t("catalogues.defineValueRange"),
            params: {
                style: {
                    marginTop: -16
                }
            }
        } as FormComposableField,
        minValue: {
            name: "minValue",
            type: "textField",
            label: t("minValue"),
            params: {
                textFieldType: "number"
            },
            fullRow: true,
            required: true
        } as FormComposableField,
        maxValue: {
            name: "maxValue",
            type: "textField",
            label: t("maxValue"),
            params: {
                textFieldType: "number"
            },
            fullRow: true,
            required: true
        } as FormComposableField,
        numberValue: {
            name: "numberValue",
            type: "textField",
            label: t("value"),
            params: {
                textFieldType: "number"
            },
            fullRow: true,
            required: true
        } as FormComposableField,
        stringValue: {
            name: "stringValue",
            type: "textField",
            label: t("value"),
            params: {
                multiline: true,
                rows: 3
            },
            fullRow: true,
            required: true
        } as FormComposableField,
        context: {
            name: "context",
            type: "textField",
            label: t("context") + " " + t("optional"),
            fullRow: true
        } as FormComposableField
    }), [t, units])

    const composeValuesFieldsOnType = useMemo(() => {
        const type: InformationConceptTranslated | undefined = formState.values.type
        if (!type) return []
        if (type.unit?.leftUnit) {
            if (type.unit?.leftUnit.type === "STRING") {
                return [contextualFields.stringValue]
            } else if (type.unit?.leftUnit.type === "NUMBER") {
                return [contextualFields.numberValue, contextualFields.context]
            }
        }
        let unitFields = [contextualFields.firstUnit, contextualFields.secondUnit, contextualFields.isRange]
        const selectedUnit = units?.find((unit) => unit.id === formState.values.firstUnit)
        if (formState.values.isRange) {
            unitFields.push(contextualFields.minValue, contextualFields.maxValue, contextualFields.context)
        } else if (selectedUnit?.type === "STRING") {
            unitFields.push(contextualFields.stringValue)
        } else if (selectedUnit?.type === "NUMBER") {
            unitFields.push(contextualFields.numberValue, contextualFields.context)
        }
        return unitFields
    }, [contextualFields, units, formState.values.type, formState.values.firstUnit, formState.values.isRange])

    const fields = useMemo((): FormComposableField[] => [{
        name: "type",
        type: "autoComplete",
        label: t("type"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            options: typeList,
            noOptionsText: t("catalogues.noType"),
            getOptionLabel: (option: any) => option.name,
            getOptionKey: (option: any) => option.id,
            returnFullObject: true,
            disabled: !!editIndicator
        },
        fullRow: true,
        required: true
    },
    ...composeValuesFieldsOnType
    ], [t, composeValuesFieldsOnType, typeList, editIndicator])


    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={editIndicator ? t("catalogues.editIndicator") : t("catalogues.addIndicator")}
            onSave={formState.submitForm}
            onCancel={onClose}
            sx={{
                width: 1000
            }}
        >
            <FormComposable
                fields={fields}
                formState={formState}
                display='grid'
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

