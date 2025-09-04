package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelIdentifier
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface BadgeDTO {
    val id: BadgeId
    val identifier: BadgeLevelIdentifier
    val name: String
    val informationConceptIdentifier: InformationConceptIdentifier
    val image: String?
    val levels: List<BadgeLevelDTO>
}

@Serializable
data class BadgeDTOBase(
    override val id: BadgeId = "",
    override val identifier: BadgeLevelIdentifier,
    override val name: String,
    override val informationConceptIdentifier: InformationConceptIdentifier,
    override val image: String?,
    override val levels: List<BadgeLevelDTOBase>,
): BadgeDTO
