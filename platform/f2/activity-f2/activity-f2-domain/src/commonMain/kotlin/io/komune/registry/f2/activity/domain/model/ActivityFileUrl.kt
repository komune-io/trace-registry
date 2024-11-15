package io.komune.registry.f2.activity.domain.model

/**
 * A file associated with an activity.
 * @d2  model
 * @parent [io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 */
interface ActivityFileUrlDTO {
    val name: String
    val url: String
    val metadata: Map<String, String>?
}

/**
 * @d2 inherit
 */
data class ActivityFileUrl(
    override val name: String,
    override val url: String,
    override val metadata: Map<String, String> = emptyMap()
): ActivityFileUrlDTO
