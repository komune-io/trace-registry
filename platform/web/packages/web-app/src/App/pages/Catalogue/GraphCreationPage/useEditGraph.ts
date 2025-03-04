import { FormComposableState } from '@komune-io/g2'
import { useQueryClient } from '@tanstack/react-query'
import { CatalogueDraft, Dataset, RawGraphState, useDatasetUpdateCommand, useDatasetUpdateJsonDistributionCommand, useDatasetUpdateMediaDistributionCommand } from 'domain-components'
import { useCallback, useMemo } from 'react'

interface useEditGraphParams {
    graphFormState: FormComposableState
    draft?: CatalogueDraft
    onClose: () => void
    dataset?: Dataset
}

export const useEditGraph = (params: useEditGraphParams) => {
    const {draft, graphFormState, onClose, dataset} = params

    const queryClient = useQueryClient()

    const updateDataset = useDatasetUpdateCommand({})

    const updateMediaDistribution = useDatasetUpdateMediaDistributionCommand({})

    const updateJsonDistribution = useDatasetUpdateJsonDistributionCommand({})

    const jsonDistribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "application/json"), [dataset])
    const mediaDistribution = useMemo(() => dataset?.distributions?.find((dist) => dist.mediaType === "image/svg+xml"), [dataset])

    const onUpdateChart = useCallback(
        async (graphSvg: Blob, state: RawGraphState) => {
            const errors = graphFormState.validateForm()
            if (Object.keys(errors).length > 0) return
            if (!draft) return
            const updateRes = await updateDataset.mutateAsync({
                title: graphFormState.values.title,
                id: dataset?.id!,
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
                queryClient.invalidateQueries({ queryKey: ["data/datasetDownloadDistribution", { id: updateRes.id, distributionId: jsonDistribution?.id! }] })
                onClose()
            }
        },
        [graphFormState.values, draft, onClose, jsonDistribution, mediaDistribution, dataset],
    )

    return {
        onUpdateChart
    }
}
