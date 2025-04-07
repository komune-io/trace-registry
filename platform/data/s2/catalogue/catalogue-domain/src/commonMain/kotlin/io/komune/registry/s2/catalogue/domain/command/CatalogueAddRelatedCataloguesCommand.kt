package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CatalogueAddRelatedCataloguesCommandDTO {
    val id: CatalogueId
    val relatedCatalogueIds: Map<String, List<CatalogueId>>
}

@Serializable
data class CatalogueAddRelatedCataloguesCommand(
    override val id: CatalogueId,
    override val relatedCatalogueIds: Map<String, List<CatalogueId>>,
) : CatalogueCommand, CatalogueAddRelatedCataloguesCommandDTO

@Serializable
data class CatalogueAddedRelatedCataloguesEvent(
    override val id: CatalogueId,
    override val date: Long,
    val relatedCatalogueIds: Map<String, Set<CatalogueId>>,
) : CatalogueEvent
