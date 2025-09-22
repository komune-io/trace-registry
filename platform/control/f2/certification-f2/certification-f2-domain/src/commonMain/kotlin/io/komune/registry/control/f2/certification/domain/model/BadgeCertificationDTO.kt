package io.komune.registry.control.f2.certification.domain.model

import io.komune.registry.s2.commons.model.BadgeCertificationId
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface BadgeCertificationDTO {
    val id: BadgeCertificationId
    val badgeId: BadgeId
    val badgeLevelId: BadgeLevelId
    val name: String
    val value: String
    val color: String?
    val image: String?
}

@Serializable
data class BadgeCertificationDTOBase(
    override val id: BadgeCertificationId,
    override val badgeLevelId: BadgeLevelId,
    override val badgeId: BadgeId,
    override val name: String,
    override val value: String,
    override val color: String?,
    override val image: String?,
): BadgeCertificationDTO
