package city.smartb.registry.f2.activity.domain.model

interface ActivityFileUrlDTO {
    val name: String
    val url: String
    val metadata: Map<String, String>?
}

data class ActivityFileUrl(
    override val name: String,
    override val url: String,
    override val metadata: Map<String, String> = emptyMap()
): ActivityFileUrlDTO
