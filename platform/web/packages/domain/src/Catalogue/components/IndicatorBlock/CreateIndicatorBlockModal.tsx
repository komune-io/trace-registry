import { FormComposable, FormComposableField, Option, successHandler, useFormComposable } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { TmsPopUp, SearchIcon, maybeAddItem } from 'components'
import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft, CatalogueTypes } from '../../model'
import { useCatalogueReferenceDatasetsCommand, useCatalogueSearchQuery, useCatalogueUnreferenceDatasetsCommand, useDatasetAddEmptyDistributionCommand, useDatasetCreateCommand, useDatasetUpdateCommand, useEntityRefGetQuery } from '../../api'
import { keepPreviousData, useQueryClient } from '@tanstack/react-query'
import { Dataset } from '../../../Dataset'
import { useDebouncedState } from '@mantine/hooks'

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

    const [searchCatalogues, setSearchCatalogues] = useDebouncedState("", 400)

    const indicatorsDataset = useMemo(() => draft?.catalogue.datasets?.find((dataset) => dataset.type === "indicators"), [draft])

    const ref = useEntityRefGetQuery({
        query: {
            id: editDataset?.referencingCatalogueIds[0]!,
            language: i18n.language,
            type: "CATALOGUE"
        },
        options: {
            enabled: !!editDataset?.referencingCatalogueIds[0]
        }
    }).data?.item

    const solutionList = useCatalogueSearchQuery({
        query: {
            language: i18n.language,
            type: ["100m-solution"] as CatalogueTypes[],
            query: searchCatalogues!,
            limit: 20
        },
        options: {
            enabled: !!searchCatalogues,
            placeholderData: keepPreviousData
        }
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
                id: values.solution.key, 
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
    ...maybeAddItem<FormComposableField>(draft?.catalogue.type === "100m-project" as CatalogueTypes, {
        name: "solution",
        type: "autoComplete",
        label: t("catalogues.linkedSolution") + " " + t("optional"),
        params: {
            popupIcon: <SearchIcon style={{ transform: "none" }} />,
            className: "autoCompleteField",
            onInputChange: (_, value) => setSearchCatalogues(value),
            // onBlur: () => setSearchCatalogues(""),
            options: solutionList.data ? solutionList.data.items.map((solution): Option => ({
                key: solution.id,
                label: solution.title
            })) : ref ? [{
                key: ref?.id,
                label: ref?.name
            }] : undefined,
            returnFullObject: true,
            noOptionsText: !solutionList.data ? t("typeToSearch") : t("catalogues.noSolution"),
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
    })], [t, draft, setSearchCatalogues, solutionList.data?.items, ref])

    const initialValues = useMemo(() => {
        if (editDataset) {
            return {
                name: editDataset.title,
                solution: editDataset.referencingCatalogueIds[0] ? {
                    key: editDataset.referencingCatalogueIds[0],
                    label: ref?.name
                } : undefined
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

