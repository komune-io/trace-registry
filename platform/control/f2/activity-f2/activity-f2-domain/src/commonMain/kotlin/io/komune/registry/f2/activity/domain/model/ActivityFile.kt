package io.komune.registry.f2.activity.domain.model

import kotlin.js.JsExport

/**
 * A file associated with an activity.
 * @d2 model
 * @parent [io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 */
@JsExport
interface ActivityFileDTO {
    val name: String
    val content: ByteArray
    val metadata: Map<String, String>?
}

/**
 * @d2 inherit
 */
data class ActivityFile(
    override val name: String,
    override val content: ByteArray,
    override val metadata: Map<String, String>? = null
): ActivityFileDTO
