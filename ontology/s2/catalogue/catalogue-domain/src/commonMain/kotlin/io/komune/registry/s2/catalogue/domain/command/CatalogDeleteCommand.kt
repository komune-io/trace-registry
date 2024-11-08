package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

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
