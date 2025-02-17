import { io } from "registry-platform-api-api-js-export";
import { useCommandWithFileRequest, CommandParams, CommandWithFile, useAuthenticatedRequest, useCommandRequest } from "@komune-io/g2"

export interface CatalogueCreateCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTO { }
export interface CatalogueCreatedEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTO { }

export const useCatalogueCreateCommand = (
    params: CommandParams<CommandWithFile<CatalogueCreateCommand>, CatalogueCreatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
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
    const requestProps = useAuthenticatedRequest()
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
    const requestProps = useAuthenticatedRequest()
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
    const requestProps = useAuthenticatedRequest()
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
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDeleteCommand,
        CatalogueDeletedEvent
    >('data/catalogueDelete', requestProps, params)
}

export interface CatalogueDraftCreateCommand extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateCommandDTO { }
export interface CatalogueDraftCreatedEvent extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreatedEventDTO { }

export const useCatalogueDraftCreateCommand = (
    params: CommandParams<CatalogueDraftCreateCommand, CatalogueDraftCreatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDraftCreateCommand,
        CatalogueDraftCreatedEvent
    >('data/catalogueDraftCreate', requestProps, params)
}

export interface CatalogueDraftSubmitCommand extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmitCommandDTO { }
export interface CatalogueDraftSubmittedEvent extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftSubmittedEventDTO { }

export const useCatalogueDraftSubmitCommand = (
    params: CommandParams<CatalogueDraftSubmitCommand, CatalogueDraftSubmittedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDraftSubmitCommand,
        CatalogueDraftSubmittedEvent
    >('data/catalogueDraftSubmit', requestProps, params)
}

export interface CatalogueDraftValidateCommand extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidateCommandDTO { }
export interface CatalogueDraftValidatedEvent extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftValidatedEventDTO { }

export const useCatalogueDraftValidateCommand = (
    params: CommandParams<CatalogueDraftValidateCommand, CatalogueDraftValidatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDraftValidateCommand,
        CatalogueDraftValidatedEvent
    >('data/catalogueDraftValidate', requestProps, params)
}

export interface CatalogueDraftRejectCommand extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectCommandDTO { }
export interface CatalogueDraftRejectedEvent extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftRejectedEventDTO { }

export const useCatalogueDraftRejectCommand = (
    params: CommandParams<CatalogueDraftRejectCommand, CatalogueDraftRejectedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDraftRejectCommand,
        CatalogueDraftRejectedEvent
    >('data/catalogueDraftReject', requestProps, params)
}