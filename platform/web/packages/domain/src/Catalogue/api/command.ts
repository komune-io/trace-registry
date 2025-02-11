import { io } from "registry-platform-api-api-js-export";
import { useCommandWithFileRequest, CommandParams, CommandWithFile, useNoAuthenticatedRequest, useCommandRequest } from "@komune-io/g2"

export interface CatalogueCreateCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTO { }
export interface CatalogueCreatedEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTO { }

export const useCatalogueCreateCommand = (
    params: CommandParams<CommandWithFile<CatalogueCreateCommand>, CatalogueCreatedEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandWithFileRequest<
        CatalogueCreateCommand,
        CatalogueCreatedEvent
    >('data/catalogueCreate', requestProps, params)
}


export interface CatalogueUpdateCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTO { }
export interface CatalogueUpdatedEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueUpdatedEventDTO { }

export const useCatalogueUpdateCommand = (
    params: CommandParams<CommandWithFile<CatalogueUpdateCommand>, CatalogueUpdatedEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandWithFileRequest<
        CatalogueUpdateCommand,
        CatalogueUpdatedEvent
    >('data/catalogueUpdate', requestProps, params)
}

export interface DatasetAddJsonDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionCommandDTO { }
export interface DatasetAddedJsonDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTO { }

export const useDatasetAddJsonDistributionCommand = (
    params: CommandParams<DatasetAddJsonDistributionCommand, DatasetAddedJsonDistributionEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandRequest<
        DatasetAddJsonDistributionCommand,
        DatasetAddedJsonDistributionEvent
    >('data/datasetAddJsonDistribution', requestProps, params)
}

export interface DatasetUpdateJsonDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetUpdateJsonDistributionCommandDTO { }
export interface DatasetUpdatedJsonDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetUpdatedJsonDistributionEventDTO { }

export const useDatasetUpdateJsonDistributionCommand = (
    params: CommandParams<DatasetUpdateJsonDistributionCommand, DatasetUpdatedJsonDistributionEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandRequest<
        DatasetUpdateJsonDistributionCommand,
        DatasetUpdatedJsonDistributionEvent
    >('data/datasetUpdateJsonDistribution', requestProps, params)
}


export interface CatalogueDeleteCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteCommandDTO { }
export interface CatalogueDeletedEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueDeletedEventDTO { }

export const useCatalogueDeleteCommand = (
    params: CommandParams<CatalogueDeleteCommand, CatalogueDeletedEvent>
) => {
    const requestProps = useNoAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDeleteCommand,
        CatalogueDeletedEvent
    >('data/catalogueDelete', requestProps, params)
}