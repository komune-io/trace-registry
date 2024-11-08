package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


typealias CatalogueLinkThemesFunction = F2Function<
        CatalogueLinkThemesCommandDTOBase,
        CatalogueLinkedThemesEventDTOBase
        >

@JsExport
@JsName("CatalogueLinkThemesCommandDTO")
interface CatalogueLinkThemesCommandDTO {
    val id: CatalogueId
    val themes: List<SkosConcept>
}


@Serializable
data class CatalogueLinkThemesCommandDTOBase(
    override val id: CatalogueId,
    override val themes: List<SkosConcept>
): CatalogueLinkThemesCommandDTO


@JsExport
@JsName("CatalogueLinkThemesEventDTO")
interface CatalogueLinkedThemesEventDTO: Event {
    val id: CatalogueId

    val themes: List<SkosConcept>
}

@Serializable
data class CatalogueLinkedThemesEventDTOBase(
    override val id: CatalogueId,
    override val themes: List<SkosConcept>
): CatalogueLinkedThemesEventDTO
