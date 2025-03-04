import { FormComposableState } from '@komune-io/g2'
import { useQueryClient } from '@tanstack/react-query'
import { CatalogueDraft, Dataset, RawGraphState, useDatasetCreateCommand, useDatasetUpdateJsonDistributionCommand, useDatasetUpdateMediaDistributionCommand } from 'domain-components'
import { useCallback, useMemo } from 'react'

interface useEditGraphParams {
    graphFormState: FormComposableState
    graphDataset?: Dataset
    draft?: CatalogueDraft
    onClose: () => void
    dataset?: Dataset
}

export const useEditGraph = (params: useEditGraphParams) => {
    const {draft, graphDataset, graphFormState, onClose, dataset} = params

    const queryClient = useQueryClient()

    const createDataset = useDatasetCreateCommand({})

    const updateMediaDistribution = useDatasetUpdateMediaDistributionCommand({})

    const updateJsonDistribution = useDatasetUpdateJsonDistributionCommand({})

    const jsonDistribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "application/json"), [dataset])
    const mediaDistribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "image/svg+xml"), [dataset])

    const onUpdateChart = useCallback(
        async (graphSvg: Blob, state: RawGraphState) => {
            const errors = graphFormState.validateForm()
            if (Object.keys(errors).length > 0) return
            if (!draft || !graphDataset) return
            const updateRes = await createDataset.mutateAsync({
                title: graphFormState.values.title,
                language: draft.language,
                type: "rawGraph",
                parentId: graphDataset.id
            })

            if (updateRes) {
                await updateJsonDistribution.mutateAsync({
                    id: updateRes.id,
                    distributionId: jsonDistribution?.id!,
                    jsonContent: JSON.stringify({
                        ...state,
                        csvDistributionId: graphFormState.values.distributionId
                    }),
                })
                const file = new File([graphSvg], graphFormState.values.title + ".svg", { type: "image/svg+xml", lastModified: new Date().getTime() });
                await updateMediaDistribution.mutateAsync({
                    command: {
                        id: updateRes.id,
                        distributionId: mediaDistribution?.id!,
                        mediaType: "image/svg+xml"
                    },
                    files: [{
                        file
                    }]
                })
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft.id! }] })
                onClose()
            }
        },
        [graphFormState.values, draft, graphDataset, onClose, jsonDistribution, mediaDistribution],
    )
    return {
        onUpdateChart
    }
}
