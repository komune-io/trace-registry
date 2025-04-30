import { FormComposable, FormComposableField, successHandler, useFormComposable } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { TmsPopUp, maybeAddItem} from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCatalogueReferenceDatasetsCommand, useAutoCompleteCatalogue, useCatalogueRefGetQuery, useCatalogueUnreferenceDatasetsCommand, useDatasetAddEmptyDistributionCommand, useDatasetCreateCommand, useDatasetUpdateCommand, CatalogueDraft, CatalogueTypes, Dataset } from 'domain-components'
import { useQueryClient } from '@tanstack/react-query'

interface CreateIndicatorBlockModalProps {
    open: boolean
    onClose: () => void
    draft?: CatalogueDraft
    editDataset?: Dataset
}

export const CreateIndicatorBlockModal = (props: CreateIndicatorBlockModalProps) => {
    const { open, onClose, draft, editDataset } = props
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()

    const indicatorsDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "indicators"), [draft])

    const ref = useCatalogueRefGetQuery({
        query: {
            id: editDataset?.referencingCatalogueIds[0]!,
            language: i18n.language
        },
        options: {
            enabled: !!editDataset?.referencingCatalogueIds[0]
        }
    }).data?.item

    const catalogueAutoComplete = useAutoCompleteCatalogue({
    })


    const addEmptyDistribution = useDatasetAddEmptyDistributionCommand({})

    const createDataset = useDatasetCreateCommand({})

    const updateDataset = useDatasetUpdateCommand({})

    const referenceDataset = useCatalogueReferenceDatasetsCommand({})

    const unreferenceDataset = useCatalogueUnreferenceDatasetsCommand({})

    const onSubmit = useCallback(
        async (values: any) => {
            const res = editDataset ? await updateDataset.mutateAsync({
                title: values.name,
                id: editDataset.id
            }) : await createDataset.mutateAsync({
                language: i18n.language,
                type: "indicator",
                title: values.name,
                parentId: indicatorsDataset?.id
            })

            if (res) {
                const addDistribRes = editDataset ? true : await addEmptyDistribution.mutateAsync({
                    id: res.id
                })
                const unrefRes = editDataset?.referencingCatalogueIds[0] ? await unreferenceDataset.mutateAsync({
                    id: editDataset.referencingCatalogueIds[0],
                    datasetIds: [editDataset.id]
                }) : true

                const refRes = values.solution ? await referenceDataset.mutateAsync({
                    id: values.solution.id,
                    datasetIds: [res.id]
                }) : true

                if (addDistribRes && unrefRes && refRes) {
                    !editDataset ? successHandler("indicatorBlockCreated") : successHandler("indicatorBlockUpdated")
                    queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft?.id! }] })
                    onClose()
                }
            }
        },
        [i18n.language, indicatorsDataset, draft, unreferenceDataset],
    )


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
    ...maybeAddItem<FormComposableField>(draft?.catalogue.type === "100m-project" as CatalogueTypes,
        catalogueAutoComplete.getComposableField({
            name: "solution",
            label: t("catalogues.linkedSolution"),
            params: {
                multiple: false,
            },
            customDisplay: (input: React.ReactNode) => (
                <Stack gap={4}>
                    <Typography>{t("catalogues.indicatorSolutionDetails")}</Typography>
                    {input}
                </Stack>
            ),
        }, {
            type: ["100m-solution"],
        })
    )
    ], [t, draft, catalogueAutoComplete.getComposableField, ref])

    const initialValues = useMemo(() => {
        if (editDataset) {
            return {
                name: editDataset.title,
                solution: ref
            }
        }
        return {}
    }, [editDataset, ref])

    const formState = useFormComposable({
        onSubmit,
        formikConfig: {
            initialValues
        }
    })

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={editDataset ? t("catalogues.editIndicatorBlock") : t("catalogues.createIndicatorBlock")}
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

