package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueReplaceRelatedCataloguesCommand(
    override val id: CatalogueId,
    val relatedCatalogueIds: Map<String, List<CatalogueId>>,
) : CatalogueCommand

@Serializable
data class CatalogueReplacedRelatedCataloguesEvent(
    override val id: CatalogueId,
    override val date: Long,
    val relatedCatalogueIds: Map<String, Set<CatalogueId>>,
) : CatalogueEvent
