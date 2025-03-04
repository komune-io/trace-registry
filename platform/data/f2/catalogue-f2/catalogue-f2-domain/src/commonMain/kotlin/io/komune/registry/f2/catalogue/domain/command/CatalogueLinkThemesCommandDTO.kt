package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.concept.domain.ConceptId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Links themes to a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 */
typealias CatalogueLinkThemesFunction = F2Function<
        CatalogueLinkThemesCommandDTOBase,
        CatalogueLinkedThemesEventDTOBase
        >

/**
 * @d2 command
 * @parent [CatalogueLinkThemesFunction]
 */
@JsExport
@JsName("CatalogueLinkThemesCommandDTO")
interface CatalogueLinkThemesCommandDTO {
    val id: CatalogueId
    val themes: List<ConceptId>
}


/**
 * @d2 inherit
 */
@Serializable
data class CatalogueLinkThemesCommandDTOBase(
    override val id: CatalogueId,
    override val themes: List<ConceptId>
): CatalogueLinkThemesCommandDTO

/**
 * @d2 event
 * @parent [CatalogueLinkThemesFunction]
 */
@JsExport
@JsName("CatalogueLinkThemesEventDTO")
interface CatalogueLinkedThemesEventDTO: Event {
    val id: CatalogueId
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueLinkedThemesEventDTOBase(
    override val id: CatalogueId,
): CatalogueLinkedThemesEventDTO
