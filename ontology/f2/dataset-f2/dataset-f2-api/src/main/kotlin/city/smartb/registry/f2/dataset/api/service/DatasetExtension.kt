package city.smartb.registry.f2.dataset.api.service

import city.smartb.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetCreatedEventDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetDeleteCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetDeletedEventDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkDatasetsCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkThemesCommandDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkedDatasetsEventDTOBase
import city.smartb.registry.f2.dataset.domain.command.DatasetLinkedThemesEventDTOBase
import city.smartb.registry.f2.dataset.domain.dto.DatasetDTOBase
import city.smartb.registry.f2.dataset.domain.dto.DatasetRefDTOBase
import city.smartb.registry.program.s2.dataset.api.DatasetFinderService
import city.smartb.registry.s2.dataset.domain.command.DatasetCreateCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetCreatedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetDeleteCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetDeletedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import city.smartb.registry.s2.dataset.domain.model.DatasetModel


suspend fun List<DatasetModel>.toDTO(datasetFinderService: DatasetFinderService) = map {
    it.toDTO(datasetFinderService)
}
suspend fun DatasetModel.toDTO(datasetFinderService: DatasetFinderService): DatasetDTOBase {
    val datasetsFetched = datasets?.mapNotNull {
        datasetFinderService.getOrNull(it)?.toRefDTO()
    }
    return DatasetDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        type = type,
        img = img?.let {"/datasets/${id}/logo" },
        description = description,
        datasets = datasetsFetched,
        themes = themes?.toList(),
        accessRights = accessRights,
        conformsTo = conformsTo,
        creator = creator,
        language = language,
        publisher = publisher,
        theme = theme,
        keywords = keywords,
        landingPage = landingPage,
        version = version,
        versionNotes = versionNotes,
        length = length,
        temporalResolution = temporalResolution,
        wasGeneratedBy = wasGeneratedBy,
        releaseDate = releaseDate,
        updateDate = updateDate,
        status = status,
    )
}

fun DatasetModel.toRefDTO(): DatasetRefDTOBase {
    return DatasetRefDTOBase(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        description = description,
        themes = themes,
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

fun DatasetCreateCommandDTOBase.toCommand() = DatasetCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    datasets = datasets,
    type = type,
    accessRights = accessRights,
    conformsTo = conformsTo,
    creator = creator,
    language = language,
    publisher = publisher,
    theme = theme,
    keywords = keywords,
    landingPage = landingPage,
    version = version,
    versionNotes = versionNotes,
    length = length,
    temporalResolution = temporalResolution,
    wasGeneratedBy = wasGeneratedBy,
    releaseDate = releaseDate,
    updateDate = updateDate,

)

fun DatasetCreatedEvent.toEvent() = DatasetCreatedEventDTOBase(
    id = id,
    identifier = identifier,
    title = title,
    description = description,
    datasets = datasets,
    type = type,
    accessRights = accessRights,
    conformsTo = conformsTo,
    creator = creator,
    language = language,
    publisher = publisher,
    theme = theme,
    keywords = keywords,
    landingPage = landingPage,
    version = version,
    versionNotes = versionNotes,
    length = length,
    temporalResolution = temporalResolution,
    wasGeneratedBy = wasGeneratedBy,
    releaseDate = releaseDate,
    updateDate = updateDate,
)

fun DatasetLinkDatasetsCommandDTOBase.toCommand() = DatasetLinkDatasetsCommand(
    id = id,
    datasets = datasets
)

fun DatasetLinkedDatasetsEvent.toEvent() = DatasetLinkedDatasetsEventDTOBase(
    id = id,
    datasets = datasets
)

fun DatasetLinkThemesCommandDTOBase.toCommand() = DatasetLinkThemesCommand(
    id = id,
    themes = themes
)

fun DatasetLinkedThemesEvent.toEvent() = DatasetLinkedThemesEventDTOBase(
    id = id,
    themes = themes
)

fun DatasetDeleteCommandDTOBase.toCommand() = DatasetDeleteCommand(
    id = id
)

fun DatasetDeletedEvent.toEvent() = DatasetDeletedEventDTOBase(
    id = id
)
