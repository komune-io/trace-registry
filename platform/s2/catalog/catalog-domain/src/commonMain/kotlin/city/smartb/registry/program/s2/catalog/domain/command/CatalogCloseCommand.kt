package city.smartb.registry.program.s2.catalog.domain.command.catalog

import city.smartb.registry.program.s2.catalog.domain.automate.CatalogCommand
import city.smartb.registry.program.s2.catalog.domain.automate.CatalogEvent
import city.smartb.registry.program.s2.catalog.domain.automate.CatalogId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 command
 */
@JsExport
interface CatalogCloseCommandDTO: CatalogCommand {
    /**
     * Id of the catalog to close.
     */
    override val id: CatalogId
}

/**
 * @d2 inherit
 */
data class CatalogCloseCommand(
    override val id: CatalogId
): CatalogCloseCommandDTO

@Serializable
data class CatalogClosedEvent(
    override val id: CatalogId,
    override val date: Long
): CatalogEvent
