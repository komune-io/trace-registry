package io.komune.registry.f2.catalogue.api.model

import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeleteCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueDeletedEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkThemesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedCataloguesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedDatasetsEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkedThemesEventDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueUpdateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language

fun CatalogueRefTreeDTOBase.descendantsIds(): Set<CatalogueId> = buildSet {
    catalogues?.forEach {
        add(it.id)
        addAll(it.descendantsIds())
    }
}

fun CatalogueCreateCommandDTOBase.toCommand(
    identifier: String,
    withTranslatable: Boolean,
    hidden: Boolean
) = CatalogueCreateCommand(
    identifier = identifier,
    title = title.takeIf { withTranslatable }.orEmpty(),
    description = description.takeIf { withTranslatable },
    type = type,
    language = language.takeIf { withTranslatable },
    structure = structure,
    homepage = homepage,
    ownerOrganizationId = ownerOrganizationId,
    themeIds = themes?.toSet().orEmpty(),
    catalogueIds = catalogues?.toSet().orEmpty(),
    datasetIds = emptySet(),
    accessRights = accessRights,
    licenseId = license,
    location = location,
    versionNotes = versionNotes.takeIf { withTranslatable },
    hidden = hidden,
)

fun CatalogueUpdateCommandDTOBase.toCommand(
    withTranslatable: Boolean,
    hidden: Boolean
) = CatalogueUpdateCommand(
    id = id,
    title = title.takeIf { withTranslatable }.orEmpty(),
    description = description.takeIf { withTranslatable },
    language = language.takeIf { withTranslatable },
    structure = structure,
    homepage = homepage,
    ownerOrganizationId = ownerOrganizationId,
    themeIds = themes?.toSet().orEmpty(),
    accessRights = accessRights,
    licenseId = license,
    location = location,
    hidden = hidden,
    versionNotes = versionNotes.takeIf { withTranslatable }
)

fun CatalogueModel.toUpdateCommand(draftId: CatalogueDraftId, language: Language) = CatalogueUpdateCommandDTOBase(
    id = id,
    draftId = draftId,
    title = title,
    description = description,
    language = language,
    structure = structure,
    homepage = homepage,
    ownerOrganizationId = ownerOrganizationId,
    themes = themeIds,
    accessRights = accessRights,
    license = licenseId,
    location = location,
    hidden = hidden
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
    datasetIds = datasetIds
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
