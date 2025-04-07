package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueRemoveRelatedCataloguesCommandDTO {
    val id: CatalogueId
    val relatedCatalogueIds: Map<String, List<CatalogueId>>
}

@Serializable
data class CatalogueRemoveRelatedCataloguesCommand(
    override val id: CatalogueId,
    override val relatedCatalogueIds: Map<String, List<CatalogueId>>,
) : CatalogueCommand, CatalogueRemoveRelatedCataloguesCommandDTO

@Serializable
data class CatalogueRemovedRelatedCataloguesEvent(
    override val id: CatalogueId,
    override val date: Long,
    val relatedCatalogueIds: Map<String, Set<CatalogueId>>,
) : CatalogueEvent
