package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.BadgeLevelId
import io.komune.registry.s2.commons.model.BadgeLevelIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface BadgeLevelDTO {
    val id: BadgeLevelId
    val identifier: BadgeLevelIdentifier
    val name: String
    val color: String?
    val image: String?
    val level: Int
    val logic: String?
}

@Serializable
data class BadgeLevelDTOBase(
    override val id: BadgeLevelId = "",
    override val identifier: BadgeLevelIdentifier = "",
    override val name: String,
    override val color: String?,
    override val image: String?,
    override val level: Int,
    override val logic: String?,
): BadgeLevelDTO
