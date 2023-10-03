package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create a catalogue.
 * @d2 function
 * @parent [city.smartb.registry.f2.catalogue.domain.D2CatalogueF2Page]
 * @order 10
 */
typealias CatalogueCreateFunction = F2Function<CatalogueCreateCommandDTOBase, CatalogueCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [CatalogueCreateFunction]
 */
@JsExport
@JsName("CatalogueCreateCommandDTO")
interface CatalogueCreateCommandDTO {
    /**
     * Custom identifier of the new catalogue.
     */
    val identifier: CatalogueIdentifier

    /**
     * @ref [city.smartb.registry.f2.catalogue.domain.model.CatalogueDTO.name]
     */
    val name: String

    /**
     * @ref [city.smartb.registry.f2.catalogue.domain.model.CatalogueDTO.description]
     */
    val description: String?

    /**
     * Sub-activities of the catalogue.
     * @example [[]]
     */
    val hasCatalogue: Array<out CatalogueCreateCommandDTO>?

    /**
     * Steps to fulfill in order for the catalogue to be completed.
     */
    val hasStep: Array<out CatalogueCreateCommandDTO>?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueCreateCommandDTOBase(
    override val identifier: CatalogueIdentifier,
    override val name: String,
    override val description: String?,
    override val hasCatalogue: Array<CatalogueCreateCommandDTOBase>?,
    override val hasStep: Array<CatalogueCreateCommandDTOBase>?
): CatalogueCreateCommandDTO

/**
 * @d2 event
 * @parent [CatalogueCreateFunction]
 */
@JsExport
@JsName("CatalogueCreatedEventDTO")
interface CatalogueCreatedEventDTO: Event {
    /**
     * Identifier of the created catalogue.
     */
    val identifier: CatalogueIdentifier
}

/**
 * @d2 inherit
 */
data class CatalogueCreatedEventDTOBase(
    override val identifier: CatalogueIdentifier,
): CatalogueCreatedEventDTO
