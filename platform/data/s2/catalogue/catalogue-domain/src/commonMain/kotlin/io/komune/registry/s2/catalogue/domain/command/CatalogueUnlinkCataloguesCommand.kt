package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueUnlinkCataloguesCommand(
    override val id: CatalogueId,
    val catalogues: List<CatalogueId> = emptyList()
): CatalogueCommand

@Serializable
data class CatalogueUnlinkedCataloguesEvent(
    override val id: CatalogueId,
    val catalogues: List<CatalogueId> = emptyList(),
    override val date: Long
): CatalogueEvent
