import { FormComposable, FormComposableField, Option, useFormComposable } from '@komune-io/g2'
import { Stack, Typography } from '@mui/material'
import { TmsPopUp, SearchIcon, maybeAddItem } from 'components'
import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CatalogueDraft, CatalogueTypes } from '../../model'
import { useCatalogueReferenceDatasetsCommand, useCatalogueSearchQuery, useDatasetAddEmptyDistributionCommand, useDatasetCreateCommand } from '../../api'
import { keepPreviousData, useQueryClient } from '@tanstack/react-query'

interface CreateIndicatorBlockModalProps {
    open: boolean
    onClose: () => void
    draft?: CatalogueDraft
}

export const CreateIndicatorBlockModal = (props: CreateIndicatorBlockModalProps) => {
    const { open, onClose, draft } = props
    const { t, i18n } = useTranslation()
    const queryClient = useQueryClient()

    const [searchCatalogues, setSearchCatalogues] = useState("")

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

    const referenceDataset = useCatalogueReferenceDatasetsCommand({})

    const onSubmit = useCallback(
      async (values: any) => {
        const res = await createDataset.mutateAsync({
            language: i18n.language,
            type: "indicator",
            title: values.name,
            catalogueId: draft?.catalogue.id
        })

        if (res) {
            const addDistribRes = await addEmptyDistribution.mutateAsync({
                id: res.id
            })
            const refRes = await referenceDataset.mutateAsync({
                id: values.solution.id, 
                datasetIds: [res.id]
            })
            if (addDistribRes && refRes) {
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft?.id! }] })
                onClose()
            } 
        }
      },
      [i18n.language, draft],
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
            onBlur: () => setSearchCatalogues(""),
            options: solutionList.data?.items.map((solution): Option => ({
                key: solution.id,
                label: solution.title
            })),
            returnFullObject: true,
            noOptionsText: t("catalogues.noSolution")
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
    })], [t, draft, solutionList.data?.items])

    const formState = useFormComposable({
        onSubmit
    })

    return (
        <TmsPopUp
            open={open}
            onClose={onClose}
            title={t("catalogues.createIndicatorBlock")}
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

