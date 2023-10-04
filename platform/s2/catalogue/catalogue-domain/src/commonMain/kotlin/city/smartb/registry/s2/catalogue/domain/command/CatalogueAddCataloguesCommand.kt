package city.smartb.registry.s2.catalogue.domain.command

import cccev.s2.requirement.domain.D2RequirementPage
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Add a list of sub-requirement to a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 30
 */
interface RequirementAddCataloguesFunction

@JsExport
@JsName("CatalogueAddCataloguesCommandDTO")
interface CatalogueAddCataloguesCommandDTO: CatalogueCommand {
    /**
     * Id of the catalogue to add sub-catalogues to.
     */
    override val id: CatalogueId

    /**
     * Ids of the sub-catalogues to add.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val catalogues: List<CatalogueId>
}

/**
 * @d2 command
 * @parent [CatalogueAddCataloguesFunction]
 */
@Serializable
data class CatalogueAddCataloguesCommand(
    override val id: CatalogueId,
    override val catalogues: List<CatalogueId> = emptyList()
): CatalogueAddCataloguesCommandDTO

@JsExport
@JsName("CatalogueAddedCataloguesEventDTO")
interface CatalogueAddedCataloguesEventDTO: CatalogueEvent {
    /** @ref [CatalogueAddCataloguesCommand.id] */
    override val id: CatalogueId

    /** @ref [CatalogueAddCataloguesCommand.catalogues] */
    val catalogues: List<CatalogueId>
}

/**
 * @d2 event
 * @parent [CatalogueAddCataloguesFunction]
 */
@Serializable
data class CatalogueAddedCataloguesEvent(
    override val id: CatalogueId,
    override val catalogues: List<CatalogueId> = emptyList(),
    override val date: Long
): CatalogueAddedCataloguesEventDTO
