package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import kotlinx.serialization.Serializable

data class CatalogueDeleteCommand(
    override val id: CatalogueId
): CatalogueCommand

@Serializable
data class CatalogueDeletedEvent(
    override val id: CatalogueId,
    override val date: Long
): CatalogueEvent
