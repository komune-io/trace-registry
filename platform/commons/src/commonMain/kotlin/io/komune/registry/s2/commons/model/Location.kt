package io.komune.registry.s2.commons.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface LocationDTO {
    val country: String?
    val region: String?
}

@Serializable
data class Location(
    override val country: String?,
    override val region: String?
) : LocationDTO
