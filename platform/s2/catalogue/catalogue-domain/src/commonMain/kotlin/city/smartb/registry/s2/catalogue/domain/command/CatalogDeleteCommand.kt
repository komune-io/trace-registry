package city.smartb.registry.s2.catalogue.domain.command

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface CatalogueDeleteCommandDTO: CatalogueCommand {
    /**
     * Id of the catalogue to close.
     */
    override val id: CatalogueId
}

/**
 * @d2 inherit
 */
data class CatalogueDeleteCommand(
    override val id: CatalogueId
): CatalogueDeleteCommandDTO

@Serializable
data class CatalogueDeletedEvent(
    override val id: CatalogueId,
    override val date: Long
): CatalogueEvent
