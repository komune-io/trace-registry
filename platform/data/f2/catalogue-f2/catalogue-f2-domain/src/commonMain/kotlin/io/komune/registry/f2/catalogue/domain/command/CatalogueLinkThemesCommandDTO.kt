package io.komune.registry.f2.catalogue.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.dsl.skos.domain.model.SkosConcept
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Represents a function that links themes to a catalogue.
 * @d2 function
 * @parent [io.komune.registry.f2.catalogue.domain.D2CatalogueF2Page]
 */
typealias CatalogueLinkThemesFunction = F2Function<
        CatalogueLinkThemesCommandDTOBase,
        CatalogueLinkedThemesEventDTOBase
        >

/**
 * Represents a command that links themes to a catalogue.
 * @d2 command
 * @parent [CatalogueLinkThemesFunction]
 */
@JsExport
@JsName("CatalogueLinkThemesCommandDTO")
interface CatalogueLinkThemesCommandDTO {
    val id: CatalogueId
    val themes: List<SkosConcept>
}


/**
 * @d2 inherit
 */
@Serializable
data class CatalogueLinkThemesCommandDTOBase(
    override val id: CatalogueId,
    override val themes: List<SkosConcept>
): CatalogueLinkThemesCommandDTO

/**
 * Represents an event that links themes to a catalogue.
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
