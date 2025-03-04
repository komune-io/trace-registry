import { FormComposableState } from '@komune-io/g2'
import { useQueryClient } from '@tanstack/react-query'
import { CatalogueDraft, Dataset, RawGraphState, useDatasetAddJsonDistributionCommand, useDatasetAddMediaDistributionCommand, useDatasetCreateCommand } from 'domain-components'
import { useCallback } from 'react'

interface useSaveGraphParams {
    graphFormState: FormComposableState
    graphDataset?: Dataset
    draft?: CatalogueDraft
    onClose: () => void
}

export const useSaveGraph = (params: useSaveGraphParams) => {
    const {draft, graphDataset, graphFormState, onClose} = params

    const queryClient = useQueryClient()

    const createDataset = useDatasetCreateCommand({})

    const addMediaDistribution = useDatasetAddMediaDistributionCommand({})

    const addJsonDistribution = useDatasetAddJsonDistributionCommand({})

    const onSaveChart = useCallback(
        async (graphSvg: Blob, state: RawGraphState) => {
            const errors = graphFormState.validateForm()
            if (Object.keys(errors).length > 0) return
            if (!draft || !graphDataset) return
            const createRes = await createDataset.mutateAsync({
                title: graphFormState.values.title,
                language: draft.language,
                type: "rawGraph",
                parentId: graphDataset.id
            })

            if (createRes) {
                await addJsonDistribution.mutateAsync({
                    id: createRes.id,
                    jsonContent: JSON.stringify({
                        ...state,
                        csvDistributionId: graphFormState.values.distributionId
                    }),
                })
                const file = new File([graphSvg], graphFormState.values.title + ".svg", { type: "image/svg+xml", lastModified: new Date().getTime() });
                await addMediaDistribution.mutateAsync({
                    command: {
                        id: createRes.id,
                        mediaType: "image/svg+xml",
                    },
                    files: [{
                        file
                    }]
                })
                queryClient.invalidateQueries({ queryKey: ["data/catalogueDraftGet", { id: draft.id! }] })
                onClose()
            }
        },
        [graphFormState.values, draft, graphDataset, onClose],
    )
    return {
        onSaveChart
    }
}
