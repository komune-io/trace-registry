package io.komune.registry.control.core.cccev.requirement.command

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelId
import io.komune.registry.s2.commons.model.BadgeLevelIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.RequirementId

data class RequirementAddBadgeCommand(
    val id: RequirementId,
    val identifier: BadgeLevelIdentifier?,
    val name: String,
    val informationConceptIdentifier: InformationConceptIdentifier,
    val image: String?,
    val levels: List<RequirementBadgeLevelCommand>,
)

data class RequirementBadgeLevelCommand(
    val id: BadgeLevelId? = null,
    val identifier: BadgeLevelIdentifier? = null,
    val name: String,
    val color: String?,
    val image: String?,
    val level: Int,
    val expression: String?,
)

data class RequirementAddedBadgeEvent(
    val id: RequirementId,
    val badgeId: BadgeId
)
