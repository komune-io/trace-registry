package io.komune.registry.control.core.cccev.requirement.command

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementId

data class RequirementUpdateBadgeCommand(
    val id: RequirementId,
    val badgeId: BadgeId,
    val name: String,
    val informationConceptIdentifier: InformationConceptIdentifier,
    val image: String?,
    val levels: List<RequirementBadgeLevelCommand>,
)

data class RequirementUpdatedBadgeEvent(
    val id: RequirementId,
    val badgeId: BadgeId
)
