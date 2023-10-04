package city.smartb.registry.f2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptId
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
    val title: String

    /**
     * @ref [city.smartb.registry.f2.catalogue.domain.model.CatalogueDTO.description]
     */
    val description: String?

    val type: String
    val homepage: String?
    val img: String?
    val themes: List<SkosConceptId>
    val catalogues: List<CatalogueId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueCreateCommandDTOBase(
    override val identifier: CatalogueIdentifier,
    override val title: String,
    override val description: String? = null,
    override val type: String,
    override val homepage: String? = null,
    override val img: String? = null,
    override val themes: List<SkosConceptId>,
    override val catalogues: List<CatalogueId>,
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
    val id: CatalogueId
    /**
     * Identifier of the created catalogue.
     */
    val identifier: CatalogueIdentifier
    val title: String
    val description: String?
    val type: String
    val homepage: String?
    val img: String?
    val themes: List<SkosConceptId>
    val catalogues: List<CatalogueId>
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueCreatedEventDTOBase(
    override val id: CatalogueId,
    override val identifier: CatalogueIdentifier,
    override val title: String,
    override val description: String?,
    override val type: String,
    override val homepage: String? = null,
    override val img: String? = null,
    override val themes: List<SkosConceptId>,
    override val catalogues: List<CatalogueId>,
): CatalogueCreatedEventDTO
