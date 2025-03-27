import { FormComposable, FormComposableField, useFormComposable } from '@komune-io/g2'
import { TmsPopUp, SearchIcon } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Dataset } from '../../../Dataset'
import { useDatasetUpdateDistributionValueCommand, useInformationConceptListQuery } from '../../api'
import { buildRangeValue, DataUnitType, InformationConcept, parseRangeValue } from '../../model'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

interface AddIndicatorModalProps {
    open: boolean
    onClose: () => void
    dataset?: Dataset
    editIndicator?: InformationConcept
}

export const AddIndicatorModal = (props: AddIndicatorModalProps) => {
    const { open, onClose, dataset, editIndicator } = props
    const {draftId} = useParams()
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()

    const updateDistributionValue = useDatasetUpdateDistributionValueCommand({})

    const distribution = (dataset?.distributions ?? [])[0]

    const typeList = useInformationConceptListQuery({
        query: {
            language: i18n.language
        }
    }).data?.items

    const onSubmit = useCallback(
      async (values: any) => {

        const unitType = values.type.unit.type as DataUnitType
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
            informationConceptId: values.type.id,
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
        const unitType = editIndicator.unit.type
        if (unitType === "NUMBER") {
            values.numberValue = Number(editIndicator.value)
        } else if (unitType === "STRING") {
            values.stringValue = Number(editIndicator.value)
        } else {
            const [minValue, maxValue] = parseRangeValue(editIndicator.value ?? "")
            values.minValue = minValue
            values.maxValue = maxValue
        }
        values.type = editIndicator
        values.context = editIndicator.valueDescription
        return values
    }, [editIndicator])

    const formState = useFormComposable({
        onSubmit,
        formikConfig: {
            initialValues
        }
    })

    const contextualFields = useMemo(() => ({
        minValue: {
            name: "minValue",
            type: "textField",
            label: t("minValue"),
            params: {
                textFieldType: "number"
            },
            required: true
        } as FormComposableField,
        maxValue: {
            name: "maxValue",
            type: "textField",
            label: t("maxValue"),
            params: {
                textFieldType: "number"
            },
            required: true
        } as FormComposableField,
        numberValue: {
            name: "numberValue",
            type: "textField",
            label: t("value"),
            params: {
                textFieldType: "number"
            },
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
            required: true
        } as FormComposableField,
        context: {
            name: "context",
            type: "textField",
            label: t("context") + " " + t("optional")
        } as FormComposableField
    }), [t])

    const composeValuesFieldsOnType = useMemo(() => {
        const unitType = formState.values.type?.unit.type as DataUnitType
        if (!unitType) return []
        if (unitType === "NUMBER") {
            return [contextualFields.numberValue, contextualFields.context]
        } else if (unitType === "STRING") {
            return [contextualFields.stringValue]
        }
        return [contextualFields.minValue, contextualFields.maxValue, contextualFields.context]
    }, [formState.values.type])

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

