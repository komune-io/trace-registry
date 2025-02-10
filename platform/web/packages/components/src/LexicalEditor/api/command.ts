import { io } from "registry-platform-api-api-js-export";
import { useCommandWithFileRequest, CommandParams, CommandWithFile, useNoAuthenticatedRequest } from "@komune-io/g2"

export interface DatasetAddMediaDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTO { }
export interface DatasetAddedMediaDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTO { }

export const useDatasetAddMediaDistributionCommand = (
    params: CommandParams<CommandWithFile<DatasetAddMediaDistributionCommand>, DatasetAddedMediaDistributionEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandWithFileRequest<
        DatasetAddMediaDistributionCommand,
        DatasetAddedMediaDistributionEvent
    >('data/datasetAddMediaDistribution', requestProps, params)
}