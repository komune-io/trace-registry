import {io} from "registry-platform-api-api-js-export";
import {
    CommandParams,
    CommandResquestOptions,
    CommandWithFile,
    useAuthenticatedRequest,
    useCommandRequest,
    useCommandWithFileRequest
} from "@komune-io/g2"

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
    params: CommandParams<CommandWithFile<CatalogueUpdateCommand>, CatalogueUpdatedEvent>,
    options?: CommandResquestOptions
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        CatalogueUpdateCommand,
        CatalogueUpdatedEvent
    >('data/catalogueUpdate', requestProps, params, options)
}

export interface DatasetAddJsonDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddJsonDistributionCommandDTO { }
export interface DatasetAddedJsonDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedJsonDistributionEventDTO { }

export const useDatasetAddJsonDistributionCommand = (
    params: CommandParams<DatasetAddJsonDistributionCommand, DatasetAddedJsonDistributionEvent>,
    options?: CommandResquestOptions
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetAddJsonDistributionCommand,
        DatasetAddedJsonDistributionEvent
    >('data/datasetAddJsonDistribution', requestProps, params, options)
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
    >('data/catalogueDraftValidate', requestProps, {
        ...params,
        options: {
            ...params?.options,
            mutationKey: ['data/catalogueDraftValidate']
        }
    })
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

export interface CatalogueDraftDeleteCommand extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftDeleteCommandDTO { }
export interface CatalogueDraftDeletedEvent extends io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftDeletedEventDTO { }

export const useCatalogueDraftDeleteCommand = (
    params: CommandParams<CatalogueDraftDeleteCommand, CatalogueDraftDeletedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueDraftDeleteCommand,
        CatalogueDraftDeletedEvent
    >('data/catalogueDraftDelete', requestProps, params)
}

export interface DatasetDeleteCommand extends io.komune.registry.f2.dataset.domain.command.DatasetDeleteCommandDTO { }
export interface DatasetDeletedEvent extends io.komune.registry.f2.dataset.domain.command.DatasetDeletedEventDTO { }

export const useDatasetDeleteCommand = (
    params: CommandParams<DatasetDeleteCommand, DatasetDeletedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetDeleteCommand,
        DatasetDeletedEvent
    >('data/datasetDelete', requestProps, params)
}

export interface DatasetCreateCommand extends io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTO { }
export interface DatasetCreatedEvent extends io.komune.registry.f2.dataset.domain.command.DatasetCreatedEventDTO { }

export const useDatasetCreateCommand = (
    params: CommandParams<DatasetCreateCommand, DatasetCreatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetCreateCommand,
        DatasetCreatedEvent
    >('data/datasetCreate', requestProps, params)
}

export interface DatasetUpdateCommand extends io.komune.registry.f2.dataset.domain.command.DatasetUpdateCommandDTO { }
export interface DatasetUpdatedEvent extends io.komune.registry.f2.dataset.domain.command.DatasetUpdatedEventDTO { }

export const useDatasetUpdateCommand = (
    params: CommandParams<DatasetUpdateCommand, DatasetUpdatedEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetUpdateCommand,
        DatasetUpdatedEvent
    >('data/datasetUpdate', requestProps, params)
}

export interface DatasetAddMediaDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTO { }
export interface DatasetAddedMediaDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedMediaDistributionEventDTO { }

export const useDatasetAddMediaDistributionCommand = (
    params: CommandParams<CommandWithFile<DatasetAddMediaDistributionCommand>, DatasetAddedMediaDistributionEvent>,
    options?: CommandResquestOptions
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        DatasetAddMediaDistributionCommand,
        DatasetAddedMediaDistributionEvent
    >('data/datasetAddMediaDistribution', requestProps, params, options)
}

export interface DatasetUpdateMediaDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTO { }
export interface DatasetUpdatedMediaDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetUpdatedMediaDistributionEventDTO { }

export const useDatasetUpdateMediaDistributionCommand = (
    params: CommandParams<CommandWithFile<DatasetUpdateMediaDistributionCommand>, DatasetUpdatedMediaDistributionEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandWithFileRequest<
        DatasetUpdateMediaDistributionCommand,
        DatasetUpdatedMediaDistributionEvent
    >('data/datasetUpdateMediaDistribution', requestProps, params)
}

export interface DatasetAddEmptyDistributionCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTO { }
export interface DatasetAddedEmptyDistributionEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedEmptyDistributionEventDTO { }

export const useDatasetAddEmptyDistributionCommand = (
    params: CommandParams<DatasetAddEmptyDistributionCommand, DatasetAddedEmptyDistributionEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetAddEmptyDistributionCommand,
        DatasetAddedEmptyDistributionEvent
    >('data/datasetAddEmptyDistribution', requestProps, params)
}

export interface CatalogueReferenceDatasetsCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTO { }
export interface CatalogueReferencedDatasetsEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueReferencedDatasetsEventDTO { }

export const useCatalogueReferenceDatasetsCommand = (
    params: CommandParams<CatalogueReferenceDatasetsCommand, CatalogueReferencedDatasetsEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueReferenceDatasetsCommand,
        CatalogueReferencedDatasetsEvent
    >('data/catalogueReferenceDatasets', requestProps, params)
}

export interface CatalogueUnreferenceDatasetsCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferenceDatasetsCommandDTO { }
export interface CatalogueUnreferencedDatasetsEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueUnreferencedDatasetsEventDTO { }

export const useCatalogueUnreferenceDatasetsCommand = (
    params: CommandParams<CatalogueUnreferenceDatasetsCommand, CatalogueUnreferencedDatasetsEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueUnreferenceDatasetsCommand,
        CatalogueUnreferencedDatasetsEvent
    >('data/catalogueUnreferenceDatasets', requestProps, params)
}

export interface DatasetAddDistributionValueCommand extends io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTO { }
export interface DatasetAddedDistributionValueEvent extends io.komune.registry.f2.dataset.domain.command.DatasetAddedDistributionValueEventDTO { }

export const useDatasetAddDistributionValueCommand = (
    params: CommandParams<DatasetAddDistributionValueCommand, DatasetAddedDistributionValueEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetAddDistributionValueCommand,
        DatasetAddedDistributionValueEvent
    >('data/datasetAddDistributionValue', requestProps, params)
}

export interface DatasetReplaceDistributionValueCommand extends io.komune.registry.f2.dataset.domain.command.DatasetReplaceDistributionValueCommandDTO { }
export interface DatasetReplacedDistributionValueEvent extends io.komune.registry.f2.dataset.domain.command.DatasetReplacedDistributionValueEventDTO { }

export const useDatasetReplaceDistributionValueCommand = (
    params: CommandParams<DatasetReplaceDistributionValueCommand, DatasetReplacedDistributionValueEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetReplaceDistributionValueCommand,
        DatasetReplacedDistributionValueEvent
    >('data/datasetReplaceDistributionValue', requestProps, params)
}

export interface DatasetRemoveDistributionValueCommand extends io.komune.registry.f2.dataset.domain.command.DatasetRemoveDistributionValueCommandDTO { }
export interface DatasetRemovedDistributionValueEvent extends io.komune.registry.f2.dataset.domain.command.DatasetRemovedDistributionValueEventDTO { }

export const useDatasetRemoveDistributionValueCommand = (
    params: CommandParams<DatasetRemoveDistributionValueCommand, DatasetRemovedDistributionValueEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        DatasetRemoveDistributionValueCommand,
        DatasetRemovedDistributionValueEvent
    >('data/datasetRemoveDistributionValue', requestProps, params)
}


export interface CatalogueAddRelatedCataloguesCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommandDTO { }
export interface CatalogueAddedRelatedCataloguesEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueAddedRelatedCataloguesEventDTO { }

export const useCatalogueAddRelatedCataloguesCommand = (
    params: CommandParams<CatalogueAddRelatedCataloguesCommand, CatalogueAddedRelatedCataloguesEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueAddRelatedCataloguesCommand,
        CatalogueAddedRelatedCataloguesEvent
    >('data/catalogueAddRelatedCatalogues', requestProps, params)
}

export interface CatalogueRemoveRelatedCataloguesCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueRemoveRelatedCataloguesCommandDTO { }
export interface CatalogueRemovedRelatedCataloguesEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueRemovedRelatedCataloguesEventDTO { }

export const useCatalogueRemoveRelatedCataloguesCommand = (
    params: CommandParams<CatalogueRemoveRelatedCataloguesCommand, CatalogueRemovedRelatedCataloguesEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueRemoveRelatedCataloguesCommand,
        CatalogueRemovedRelatedCataloguesEvent
    >('data/catalogueRemoveRelatedCatalogues', requestProps, params)
}

export interface CatalogueClaimOwnershipCommand extends io.komune.registry.f2.catalogue.domain.command.CatalogueClaimOwnershipCommandDTO { }
export interface CatalogueClaimedOwnershipEvent extends io.komune.registry.f2.catalogue.domain.command.CatalogueClaimedOwnershipEventDTO { }

export const useCatalogueClaimOwnershipCommand = (
    params: CommandParams<CatalogueClaimOwnershipCommand, CatalogueClaimedOwnershipEvent>
) => {
    const requestProps = useAuthenticatedRequest()
    return useCommandRequest<
        CatalogueClaimOwnershipCommand,
        CatalogueClaimedOwnershipEvent
    >('data/catalogueClaimOwnership', requestProps, params)
}
