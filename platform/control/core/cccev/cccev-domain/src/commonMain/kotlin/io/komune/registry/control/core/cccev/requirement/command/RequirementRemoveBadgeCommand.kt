package io.komune.registry.control.core.cccev.requirement.command

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.RequirementId

data class RequirementRemoveBadgeCommand(
    val id: RequirementId,
    val badgeId: BadgeId,
)

data class RequirementRemovedBadgeEvent(
    val id: RequirementId,
    val badgeId: BadgeId
)
