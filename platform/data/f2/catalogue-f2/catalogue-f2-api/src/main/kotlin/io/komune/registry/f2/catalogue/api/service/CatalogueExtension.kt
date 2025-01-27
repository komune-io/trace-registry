package io.komune.registry.f2.catalogue.api.service

import cccev.dsl.model.nullIfEmpty
import f2.dsl.cqrs.filter.CollectionMatch
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeletedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedThemesEventDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.dataset.domain.model.DatasetModel

suspend fun CatalogueModel.toDTO(
    getCatalogue: suspend (String) -> CatalogueModel?,
    getDataset: suspend (String) -> DatasetModel?,
): CatalogueDTOBase {
    return CatalogueDTOBase(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        description = description,
        catalogues = catalogues?.mapNotNull { getCatalogue(it)?.toRefDTO() },
        datasets = datasets?.mapNotNull { getDataset(it)?.toDTO() },
        themes = themes,
        type = type,
        language = language,
        structure = structure,
        homepage = homepage,
        img = img,
        creator = creator,
        publisher = publisher,
        validator = validator,
        accessRights = accessRights,
        license = license,
        issued = issued,
        modified = modified,
    )
}

fun CatalogueModel.toRefDTO(): CatalogueRefDTOBase {
    return CatalogueRefDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        language = language,
        type = type,
        description = description,
        img = img,
    )
}

suspend fun CatalogueModel.toRefTreeDTO(catalogueFinderService: CatalogueFinderService, i: Int = 0): CatalogueRefTreeDTOBase {
    println("$id - $catalogues - $i")
    return CatalogueRefTreeDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        language = language,
        type = type,
        description = description,
        img = img,
        catalogues = catalogues.nullIfEmpty()?.let {
            catalogueFinderService.page(id = CollectionMatch(it))
                .items
                .map { child -> child.toRefTreeDTO(catalogueFinderService, i + 1) }
        }
    )
}

fun CatalogueCreateCommandDTOBase.toCommand() = CatalogueCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    type = type,
    language = language,
    structure = structure,
    homepage = homepage,
    themes = themes?.toSet().orEmpty(),
    catalogues = catalogues?.toSet().orEmpty(),
    creator = creator,
    publisher = publisher,
    validator = validator,
    accessRights = accessRights,
    license = license
)

fun CatalogueCreatedEvent.toDTO() = CatalogueCreatedEventDTOBase(
    id = id,
    identifier = identifier,
)

fun CatalogueLinkCataloguesCommandDTOBase.toCommand() = CatalogueLinkCataloguesCommand(
    id = id,
    catalogues = catalogues
)

fun CatalogueLinkedCataloguesEvent.toDTO() = CatalogueLinkedCataloguesEventDTOBase(
    id = id,
)

fun CatalogueLinkDatasetsCommandDTOBase.toCommand() = CatalogueLinkDatasetsCommand(
    id = id,
    datasets = datasets
)

fun CatalogueLinkedDatasetsEvent.toDTO() = CatalogueLinkedDatasetsEventDTOBase(
    id = id,
)

fun CatalogueLinkThemesCommandDTOBase.toCommand() = CatalogueLinkThemesCommand(
    id = id,
    themes = themes
)

fun CatalogueLinkedThemesEvent.toDTO() = CatalogueLinkedThemesEventDTOBase(
    id = id,
)

fun CatalogueDeleteCommandDTOBase.toCommand() = CatalogueDeleteCommand(
    id = id
)

fun CatalogueDeletedEvent.toDTO() = CatalogueDeletedEventDTOBase(
    id = id
)
