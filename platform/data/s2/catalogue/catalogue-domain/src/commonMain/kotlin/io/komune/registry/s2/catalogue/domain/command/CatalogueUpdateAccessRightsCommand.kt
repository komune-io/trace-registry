package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.commons.model.CatalogueId
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 command
 */
@JsExport
interface CatalogueUpdateAccessRightsCommandDTO {
    /**
     * Id of the catalogue to update.
     */
    val id: CatalogueId

    /**
     * New access rights for the catalogue.
     */
    val accessRights: CatalogueAccessRight?
}

/**
 * @d2 inherit
 */
@Serializable
data class CatalogueUpdateAccessRightsCommand(
    override val id: CatalogueId,
    override val accessRights: CatalogueAccessRight,
): CatalogueUpdateAccessRightsCommandDTO, CatalogueCommand

@Serializable
data class CatalogueUpdatedAccessRightsEvent(
    override val id: CatalogueId,
    override val date: Long,
    val accessRights: CatalogueAccessRight,
): CatalogueEvent
