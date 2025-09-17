package io.komune.registry.s2.catalogue.domain.command

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.CatalogueId
import kotlinx.serialization.Serializable

@Serializable
data class CatalogueAddBadgesCommand(
    override val id: CatalogueId,
    val badgeIds: List<BadgeId>
): CatalogueCommand

@Serializable
data class CatalogueAddedBadgesEvent(
    override val id: CatalogueId,
    override val date: Long,
    val badgeIds: List<BadgeId>,
): CatalogueEvent
