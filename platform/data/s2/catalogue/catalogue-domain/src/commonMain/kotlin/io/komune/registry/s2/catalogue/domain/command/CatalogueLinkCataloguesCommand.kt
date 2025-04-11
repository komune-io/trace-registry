package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueLinkCataloguesCommand(
    override val id: CatalogueId,
    val catalogueIds: List<CatalogueId>
): CatalogueCommand

@Serializable
data class CatalogueLinkedCataloguesEvent(
    override val id: CatalogueId,
    override val date: Long,
    val catalogueIds: Set<CatalogueId>,
): CatalogueEvent
