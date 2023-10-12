package city.smartb.registry.f2.catalogue.api.service

import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueCreatedEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueDeleteCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueDeletedEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import city.smartb.registry.f2.catalogue.domain.command.CatalogueLinkedThemesEventDTOBase
import city.smartb.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel

suspend fun CatalogueModel.toRefDTO(): CatalogueRefDTOBase {
    return CatalogueRefDTOBase(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        description = description,
        themes = themes,
        type = type,
        display = display,
        homepage = homepage,
        img = img
    )
}
suspend fun CatalogueModel.toSimpleRefDTO(): CatalogueRefDTOBase {
    return CatalogueRefDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        type = type,
    )
}

fun CatalogueCreateCommandDTOBase.toCommand() = CatalogueCreateCommand(
    identifier = identifier,
    title = title,
    description = description,
    catalogues = catalogues,
    themes = themes,
    type = type,
    display = display,
    homepage = homepage,
)

fun CatalogueCreatedEvent.toEvent() = CatalogueCreatedEventDTOBase(
    id = id,
    identifier = identifier,
    title = title,
    description = description,
    catalogues = catalogues,
    themes = themes,
    type = type,
    display = display,
    homepage = homepage,
)

fun CatalogueLinkCataloguesCommandDTOBase.toCommand() = CatalogueLinkCataloguesCommand(
    id = id,
    catalogues = catalogues
)

fun CatalogueLinkedCataloguesEvent.toEvent() = CatalogueLinkedCataloguesEventDTOBase(
    id = id,
    catalogues = catalogues
)

fun CatalogueLinkThemesCommandDTOBase.toCommand() = CatalogueLinkThemesCommand(
    id = id,
    themes = themes
)

fun CatalogueLinkedThemesEvent.toEvent() = CatalogueLinkedThemesEventDTOBase(
    id = id,
    themes = themes
)

fun CatalogueDeleteCommandDTOBase.toCommand() = CatalogueDeleteCommand(
    id = id
)

fun CatalogueDeletedEvent.toEvent() = CatalogueDeletedEventDTOBase(
    id = id
)
