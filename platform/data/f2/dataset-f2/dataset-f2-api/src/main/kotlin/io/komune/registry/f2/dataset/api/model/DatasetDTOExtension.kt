package io.komune.registry.f2.dataset.api.model

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTOBase
import io.komune.registry.f2.cccev.api.concept.model.toComputedDTO
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreatedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetDeletedEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetLinkDatasetsCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetLinkThemesCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetLinkedDatasetsEventDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetLinkedThemesEventDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetRefDTOBase
import io.komune.registry.f2.dataset.domain.dto.DistributionDTOBase
import io.komune.registry.f2.user.domain.model.UserRef
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SupportedValueId
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.model.ConceptModel
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.model.DatasetModel
import io.komune.registry.s2.dataset.domain.model.DistributionModel

suspend fun DatasetModel.toDTO(
    getDataset: suspend (DatasetId) -> DatasetModel,
    getDataUnit: suspend (DataUnitId) -> DataUnitModel,
    getInformationConcept: suspend (InformationConceptId) -> InformationConceptModel,
    getReferencingCatalogues: suspend (DatasetId) -> List<CatalogueId>,
    getSupportedValue: suspend (SupportedValueId) -> SupportedValueModel,
    getTheme: suspend (ConceptId) -> ConceptModel
): DatasetDTOBase {
    return DatasetDTOBase(
        id = id,
        identifier = identifier,
        catalogueId = catalogueId,
        referencingCatalogueIds = getReferencingCatalogues(id),
        title = title,
        type = type,
        img = img?.let {"/datasets/${id}/logo" },
        description = description,
        themes = themes?.toList(),
        accessRights = accessRights,
        conformsTo = conformsTo?.toList(),
        creator = creator,
        language = language,
        publisher = publisher,
        theme = themes?.toList(),
        keywords = keywords?.toList(),
        landingPage = landingPage,
        version = version,
        versionNotes = versionNotes,
        length = length,
        temporalResolution = temporalResolution,
        wasGeneratedBy = wasGeneratedBy,
        releaseDate = releaseDate,
        status = status,
        modified = modified,
        validator = validator,
        source = source,
        license = license,
        format = format,
        issued = issued,
        datasets = datasetIds
            .map { getDataset(it).toDTO(
                getDataset = getDataset,
                getDataUnit = getDataUnit,
                getInformationConcept = getInformationConcept,
                getReferencingCatalogues = getReferencingCatalogues,
                getSupportedValue = getSupportedValue,
                getTheme = getTheme
            ) }.filter { it.status != DatasetState.DELETED },
        distributions = distributions.map { it.toDTO(language, getDataUnit, getInformationConcept, getSupportedValue, getTheme) },
    )
}

fun DatasetModel.toRefDTO(): DatasetRefDTOBase {
    return DatasetRefDTOBase(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        description = description,
        themes = themes?.toList(),
        type = type,
        img = img,
    )
}

fun DatasetModel.toSimpleRefDTO(): DatasetRefDTOBase {
    return DatasetRefDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        type = type,
    )
}

suspend fun DistributionModel.toDTO(
    language: Language,
    getDataUnit: suspend (DataUnitId) -> DataUnitModel,
    getInformationConcept: suspend (InformationConceptId) -> InformationConceptModel,
    getSupportedValue: suspend (SupportedValueId) -> SupportedValueModel,
    getTheme: suspend (ConceptId) -> ConceptModel
) = DistributionDTOBase(
    id = id,
    name = name,
    downloadPath = downloadPath,
    mediaType = mediaType,
    aggregators = aggregators.map { (conceptId, valueId) ->
        val supportedValue = getSupportedValue(valueId)
        getInformationConcept(conceptId).toComputedDTO(supportedValue, language, getTheme, getDataUnit)
    },
    issued = issued,
    modified = modified,
)

fun DatasetCreateCommandDTOBase.toCommand(
    identifier: DatasetIdentifier,
    catalogueId: CatalogueId
) = DatasetCreateCommand(
    identifier = identifier,
    catalogueId = catalogueId,
    title = title,
    type = type,
    description = description,
    language = language,
    wasGeneratedBy = wasGeneratedBy,
    source = source,
    creator = creator,
    publisher = publisher,
    validator = validator,
    accessRights = accessRights,
    license = license,
    temporalResolution = temporalResolution,
    conformsTo = conformsTo,
    format = format,
    theme = theme,
    keywords = keywords,
    homepage = homepage,
    landingPage = landingPage,
    version = version,
    versionNotes = versionNotes,
    length = length,
    releaseDate = releaseDate,
)

fun DatasetCreatedEvent.toDTO() = DatasetCreatedEventDTOBase(
    id = id,
    identifier = identifier,
)

fun DatasetLinkDatasetsCommandDTOBase.toCommand() = DatasetLinkDatasetsCommand(
    id = id,
    datasetIds = datasets
)

fun DatasetLinkedDatasetsEvent.toDTO() = DatasetLinkedDatasetsEventDTOBase(
    id = id,
)

fun DatasetLinkThemesCommandDTOBase.toCommand() = DatasetLinkThemesCommand(
    id = id,
    themes = themes
)

fun DatasetLinkedThemesEvent.toDTO() = DatasetLinkedThemesEventDTOBase(
    id = id,
)

fun DatasetDeleteCommandDTOBase.toCommand() = DatasetDeleteCommand(
    id = id
)

fun DatasetDeletedEvent.toDTO() = DatasetDeletedEventDTOBase(
    id = id
)

suspend fun CatalogueDraftModel.toRef(
    getUser: suspend (UserId) -> UserRef,
) = CatalogueDraftRefDTOBase(
    id = id,
    originalCatalogueId = originalCatalogueId,
    language = language,
    baseVersion = baseVersion,
    creator = getUser(creatorId),
    status = status
)
