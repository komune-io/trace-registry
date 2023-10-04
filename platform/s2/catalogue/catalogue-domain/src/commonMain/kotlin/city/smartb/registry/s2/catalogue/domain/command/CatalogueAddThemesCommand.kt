package city.smartb.registry.s2.catalogue.domain.command

import cccev.s2.requirement.domain.D2RequirementPage
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.model.SkosConceptId
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Add a list of sub-requirement to a requirement.
 * @d2 function
 * @parent [D2RequirementPage]
 * @order 30
 */
interface RequirementAddThemesFunction

@JsExport
@JsName("CatalogueAddThemesCommandDTO")
interface CatalogueAddThemesCommandDTO: CatalogueCommand {
    /**
     * Id of the catalogue to add sub-catalogues to.
     */
    override val id: CatalogueId

    /**
     * Ids of the sub-catalogues to add.
     * @example [["8e411870-9a8c-4d7a-91b6-496148c6f5c5", "f31cf8df-44f2-4fef-bc20-09a173032bb2"]]
     */
    val themes: List<CatalogueId>
}

/**
 * @d2 command
 * @parent [CatalogueAddThemesFunction]
 */
@Serializable
data class CatalogueAddThemesCommand(
    override val id: CatalogueId,
    override val themes: List<CatalogueId> = emptyList()
): CatalogueAddThemesCommandDTO

@JsExport
@JsName("CatalogueAddedThemesEventDTO")
interface CatalogueAddedThemesEventDTO: CatalogueEvent {
    /** @ref [CatalogueAddThemesCommand.id] */
    override val id: CatalogueId

    /** @ref [CatalogueAddThemesCommand.themes] */
    val themes: List<SkosConceptId>
}

/**
 * @d2 event
 * @parent [CatalogueAddThemesFunction]
 */
@Serializable
data class CatalogueAddedThemesEvent(
    override val id: CatalogueId,
    override val themes: List<SkosConceptId> = emptyList(),
    override val date: Long
): CatalogueAddedThemesEventDTO
